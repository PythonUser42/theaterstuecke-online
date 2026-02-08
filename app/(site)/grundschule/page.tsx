import Link from "next/link";

export default function GrundschuleLandingPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Theaterstücke für die Grundschule</span>
        </nav>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-2 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Theaterstücke für die Grundschule
          </h1>
          <h2 className="mb-4 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#424242] md:text-[26px] md:leading-[30px]">
            Von Aschenputtel bis Zirkustheater
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Theaterstücke für Kinder von 6 bis 10 Jahren &mdash; erprobt und
            gut spielbar. Von Grimm-Märchen über lustige Sketche bis zu
            spannenden Krimis ist für jeden Geschmack etwas dabei.
          </p>
          <Link
            href="/kategorie/grundschule"
            className="inline-block rounded-[8px] bg-[#cc3333] px-8 py-3 font-['Amatic_SC'] text-[24px] font-bold text-white transition-colors hover:bg-[#aa0000]"
          >
            Alle Stücke für die Grundschule
          </Link>
        </div>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            Theaterspielen in der Grundschule
          </h2>
          <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
            Theater in der Grundschule ist mehr als ein Auftritt &mdash; es
            ist eine Erfahrung, die Kinder stärkt und verbindet. Auf der
            Bühne können auch stille und zurückhaltende Kinder über sich
            hinauswachsen und ihre Talente entdecken.
          </p>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Unsere Stücke sind so geschrieben, dass jedes Kind eine Rolle
            bekommt und sich als Teil des Ganzen fühlt. Ausführliche
            Regieanweisungen helfen bei der Inszenierung.
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
