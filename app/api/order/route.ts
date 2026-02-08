import { NextRequest, NextResponse } from "next/server";
import { getOrder } from "@/lib/orders";

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
  }

  const order = getOrder(sessionId);
  if (!order) {
    return NextResponse.json({ error: "Bestellung nicht gefunden" }, { status: 404 });
  }

  return NextResponse.json({ order });
}
