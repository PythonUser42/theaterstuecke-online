"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import type { Play } from "@/lib/data";

export default function AddToCart({ play }: { play: Play }) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    play.variants?.[0]?.id ?? null
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const variant = play.variants?.find((v) => v.id === selectedVariant);
  const currentPrice = variant?.price ?? play.price;

  function handleAdd() {
    addItem(
      {
        playSlug: play.slug,
        variantId: selectedVariant,
        title: play.title,
        variantName: variant?.name ?? null,
        price: currentPrice,
      },
      quantity
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="rounded-[12px] bg-[#ffcc00] p-5">
      {/* Variant selector */}
      {play.variants && play.variants.length > 1 && (
        <div className="mb-4">
          <label className="mb-1 block text-[13px] font-bold text-[#424242]">
            Version wählen
          </label>
          <select
            value={selectedVariant ?? ""}
            onChange={(e) => setSelectedVariant(e.target.value)}
            className="w-full rounded-[8px] border border-[#e6b800] bg-white px-3 py-2 text-[15px] text-[#1a1a1a]"
          >
            {play.variants.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name} — {v.price},00 €
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Price display */}
      <div className="mb-4 text-center">
        <span className="font-['Amatic_SC'] text-[40px] font-bold leading-[40px] text-[#cc3333]">
          {currentPrice},00 €
        </span>
        {play.variants && play.variants.length > 1 && (
          <span className="mt-1 block text-[13px] text-[#424242]">
            {variant?.name}
          </span>
        )}
      </div>

      {/* Quantity */}
      <div className="mb-4 flex items-center justify-center gap-3">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#cc3333] text-[#cc3333] hover:bg-[#cc3333] hover:text-white"
        >
          −
        </button>
        <span className="min-w-[2rem] text-center font-['Amatic_SC'] text-[28px] font-bold text-[#1a1a1a]">
          {quantity}
        </span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#cc3333] text-[#cc3333] hover:bg-[#cc3333] hover:text-white"
        >
          +
        </button>
      </div>

      {/* Add to cart button */}
      <button
        onClick={handleAdd}
        className={`w-full rounded-[8px] px-6 py-3 font-['Amatic_SC'] text-[24px] font-bold text-white transition-colors ${
          added
            ? "bg-green-600"
            : "bg-[#cc3333] hover:bg-[#aa0000]"
        }`}
      >
        {added ? "Im Warenkorb ✓" : "In den Warenkorb"}
      </button>
    </div>
  );
}
