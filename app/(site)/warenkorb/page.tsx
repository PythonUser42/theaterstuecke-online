"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function WarenkorbPage() {
  const { items, total, removeItem, setQuantity } = useCart();

  if (items.length === 0) {
    return (
      <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-10 text-center md:px-10 md:py-16">
            <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
              Ihr Warenkorb ist leer
            </h1>
            <p className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
              Stöbern Sie in unserem Angebot und finden Sie das passende Stück!
            </p>
            <Link
              href="/suche"
              className="inline-block rounded-[8px] bg-[#cc3333] px-8 py-3 font-['Amatic_SC'] text-[24px] font-bold text-white transition-colors hover:bg-[#aa0000]"
            >
              Zur Stück-Suche
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
          Warenkorb
        </h1>

        <div className="space-y-4">
          {items.map((item) => {
            const key = `${item.playSlug}::${item.variantId ?? "default"}`;
            return (
              <div
                key={key}
                className="flex flex-col gap-4 rounded-[12px] bg-[#fdeaa1] p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <Link
                    href={`/stueck/${item.playSlug}`}
                    className="font-['Amatic_SC'] text-[24px] font-bold text-[#cc3333] hover:text-[#aa0000]"
                  >
                    {item.title}
                  </Link>
                  {item.variantName && (
                    <span className="ml-2 text-[13px] text-[#424242]">
                      ({item.variantName})
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {/* Quantity controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setQuantity(item.playSlug, item.variantId, item.quantity - 1)
                      }
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-[#cc3333] text-[14px] text-[#cc3333] hover:bg-[#cc3333] hover:text-white"
                    >
                      −
                    </button>
                    <span className="min-w-[1.5rem] text-center font-['Amatic_SC'] text-[24px] font-bold text-[#1a1a1a]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        setQuantity(item.playSlug, item.variantId, item.quantity + 1)
                      }
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-[#cc3333] text-[14px] text-[#cc3333] hover:bg-[#cc3333] hover:text-white"
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <span className="min-w-[80px] text-right font-['Amatic_SC'] text-[28px] font-bold text-[#1a1a1a]">
                    {(item.price * item.quantity).toFixed(2).replace(".", ",")} €
                  </span>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.playSlug, item.variantId)}
                    className="text-[14px] text-[#cc3333] underline hover:text-[#aa0000]"
                  >
                    Entfernen
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total + checkout */}
        <div className="mt-8 rounded-[12px] bg-[#fdeaa1] p-5">
          <div className="flex items-center justify-between">
            <span className="font-['Amatic_SC'] text-[28px] font-bold text-[#1a1a1a]">
              Gesamt
            </span>
            <span className="font-['Amatic_SC'] text-[36px] font-bold text-[#cc3333]">
              {total.toFixed(2).replace(".", ",")} €
            </span>
          </div>
          <p className="mt-1 text-[13px] text-[#424242]">
            inkl. MwSt. (Kleinunternehmerregelung — keine MwSt. ausgewiesen)
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/suche"
              className="inline-block rounded-[8px] border border-[#cc3333] px-6 py-3 text-center font-['Amatic_SC'] text-[22px] font-bold text-[#cc3333] transition-colors hover:bg-[#cc3333] hover:text-white"
            >
              Weiter einkaufen
            </Link>
            <Link
              href="/kasse"
              className="inline-block rounded-[8px] bg-[#cc3333] px-8 py-3 text-center font-['Amatic_SC'] text-[22px] font-bold text-white transition-colors hover:bg-[#aa0000]"
            >
              Zur Kasse
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
