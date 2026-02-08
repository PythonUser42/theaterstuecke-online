import Link from "next/link";
import { getAllPlays } from "@/lib/data";
import PlayCard from "@/app/(site)/components/PlayCard";

const ageLinks = [
  { label: "Kita", href: "/weihnachten-kita" },
  { label: "Grundschule", href: "/weihnachten-grundschule" },
  { label: "9-13 Jahre", href: "/kategorie/9-13-jahre" },
  { label: "Jugendliche", href: "/kategorie/jugendliche" },
  { label: "Erwachsene", href: "/kategorie/erwachsene" },
];

export default function WeihnachtenPage() {
  const plays = getAllPlays().filter((p) => p.isChristmas);

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Weihnachtsstücke</span>
        </nav>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-4 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Kurze Theaterstücke zu Weihnachten
          </h1>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Alle Weihnachtsstücke auf einen Blick &mdash; für jede Altersgruppe
            das passende Stück.
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plays.map((play) => (
            <PlayCard key={play.slug} play={play} />
          ))}
        </div>
      </div>
    </main>
  );
}
