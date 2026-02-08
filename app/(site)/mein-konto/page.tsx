"use client";

import { useState } from "react";
import Link from "next/link";

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
  paidAt: string;
  totalAmount: number;
}

export default function MeinKontoPage() {
  const [sessionId, setSessionId] = useState("");
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLookup(e: React.FormEvent) {
    e.preventDefault();
    if (!sessionId.trim()) return;

    setLoading(true);
    setError("");
    setOrder(null);

    try {
      const res = await fetch(`/api/order?session_id=${sessionId.trim()}`);
      if (!res.ok) {
        throw new Error("Bestellung nicht gefunden");
      }
      const data = await res.json();
      setOrder(data.order);
    } catch {
      setError("Bestellung nicht gefunden. Bitte überprüfen Sie die Bestellnummer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1a1a1a]">Mein Konto</span>
        </nav>

        <div className="rounded-[20px] bg-[#fdeaa1] p-5 md:p-8">
          <h1 className="mb-6 text-center font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Mein Konto
          </h1>

          <div className="mx-auto max-w-[500px]">
            <p className="mb-6 text-center text-[15px] leading-[1.65em] text-[#424242]">
              Geben Sie Ihre Bestellnummer ein, um Ihre Bestellung einzusehen
              und Downloads erneut herunterzuladen.
            </p>

            <form onSubmit={handleLookup} className="mb-8">
              <label className="mb-2 block text-[13px] font-bold text-[#424242]">
                Bestellnummer (Session-ID)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={sessionId}
                  onChange={(e) => setSessionId(e.target.value)}
                  placeholder="cs_test_..."
                  className="flex-1 rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#1a1a1a] placeholder:text-[#999]"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-[8px] bg-[#cc3333] px-6 py-3 font-['Amatic_SC'] text-[22px] font-bold text-white transition-colors hover:bg-[#aa0000] disabled:opacity-50"
                >
                  {loading ? "..." : "Suchen"}
                </button>
              </div>
            </form>

            {error && (
              <div className="mb-6 rounded-[12px] bg-[#cc3333]/10 p-4 text-center text-[15px] text-[#cc3333]">
                {error}
              </div>
            )}

            {order && (
              <div className="rounded-[12px] bg-[#ffcc00] p-5">
                <h2 className="mb-4 font-['Amatic_SC'] text-[28px] font-bold text-[#cc3333]">
                  Ihre Bestellung
                </h2>
                <p className="mb-4 text-[13px] text-[#424242]">
                  Bestellt am: {new Date(order.paidAt).toLocaleDateString("de-DE")}
                  {order.email && <> · {order.email}</>}
                </p>
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div
                      key={item.playSlug}
                      className="flex items-center justify-between rounded-[8px] bg-[#fdeaa1] p-3"
                    >
                      <div>
                        <Link
                          href={`/stueck/${item.playSlug}`}
                          className="font-['Amatic_SC'] text-[20px] font-bold text-[#cc3333] hover:text-[#aa0000]"
                        >
                          {item.title}
                        </Link>
                        <span className="ml-2 text-[13px] text-[#424242]">
                          × {item.quantity}
                        </span>
                      </div>
                      <span className="font-['Amatic_SC'] text-[22px] font-bold text-[#1a1a1a]">
                        {(item.price * item.quantity).toFixed(2).replace(".", ",")} €
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[#e6b800] pt-4">
                  <span className="font-['Amatic_SC'] text-[24px] font-bold text-[#1a1a1a]">
                    Gesamt
                  </span>
                  <span className="font-['Amatic_SC'] text-[28px] font-bold text-[#cc3333]">
                    {order.totalAmount.toFixed(2).replace(".", ",")} €
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
