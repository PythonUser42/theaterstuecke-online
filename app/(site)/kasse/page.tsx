"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import Link from "next/link";

export default function KassePage() {
  const { items, total, clearCart } = useCart();
  const [status, setStatus] = useState<"loading" | "redirecting" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (items.length === 0) {
      setStatus("error");
      setErrorMsg("Ihr Warenkorb ist leer.");
      return;
    }

    const checkoutItems = items.map((i) => ({
      playSlug: i.playSlug,
      variantId: i.variantId,
      quantity: i.quantity,
    }));

    setStatus("redirecting");

    fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: checkoutItems }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Checkout fehlgeschlagen");
        }
        return res.json();
      })
      .then((data) => {
        clearCart();
        window.location.href = data.url;
      })
      .catch((err) => {
        setStatus("error");
        setErrorMsg(err.message);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-10 text-center md:px-10 md:py-16">
          {status === "error" ? (
            <>
              <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
                Fehler bei der Weiterleitung
              </h1>
              <p className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
                {errorMsg}
              </p>
              <Link
                href="/warenkorb"
                className="inline-block rounded-[8px] bg-[#cc3333] px-8 py-3 font-['Amatic_SC'] text-[24px] font-bold text-white transition-colors hover:bg-[#aa0000]"
              >
                Zurück zum Warenkorb
              </Link>
            </>
          ) : (
            <>
              <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
                Weiterleitung zum Zahlungsdienstleister...
              </h1>
              <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
                Ihre Bestellung ({total.toFixed(2).replace(".", ",")} €) wird vorbereitet.
              </p>
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-[#cc3333] border-t-transparent" />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
