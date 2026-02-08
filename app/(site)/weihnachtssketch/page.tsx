import Link from "next/link";
import { getPlayBySlug } from "@/lib/data";

export default function WeihnachtssketchPage() {
  const play = getPlayBySlug("oh-du-seliger-weihnachtsfrieden-2");

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Lustige Weihnachts-Sketch-Komödie</span>
        </nav>

        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-4 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Lustige Weihnachts-Sketch-Komödie
          </h1>

          {play && (
            <>
              <h2 className="mb-4 font-['Amatic_SC'] text-[26px] font-bold leading-[30px] text-[#1a1a1a] md:text-[32px] md:leading-[36px]">
                {play.title}
              </h2>

              <div className="mb-6 flex flex-wrap gap-4 text-[15px] text-[#424242]">
                <span>{play.minPlayers}&ndash;{play.maxPlayers} Spieler</span>
                <span>&middot;</span>
                <span>{play.durationMinutes} Minuten</span>
                <span>&middot;</span>
                <span>ab {play.price},00 &euro;</span>
              </div>

              <p className="mb-8 whitespace-pre-line text-[15px] leading-[1.65em] text-[#424242]">
                {play.excerpt}
              </p>

              <div className="flex flex-wrap gap-4">
                {play.leseprobeUrl && (
                  <a
                    href={play.leseprobeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-[8px] bg-[#cc3333] px-8 py-3 font-['Amatic_SC'] text-[24px] font-bold text-white transition-colors hover:bg-[#aa0000]"
                  >
                    &rarr; zur Leseprobe
                  </a>
                )}
                <Link
                  href={`/stueck/${play.slug}`}
                  className="inline-block rounded-[8px] border-2 border-[#cc3333] px-8 py-3 font-['Amatic_SC'] text-[24px] font-bold text-[#cc3333] transition-colors hover:bg-[#cc3333] hover:text-white"
                >
                  Zum Stück
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/weihnachten"
            className="inline-block rounded-[8px] bg-[#cc3333] px-8 py-3 font-['Amatic_SC'] text-[24px] font-bold text-white transition-colors hover:bg-[#aa0000]"
          >
            Alle Weihnachtsstücke ansehen
          </Link>
        </div>
      </div>
    </main>
  );
}
