"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";

interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Stück-Suche", href: "/suche" },
  {
    label: "Kita",
    href: "/kategorie/kita",
    children: [
      { label: "Abschied von der Kita", href: "/kategorie/ttk-abschied-von-der-kita" },
      { label: "Interkulturelle Stücke", href: "/kategorie/ttk-interkulturelle-stuecke" },
      { label: "Märchen der Brüder Grimm", href: "/kategorie/ttk-brueder-grimm" },
      { label: "Monster & Gespenster", href: "/kategorie/ttk-monstergeschichten" },
      { label: "Neue Märchen", href: "/kategorie/ttk-neue-maerchen" },
      { label: "Ostern", href: "/kategorie/ttk-ostern" },
      { label: "Stücke mit Erzähler*in", href: "/kategorie/ttk-stuecke-mit-erzaehlerin" },
      { label: "Weihnachtsstücke", href: "/kategorie/ttk-kurze-weihnachtsstuecke" },
    ],
  },
  {
    label: "Grundschule",
    href: "/kategorie/grundschule",
    children: [
      { label: "Aktuelle Themen", href: "/kategorie/ttg-aktuelle-themen" },
      { label: "Brüder Grimm", href: "/kategorie/ttg-brueder-grimm" },
      { label: "Einschulung", href: "/kategorie/ttg-einschulung" },
      { label: "Interkulturelle Stücke", href: "/kategorie/ttg-interkulturelle-stuecke" },
      { label: "Krimi/Detektive/Geister", href: "/kategorie/ttg-krimi-detektive-geister-spannendes" },
      { label: "Lustig/skurril/Comedy", href: "/kategorie/ttg-lustig-skurril-comedy" },
      { label: "Märchen für Toleranz", href: "/kategorie/ttg-maerchen-fuer-toleranz" },
      { label: "Monster & Gespenster", href: "/kategorie/ttg-monstergeschichten" },
      { label: "Mut & Mobbing", href: "/kategorie/ttg-mut-mobbing" },
      { label: "Neue & witzige Märchen", href: "/kategorie/ttg-neue-maerchen" },
      { label: "Ostern", href: "/kategorie/ttg-ostern" },
      { label: "Sketche", href: "/kategorie/ttg-sketche" },
      { label: "Weihnachtsstücke", href: "/kategorie/ttg-kurze-weihnachtsstuecke" },
      { label: "Witziger Märchenmix", href: "/kategorie/ttg_witziger_maerchenmix" },
      { label: "Zirkustheater", href: "/kategorie/ttg-zirkustheater-grundschule-tt" },
    ],
  },
  {
    label: "9-13 Jahre",
    href: "/kategorie/9-13-jahre",
    children: [
      { label: "Aktuelle Themen", href: "/kategorie/ttw-aktuelle-themen" },
      { label: "Brüder Grimm", href: "/kategorie/ttw-brueder-grimm" },
      { label: "Interkulturelle Stücke", href: "/kategorie/ttw-interkulturelle-stuecke" },
      { label: "Komödien & Einakter", href: "/kategorie/ttw-komoedien" },
      { label: "Krimi/Detektive/Geister", href: "/kategorie/ttw-krimi-detektive-geister-spannendes" },
      { label: "Lustig/skurril/Comedy", href: "/kategorie/ttw-lustig-skurril-comedy" },
      { label: "Mut & Mobbing", href: "/kategorie/ttw-mut-mobbing" },
      { label: "Neue & witzige Märchen", href: "/kategorie/ttw-neue-maerchen" },
      { label: "Weihnachtsstücke", href: "/kategorie/ttw-kurze-weihnachtsstuecke" },
      { label: "Zeitreise", href: "/kategorie/ttw-zeitreise" },
    ],
  },
  {
    label: "Jugendliche",
    href: "/kategorie/jugendliche",
    children: [
      { label: "Aktuelle Themen", href: "/kategorie/ttj-aktuelle-themen" },
      { label: "Komödien & Einakter", href: "/kategorie/ttj-komoedien" },
      { label: "Krimi/Detektive/Geister", href: "/kategorie/ttj-krimi-detektive-geister-spannendes" },
      { label: "Lustig/skurril/Comedy", href: "/kategorie/ttj-lustig-skurril-comedy" },
      { label: "Mut & Mobbing", href: "/kategorie/ttj-mut-mobbing" },
      { label: "Weihnachtsstücke", href: "/kategorie/ttj-kurze-weihnachtsstuecke" },
    ],
  },
  {
    label: "Erwachsene",
    href: "/kategorie/erwachsene",
    children: [
      { label: "Theaterstücke & Komödien", href: "/kategorie/tte-komoedien" },
      { label: "Stücke für Frauen-Ensemble", href: "/kategorie/tte-lustig-skurril-comedy" },
      { label: "Einakter-Komödien", href: "/kategorie/tte-komoedien" },
      { label: "SketchProgramm Frauen & Männer", href: "/kategorie/tte-sketche" },
      { label: "Lustig/skurril/Comedy", href: "/kategorie/tte-lustig-skurril-comedy" },
      { label: "Familienprogramme", href: "/suche?ag=Erwachsene" },
    ],
  },
];

export default function TheaterNavbar() {
  const { itemCount, total } = useCart();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header data-section-id="header" className="bg-[#ffcc00]">
      {/* Top bar — cart + hamburger */}
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2 md:justify-end md:px-5">
        {/* Hamburger — mobile only */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#cc3333" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <Link href="/warenkorb" className="flex items-center gap-2 text-[15px] text-[#424242] hover:text-[#cc3333]">
          <span>Warenkorb</span>
          <span className="font-['Amatic_SC'] text-[24px] font-bold">
            {total.toFixed(2).replace(".", ",")} €
          </span>
          <span className="relative flex h-[46px] w-[42px] items-center justify-center border border-[#cc3333] rounded-[3px]">
            <svg viewBox="0 0 24 24" className="h-[28px] w-[28px]" fill="none" stroke="#cc3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span className="absolute bottom-[2px] right-[2px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#cc3333] text-[11px] font-bold text-white">
              {itemCount}
            </span>
          </span>
        </Link>
      </div>

      {/* Logo — centered */}
      <div className="flex justify-center pb-4 px-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Theaterstücke Online"
            className="max-w-[250px] md:max-w-[450px]"
          />
        </a>
      </div>

      {/* Desktop navigation — light-yellow bar */}
      <nav className="mx-auto hidden max-w-[1200px] px-5 pb-2 md:block">
        <div className="flex items-center justify-center rounded-[8px] border border-[#e6b800] bg-[#fdeaa1]">
          {menuItems.map((item, i) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                href={item.href}
                className={`flex items-center gap-1 px-5 py-3 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] tracking-[1px] text-[#cc3333] hover:bg-[#dd9933] hover:text-white ${
                  i > 0 ? "border-l border-[#e6b800]" : ""
                }`}
              >
                {item.label}
                {item.children && <span className="text-[12px]">˅</span>}
              </a>

              {/* Dropdown */}
              {item.children && openMenu === item.label && (
                <div className="absolute left-0 top-full z-50 min-w-[240px] rounded-b-lg border border-[#cc3333] bg-white shadow-lg">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block border-b border-neutral-100 px-4 py-2 text-[15px] text-[#424242] hover:bg-[#fdeaa1] hover:text-[#cc3333]"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile navigation — slide-down panel */}
      {mobileOpen && (
        <nav className="border-t border-[#e6b800] bg-[#fdeaa1] md:hidden">
          {menuItems.map((item) => (
            <div key={item.label} className="border-b border-[#e6b800]">
              <div className="flex items-center">
                <a
                  href={item.href}
                  className="flex-1 px-4 py-3 font-['Amatic_SC'] text-[22px] font-bold text-[#cc3333]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
                {item.children && (
                  <button
                    className="px-4 py-3 text-[#cc3333]"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    aria-label={`${item.label} Untermenü`}
                  >
                    {mobileExpanded === item.label ? "−" : "+"}
                  </button>
                )}
              </div>
              {item.children && mobileExpanded === item.label && (
                <div className="bg-white">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block border-t border-neutral-100 px-6 py-2 text-[15px] text-[#424242] hover:bg-[#fdeaa1] hover:text-[#cc3333]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
