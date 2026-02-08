const footerCols = [
  [
    { label: "Aufführungsrecht", href: "/auffuehrungsrecht" },
    { label: "Aufführungen anmelden", href: "/auffuehrung-anmelden" },
    { label: "Einnahmen melden", href: "/einnahmen-melden" },
  ],
  [
    { label: "Bestellen & Bezahlen", href: "/bestellen-bezahlen" },
    { label: "Ihr Widerrufsrecht", href: "/widerrufsrecht" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
  [
    { label: "AGB", href: "/agb" },
    { label: "Impressum", href: "/impressum" },
  ],
  [
    { label: "Autorin", href: "/autorin" },
    { label: "Kontakt", href: "/kontakt" },
  ],
];

export default function TheaterFooter() {
  return (
    <footer
      data-section-id="footer"
      className="border-t-[6px] border-[#cc0000] bg-[#aa0000] px-4 pt-[36px] pb-8 sm:px-6 md:px-5"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* 4-column link grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {footerCols.map((col, i) => (
            <div key={i} className="space-y-2">
              {col.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[15px] text-white hover:text-[#ffcc00]"
                >
                  ▷ {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Phone */}
        <p className="mb-4 text-center text-[15px] text-white">
          Tel. +49 (0)202 – 253 180 07
        </p>

        {/* Copyright */}
        <p className="text-center text-[14px] text-neutral-200">
          Copyright © {new Date().getFullYear()} Theaterstücke-online
        </p>
      </div>
    </footer>
  );
}
