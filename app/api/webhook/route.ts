import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { saveOrder, type OrderItem } from "@/lib/orders";
import { sendOrderConfirmation } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event;
  try {
    event = getStripe().webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const metadata = session.metadata || {};
    const itemCount = parseInt(metadata.itemCount || "0", 10);

    const items: OrderItem[] = [];
    for (let i = 0; i < itemCount; i++) {
      const raw = metadata[`item_${i}`];
      if (raw) {
        items.push(JSON.parse(raw));
      }
    }

    const order = {
      sessionId: session.id,
      email: session.customer_details?.email || "",
      items,
      paidAt: new Date().toISOString(),
      totalAmount: (session.amount_total || 0) / 100,
    };

    saveOrder(order);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    try {
      await sendOrderConfirmation(order, baseUrl);
    } catch (err) {
      console.error("Email send failed:", err);
    }
  }

  return NextResponse.json({ received: true });
}
