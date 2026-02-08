import Link from "next/link";
import { getAllPlays } from "@/lib/data";
import PlayCard from "@/app/(site)/components/PlayCard";

const featuredSlugs = [
  "frauen-sind-anders-maenner-auch-frauenensemble",
  "frauen-sind-anders-maenner-auch",
  "feine-gesellschaft",
  "friede-freude-familienfeier-10-11-rollen",
];

export default function FrauenEnsemblePage() {
  const allPlays = getAllPlays();
  const plays = featuredSlugs
    .map((s) => allPlays.find((p) => p.slug === s))
    .filter(Boolean) as typeof allPlays;

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Theaterstücke für Frauen-Ensemble</span>
        </nav>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-4 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Theaterstücke für Frauen-Ensemble
          </h1>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Komödien, Sketche und Einakter, die speziell für Frauen-Ensembles
            geschrieben oder angepasst wurden. Ideal für Theatergruppen, die
            auf der Suche nach unterhaltsamen Stücken für ein überwiegend
            weibliches Ensemble sind.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plays.map((play) => (
            <PlayCard key={play.slug} play={play} />
          ))}
        </div>
      </div>
    </main>
  );
}
