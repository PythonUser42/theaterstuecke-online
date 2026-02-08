import Link from "next/link";

const programLinks = [
  {
    label: "Stücke für das Abendprogramm",
    desc: "Komödien, Sketche &amp; Einakter für Erwachsene",
    href: "/kategorie/erwachsene",
  },
  {
    label: "Stücke für das Familienprogramm",
    desc: "Von Aschenputtel bis Zirkustheater",
    href: "/suche?ag=Familienprogramme",
  },
  {
    label: "Für Kitas, Schulen &amp; Jugendliche",
    desc: "Altersgerechte Stücke für jede Gruppe",
    href: "/schule",
  },
];

export default function TheaterverlagPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Theaterverlag</span>
        </nav>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-4 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Wir sind ein kleiner deutscher Theaterverlag
          </h1>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Unser Angebot umfasst eine sorgfältig kuratierte Auswahl an
            Theaterstücken, Komödien und Sketch-Programmen. Alle Stücke
            stammen aus der Feder von Claudia Kumpfe und sind am Wuppertaler
            Kinder- und Jugendtheater erprobt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {programLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center rounded-[20px] bg-[#fdeaa1] px-6 py-10 text-center transition-colors hover:bg-[#fcea62]"
            >
              <span
                className="mb-2 font-['Amatic_SC'] text-[26px] font-bold leading-[30px] text-[#cc3333] md:text-[30px] md:leading-[34px]"
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
              <span
                className="text-[15px] text-[#424242]"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
