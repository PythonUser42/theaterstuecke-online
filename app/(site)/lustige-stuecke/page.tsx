import Link from "next/link";

const categories = [
  {
    label: "Abendprogramme",
    desc: "Komödien, Sketche &amp; Comedy für Erwachsene",
    href: "/kategorie/erwachsene",
  },
  {
    label: "Familienprogramme",
    desc: "Sketche, Märchenmix &amp; Comedy für die ganze Familie",
    href: "/suche?ag=Familienprogramme",
  },
  {
    label: "Schultheater",
    desc: "Sketche und lustige Stücke für junge Spieler",
    href: "/schule",
  },
];

export default function LustigeStueckePage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Lustige Theaterstücke</span>
        </nav>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-4 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Lustige Theaterstücke
          </h1>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Unterhaltsame, witzige und skurrile Theaterstücke für alle
            Altersgruppen &mdash; von der Sketch-Komödie bis zum turbulenten
            Märchenmix.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="flex flex-col items-center justify-center rounded-[20px] bg-[#fdeaa1] px-6 py-10 text-center transition-colors hover:bg-[#fcea62]"
            >
              <span className="mb-2 font-['Amatic_SC'] text-[28px] font-bold leading-[34px] text-[#cc3333]">
                {cat.label}
              </span>
              <span
                className="text-[15px] text-[#424242]"
                dangerouslySetInnerHTML={{ __html: cat.desc }}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
