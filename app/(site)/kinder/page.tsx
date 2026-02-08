import Link from "next/link";

const ageGroups = [
  { label: "Kita", href: "/kategorie/kita", desc: "Stücke für die Allerkleinsten ab 3 Jahren" },
  { label: "Grundschule", href: "/kategorie/grundschule", desc: "Stücke für Kinder von 6 bis 10 Jahren" },
  { label: "9-13 Jahre", href: "/kategorie/9-13-jahre", desc: "Stücke für Kinder und junge Jugendliche" },
];

export default function KinderPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Theaterstücke für Kinder</span>
        </nav>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-2 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Theaterstücke für Kinder
          </h1>
          <h2 className="mb-4 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#424242] md:text-[26px] md:leading-[30px]">
            zum Nachspielen
          </h2>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Altersgerechte Theaterstücke für Kinder &mdash; von der Kita bis
            zur weiterführenden Schule. Alle Stücke sind erprobt, gut spielbar
            und machen den jungen Darstellern Spaß.
          </p>
        </div>

        <h2 className="mb-6 font-['Amatic_SC'] text-[26px] font-bold leading-[30px] text-[#cc3333] md:text-[30px] md:leading-[34px]">
          Theaterstücke für Kinder nach Altersgruppen
        </h2>

        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {ageGroups.map((ag) => (
            <Link
              key={ag.label}
              href={ag.href}
              className="flex flex-col items-center justify-center rounded-[20px] bg-[#fdeaa1] px-6 py-10 text-center transition-colors hover:bg-[#fcea62]"
            >
              <span className="mb-2 font-['Amatic_SC'] text-[28px] font-bold leading-[34px] text-[#cc3333]">
                {ag.label}
              </span>
              <span className="text-[14px] text-[#424242]">{ag.desc}</span>
            </Link>
          ))}
        </div>

        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            Theaterspielen macht selbstbewusst!
          </h2>
          <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
            Auf der Bühne können Kinder über sich hinauswachsen. Theaterspielen
            fördert Sprache, Ausdrucksfähigkeit, Teamarbeit und Selbstvertrauen.
            Auch stille und zurückhaltende Kinder blühen beim Theaterspielen auf.
          </p>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Alle Stücke enthalten ausführliche Regieanweisungen und werden als
            PDF geliefert &mdash; einfach herunterladen, ausdrucken und losspielen!
          </p>
        </div>
      </div>
    </main>
  );
}
