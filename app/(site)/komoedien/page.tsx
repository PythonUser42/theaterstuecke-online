import Link from "next/link";
import { getAllPlays } from "@/lib/data";
import PlayCard from "@/app/(site)/components/PlayCard";

export default function KomoedienPage() {
  const plays = getAllPlays().filter(
    (p) =>
      p.ageGroups.includes("Erwachsene") &&
      (p.themes.includes("Komödien & Einakter") ||
        p.themes.includes("Lustig, skurril, Comedy"))
  );

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Theaterstücke &amp; Komödien</span>
        </nav>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-4 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Theaterstücke und Komödien
          </h1>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Alle Komödien, Einakter und Sketche von Claudia Kumpfe für
            Erwachsene und Theatergruppen &mdash; unterhaltsam, witzig und anspruchsvoll.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plays.map((play) => (
            <PlayCard key={play.slug} play={play} />
          ))}
        </div>

        {plays.length === 0 && (
          <div className="rounded-[20px] bg-[#fdeaa1] p-10 text-center">
            <p className="font-['Amatic_SC'] text-[28px] font-bold text-[#cc3333]">
              Keine Stücke gefunden.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
