import Link from "next/link";

export default function JugendlichePage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Theaterstücke für Jugendliche</span>
        </nav>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-2 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Theaterstücke für Jugendliche
          </h1>
          <h2 className="mb-4 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#424242] md:text-[26px] md:leading-[30px]">
            Neue Theaterstücke für junge Leute
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Unsere Stücke für Jugendliche sind in enger Zusammenarbeit mit
            jungen Menschen entstanden &mdash; am Wuppertaler Kinder- und
            Jugendtheater erprobt und auf die Lebenswelt junger Leute
            zugeschnitten.
          </p>
          <Link
            href="/kategorie/jugendliche"
            className="inline-block rounded-[8px] bg-[#cc3333] px-8 py-3 font-['Amatic_SC'] text-[24px] font-bold text-white transition-colors hover:bg-[#aa0000]"
          >
            Alle Stücke für Jugendliche
          </Link>
        </div>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            Theaterspielen mit Jugendlichen
          </h2>
          <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
            Theater bietet Jugendlichen einen geschützten Raum, in dem sie
            sich ausprobieren, andere Rollen einnehmen und gemeinsam etwas
            Besonderes schaffen können. Die Stücke behandeln aktuelle Themen,
            sind lustig, spannend oder berührend &mdash; immer aber gut spielbar
            und mit Rollen, die jungen Menschen Spaß machen.
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
