import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items } = body as {
      items: { playSlug: string; variantId: string | null; quantity: number }[];
    };

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Warenkorb ist leer" }, { status: 400 });
    }

    const proto = req.headers.get("x-forwarded-proto") || "https";
    const host = req.headers.get("host") || "theaterstuecke-online.vercel.app";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;
    const url = await createCheckoutSession(items, baseUrl);

    return NextResponse.json({ url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout-Fehler";
    console.error("Checkout error:", err);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
