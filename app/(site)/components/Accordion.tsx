"use client";

import { useState, type ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-[12px] border border-[#e6b800] bg-[#ffcc00] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333]">
          {title}
        </span>
        <span
          className={`text-[20px] text-[#cc3333] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[#e6b800] bg-[#fdeaa1] px-5 py-4 text-[15px] leading-[1.65em] text-[#424242]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
