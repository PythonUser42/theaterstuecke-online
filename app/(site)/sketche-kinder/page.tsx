import Link from "next/link";

const sketchCategories = [
  {
    label: "Sketche für die Grundschule",
    href: "/kategorie/ttg-sketche",
  },
  {
    label: "Sketche für 9-13 Jahre",
    href: "/kategorie/9-13-jahre",
  },
];

export default function SketcheKinderPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Einfache kurze Sketche für Kinder</span>
        </nav>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-4 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Einfache kurze Sketche für Kinder
          </h1>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Kurze, lustige Sketche, die auch von unerfahrenen Spielern leicht
            umgesetzt werden können. Die Sketche dauern jeweils 5 bis 15 Minuten
            und lassen sich einzeln oder als Programm kombinieren &mdash; von
            5 Minuten bis zu einer ganzen Stunde.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {sketchCategories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="flex items-center justify-center rounded-[16px] border border-[#e6b800] bg-[#ffcc00] px-6 py-8 text-center transition-colors hover:bg-[#fcea62]"
              >
                <span className="font-['Amatic_SC'] text-[26px] font-bold leading-[30px] text-[#cc3333]">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-8">
          <h3 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333]">
            Viel Spaß bei den Proben und Aufführungen!
          </h3>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Unsere Sketche eignen sich besonders gut für Schulfeste,
            Projektwochen und Theater-AGs.
          </p>
        </div>

        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            Theaterstücke-online-Service
          </h2>
          <ul className="space-y-2 text-[15px] leading-[1.65em] text-[#424242]">
            <li>&#9830; Einfach und preiswert als PDF-Dateien herunterladen</li>
            <li>&#9830; Ausführliche Leseproben mit 60 bis 70 % des Textes</li>
            <li>&#9830; Theaterpädagogische Hinweise für die Inszenierung</li>
            <li>&#9830; Vereinfachtes Aufführungsrecht für Schulen</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
