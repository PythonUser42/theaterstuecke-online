import Link from "next/link";

const ageGroups = [
  { label: "Grundschule", href: "/kategorie/grundschule", desc: "Stücke für Kinder von 6 bis 10 Jahren" },
  { label: "9-13 Jahre", href: "/kategorie/9-13-jahre", desc: "Stücke für Kinder und junge Jugendliche" },
  { label: "Jugendliche", href: "/kategorie/jugendliche", desc: "Stücke für Jugendliche ab 14 Jahren" },
];

export default function SchulePage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Theaterstücke für die Schule</span>
        </nav>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-4 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Theaterstücke für die Schule
          </h1>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Erprobte und gut spielbare Theaterstücke für den Schulunterricht,
            Theater-AGs und Schulaufführungen. Alle Stücke sind altersgerecht
            geschrieben und enthalten ausführliche Regieanweisungen.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {ageGroups.map((ag) => (
              <Link
                key={ag.label}
                href={ag.href}
                className="flex flex-col items-center justify-center rounded-[16px] border border-[#e6b800] bg-[#ffcc00] px-6 py-8 text-center transition-colors hover:bg-[#fcea62]"
              >
                <span className="mb-2 font-['Amatic_SC'] text-[28px] font-bold leading-[34px] text-[#cc3333]">
                  {ag.label}
                </span>
                <span className="text-[14px] text-[#424242]">{ag.desc}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            Theaterspielen in der Schule
          </h2>
          <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
            Theaterspielen stärkt das Selbstbewusstsein, fördert die Teamarbeit
            und bietet Kindern und Jugendlichen die Möglichkeit, sich kreativ
            auszudrücken. Auf der Bühne können auch stille und zurückhaltende
            Schüler über sich hinauswachsen.
          </p>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Alle Stücke werden als PDF geliefert und können sofort kopiert und
            eingesetzt werden. Das{" "}
            <Link href="/auffuehrungsrecht" className="text-[#cc3333] underline hover:text-[#aa0000]">
              vereinfachte Aufführungsrecht
            </Link>{" "}
            für Schulen ist im Kaufpreis enthalten.
          </p>
        </div>
      </div>
    </main>
  );
}
