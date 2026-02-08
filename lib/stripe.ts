import Stripe from "stripe";
import { getPlayBySlug, type Play, type PlayVariant } from "./data";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-01-28.clover",
    });
  }
  return _stripe;
}

/** @deprecated Use getStripe() for lazy init */
export const stripe = undefined as unknown as Stripe;

interface CheckoutItem {
  playSlug: string;
  variantId: string | null;
  quantity: number;
}

interface ValidatedLineItem {
  play: Play;
  variant: PlayVariant | null;
  price: number;
  quantity: number;
}

export function validateCartItems(items: CheckoutItem[]): ValidatedLineItem[] {
  return items.map((item) => {
    const play = getPlayBySlug(item.playSlug);
    if (!play) throw new Error(`Play not found: ${item.playSlug}`);

    let variant: PlayVariant | null = null;
    let price = play.price;

    if (item.variantId && play.variants) {
      variant = play.variants.find((v) => v.id === item.variantId) ?? null;
      if (!variant) throw new Error(`Variant not found: ${item.variantId} for ${item.playSlug}`);
      price = variant.price;
    }

    if (item.quantity < 1 || item.quantity > 10) {
      throw new Error(`Invalid quantity: ${item.quantity}`);
    }

    return { play, variant, price, quantity: item.quantity };
  });
}

export async function createCheckoutSession(
  items: CheckoutItem[],
  baseUrl: string
): Promise<string> {
  const validated = validateCartItems(items);

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = validated.map(
    ({ play, variant, price, quantity }) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: play.title + (variant ? ` (${variant.name})` : ""),
          metadata: {
            playSlug: play.slug,
            variantId: variant?.id ?? "",
          },
        },
        unit_amount: price * 100, // cents
      },
      quantity,
    })
  );

  const metadata: Record<string, string> = {};
  validated.forEach(({ play, variant, quantity }, i) => {
    metadata[`item_${i}`] = JSON.stringify({
      playSlug: play.slug,
      variantId: variant?.id ?? null,
      title: play.title + (variant ? ` (${variant.name})` : ""),
      price: variant?.price ?? play.price,
      quantity,
    });
  });
  metadata.itemCount = String(validated.length);

  const session = await getStripe().checkout.sessions.create({
    mode: "payment",
    locale: "de",
    line_items: lineItems,
    metadata,
    success_url: `${baseUrl.trim()}/danke-bestellung?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl.trim()}/warenkorb`,
  });

  return session.url!;
}
