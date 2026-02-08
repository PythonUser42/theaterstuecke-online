import Link from "next/link";
import { getAllPlays } from "@/lib/data";

export default function AbendprogrammePage() {
  const adultPlays = getAllPlays().filter((p) =>
    p.ageGroups.includes("Erwachsene")
  );

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1a1a1a]">Abendprogramme</span>
        </nav>

        <div className="rounded-[20px] bg-[#fdeaa1] p-5 md:p-8">
          <h1 className="mb-6 text-center font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Abendprogramme
          </h1>

          <p className="mx-auto mb-8 max-w-[700px] text-center text-[15px] leading-[1.65em] text-[#424242]">
            Unsere Theaterstücke und Sketch-Programme für Erwachsene — ideal für
            Theatergruppen, Vereine und Kabarett-Abende.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {adultPlays.map((play) => (
              <Link
                key={play.slug}
                href={`/stueck/${play.slug}`}
                className="rounded-[12px] bg-[#ffcc00] p-4 transition-colors hover:bg-[#e6b800]"
              >
                <h2 className="mb-1 font-['Amatic_SC'] text-[22px] font-bold text-[#cc3333]">
                  {play.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#424242]">
                  <span>{play.minPlayers}–{play.maxPlayers} Spieler</span>
                  <span>·</span>
                  <span>{play.durationMinutes} min</span>
                  <span>·</span>
                  <span>ab {play.price} €</span>
                </div>
                <p className="mt-2 line-clamp-2 text-[13px] text-[#424242]">
                  {play.excerpt.substring(0, 120)}...
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
