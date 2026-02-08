import Link from "next/link";
import { getAllPlays } from "@/lib/data";

export default function DemoMusikPage() {
  const playsWithSongs = getAllPlays().filter((p) => p.hasLieder);

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Demo Musik</span>
        </nav>

        <div className="rounded-[20px] bg-[#fdeaa1] p-5 md:p-8">
          <h1 className="mb-6 text-center font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Demo Musik — Hörproben
          </h1>

          <p className="mx-auto mb-8 max-w-[700px] text-center text-[15px] leading-[1.65em] text-[#424242]">
            Viele unserer Theaterstücke enthalten eigens komponierte Lieder.
            Hier finden Sie die Stücke, die mit Liedern erhältlich sind.
            Hörproben werden in Kürze ergänzt.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {playsWithSongs.map((play) => (
              <Link
                key={play.slug}
                href={`/stueck/${play.slug}`}
                className="rounded-[12px] bg-[#ffcc00] p-4 transition-colors hover:bg-[#e6b800]"
              >
                <h2 className="mb-1 font-['Amatic_SC'] text-[22px] font-bold text-[#cc3333]">
                  {play.title}
                </h2>
                <div className="flex items-center gap-2 text-[13px] text-[#424242]">
                  <span>♪ mit Liedern</span>
                  <span>·</span>
                  <span>{play.durationMinutes} min</span>
                  <span>·</span>
                  <span>ab {play.price} €</span>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center text-[14px] text-[#424242]">
            Weitere Informationen finden Sie in der{" "}
            <Link href="/suche?lieder=1" className="text-[#cc3333] underline hover:text-[#aa0000]">
              Stück-Suche
            </Link>{" "}
            (Filter: &bdquo;Mit Liedern&ldquo;).
          </p>
        </div>
      </div>
    </main>
  );
}
