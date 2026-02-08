import Link from "next/link";

const ageLinks = [
  { label: "Kita", href: "/kategorie/kita" },
  { label: "Grundschule", href: "/kategorie/grundschule" },
  { label: "9-13 Jahre", href: "/kategorie/9-13-jahre" },
  { label: "Jugendliche", href: "/kategorie/jugendliche" },
  { label: "Erwachsene", href: "/kategorie/erwachsene" },
];

export default function MaerchenPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Märchen zum Nachspielen</span>
        </nav>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-4 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Märchen als kleine Theaterstücke
          </h1>
          <h2 className="mb-4 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#424242] md:text-[26px] md:leading-[30px]">
            Märchen für alle Altersgruppen
          </h2>
          <h3 className="mb-4 font-['Amatic_SC'] text-[20px] font-bold leading-[24px] text-[#cc3333]">
            Brüder Grimm &mdash; Neue Märchen &mdash; Lustige Märchen-Mixe
          </h3>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Klassische Grimm-Märchen, brandneue Geschichten und witzige
            Märchen-Mixe &mdash; unsere Märchenstücke sind bunt, unterhaltsam
            und voller Überraschungen.
          </p>
          <div className="flex flex-wrap gap-3">
            {ageLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-[8px] bg-[#cc3333] px-5 py-2 font-['Amatic_SC'] text-[20px] font-bold text-white transition-colors hover:bg-[#aa0000]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-8">
            <h2 className="mb-3 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
              Klassiker der Brüder Grimm
            </h2>
            <p className="text-[15px] leading-[1.65em] text-[#424242]">
              Aschenputtel, Dornröschen, Schneewittchen, Der Froschkönig,
              Hänsel &amp; Gretel &mdash; die beliebtesten Grimm-Märchen
              in kindgerechten, spielbaren Fassungen.
            </p>
          </div>

          <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-8">
            <h2 className="mb-3 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
              Neue Märchen
            </h2>
            <p className="text-[15px] leading-[1.65em] text-[#424242]">
              Originale Geschichten voller Fantasie &mdash; von mutigen Ameisen
              über Farbenmonster bis zu Prinzessin Kartoffelmann.
            </p>
          </div>

          <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-8">
            <h2 className="mb-3 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
              Witziger Märchenmix
            </h2>
            <p className="text-[15px] leading-[1.65em] text-[#424242]">
              Was passiert, wenn Märchenfiguren durcheinander geraten?
              Stücke wie &bdquo;Entführung ins Märchenland&ldquo; oder
              &bdquo;Schneewittchen und die Rapperzwerge&ldquo; sorgen
              für jede Menge Lacher.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
