import { NextRequest, NextResponse } from "next/server";
import { verifyDownloadToken, getOrder } from "@/lib/orders";
import { getPlayBySlug } from "@/lib/data";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  const verified = verifyDownloadToken(token);
  if (!verified) {
    return NextResponse.json(
      { error: "Download-Link ist ungültig oder abgelaufen." },
      { status: 403 }
    );
  }

  const order = getOrder(verified.sessionId);
  if (!order) {
    return NextResponse.json({ error: "Bestellung nicht gefunden" }, { status: 404 });
  }

  const purchased = order.items.find((i) => i.playSlug === verified.playSlug);
  if (!purchased) {
    return NextResponse.json({ error: "Artikel nicht in Bestellung" }, { status: 403 });
  }

  const play = getPlayBySlug(verified.playSlug);
  if (!play) {
    return NextResponse.json({ error: "Stück nicht gefunden" }, { status: 404 });
  }

  // In production, this would serve the actual PDF file.
  // For now, return a placeholder response.
  return new NextResponse(
    `Download für "${play.title}" — PDF-Datei wird hier bereitgestellt.\n\nDiese Datei wird in der Produktionsversion durch die tatsächliche PDF-Datei ersetzt.`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": `attachment; filename="${play.slug}.txt"`,
      },
    }
  );
}
