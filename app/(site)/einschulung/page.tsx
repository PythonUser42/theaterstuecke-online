import Link from "next/link";
import { getAllPlays } from "@/lib/data";
import PlayCard from "@/app/(site)/components/PlayCard";

export default function EinschulungPage() {
  const plays = getAllPlays().filter((p) =>
    p.themes.includes("Einschulung")
  );

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href="/kategorie/grundschule" className="hover:text-[#cc3333]">Grundschule</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Einschulung</span>
        </nav>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-4 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Kurze Theaterstücke zur Einschulung
          </h1>
          <h2 className="mb-4 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#424242] md:text-[26px] md:leading-[30px]">
            Willkommen in der Schule
          </h2>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Theaterstücke für die Einschulungsfeier &mdash; lustig, spannend
            und kindgerecht. Perfekt für den großen Tag.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plays.map((play) => (
            <PlayCard key={play.slug} play={play} />
          ))}
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
