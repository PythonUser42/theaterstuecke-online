"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

interface OrderItem {
  playSlug: string;
  title: string;
  price: number;
  quantity: number;
}

interface Order {
  sessionId: string;
  email: string;
  items: OrderItem[];
  totalAmount: number;
}

function DankeContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(!!sessionId);

  useEffect(() => {
    if (!sessionId) return;
    fetch(`/api/order?session_id=${sessionId}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.order) setOrder(data.order);
      })
      .finally(() => setLoading(false));
  }, [sessionId]);

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-10 md:px-10 md:py-16">
          <h1 className="mb-6 text-center font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Vielen Dank für Ihre Bestellung!
          </h1>

          <div className="mx-auto max-w-[700px]">
            {/* Order details if available */}
            {loading && (
              <div className="mb-8 text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-[#cc3333] border-t-transparent" />
                <p className="mt-3 text-[15px] text-[#424242]">Bestellung wird geladen...</p>
              </div>
            )}

            {order && (
              <div className="mb-8">
                <h2 className="mb-4 font-['Amatic_SC'] text-[28px] font-bold leading-[32px] text-[#cc3333]">
                  Ihre Downloads
                </h2>
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div
                      key={item.playSlug}
                      className="flex items-center justify-between rounded-[12px] bg-[#ffcc00] p-4"
                    >
                      <div>
                        <span className="font-['Amatic_SC'] text-[22px] font-bold text-[#1a1a1a]">
                          {item.title}
                        </span>
                        <span className="ml-2 text-[13px] text-[#424242]">
                          ({(item.price * item.quantity).toFixed(2).replace(".", ",")} €)
                        </span>
                      </div>
                      <a
                        href={`/api/download?token=placeholder`}
                        className="rounded-[8px] bg-[#cc3333] px-4 py-2 font-['Amatic_SC'] text-[20px] font-bold text-white transition-colors hover:bg-[#aa0000]"
                      >
                        Download
                      </a>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-[13px] text-[#424242]">
                  Gesamt: <strong>{order.totalAmount.toFixed(2).replace(".", ",")} €</strong>
                  {order.email && (
                    <> — Bestätigung gesendet an <strong>{order.email}</strong></>
                  )}
                </p>
              </div>
            )}

            <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
              Wichtiger Hinweis!
            </h2>

            <div className="space-y-4 text-[15px] leading-[1.65em] text-[#424242]">
              <p>
                Ihre Bestellung wird per E-Mail als PDF-Datei zugestellt. Bitte
                überprüfen Sie auch Ihren Spam-Ordner, falls Sie die Lieferung
                nicht innerhalb weniger Minuten erhalten.
              </p>
              <p>
                Bei Zahlung per <strong>PayPal oder Kreditkarte</strong> erfolgt
                die Lieferung sofort nach Zahlungseingang.
              </p>
              <p>
                Bei Zahlung per <strong>Vorkasse</strong> erfolgt die Lieferung
                nach Zahlungseingang auf unserem Konto.
              </p>
              <p>
                Bei <strong>Kauf auf Rechnung</strong> (nur für Schulen und
                öffentliche Einrichtungen) erfolgt die Lieferung innerhalb
                eines Werktages.
              </p>
              <p>
                Bei Fragen wenden Sie sich bitte an unser{" "}
                <Link href="/kontakt" className="text-[#cc3333] underline hover:text-[#aa0000]">
                  Kontaktformular
                </Link>
                .
              </p>
              <p className="pt-4 text-right">
                Herzliche Grüße,<br />
                <strong>Claudia Kumpfe</strong>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block rounded-[8px] bg-[#cc3333] px-8 py-3 font-['Amatic_SC'] text-[24px] font-bold text-white transition-colors hover:bg-[#aa0000]"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function DankeBestellungPage() {
  return (
    <Suspense
      fallback={
        <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-10 text-center md:px-10 md:py-16">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-[#cc3333] border-t-transparent" />
            </div>
          </div>
        </main>
      }
    >
      <DankeContent />
    </Suspense>
  );
}
