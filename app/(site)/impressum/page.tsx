import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Impressum</span>
        </nav>

        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Impressum
          </h1>

          <div className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
            <p className="mb-1 text-[18px] font-bold text-[#1a1a1a]">Theaterstücke-online</p>
            <p>Claudia Kumpfe</p>
            <p>Gottfried-Eschmann-Weg 104</p>
            <p className="mb-4">42327 Wuppertal, Deutschland</p>

            <p>Tel. +49 (0)202 &ndash; 253 180 07</p>
            <p>Fax +49 (0)202 &ndash; 253 180 08</p>
            <p>
              E-Mail:{" "}
              <Link href="/kontakt" className="text-[#cc3333] underline hover:text-[#aa0000]">
                Kontaktformular
              </Link>
            </p>
          </div>

          <div className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
            <p className="mb-2">
              Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
              <span className="text-[#cc3333]">ec.europa.eu/consumers/odr</span>
            </p>
            <p>
              Wir sind nicht verpflichtet und nicht bereit, an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <h2 className="mb-3 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            Bildnachweis
          </h2>
          <p className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
            Eigene Produktionen am Wuppertaler Kinder- und Jugendtheater.
            Fotografin: Karola Brüggemann.
          </p>

          <h2 className="mb-3 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            Steueridentifikation
          </h2>
          <p className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
            Steuer-Nr.: 132/5173/2498<br />
            Ust-ID: DE330653408
          </p>

          <h2 className="mb-3 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            Bankverbindung
          </h2>
          <p className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
            GLS Bank<br />
            IBAN: DE75 4306 0967 1106 4820 00<br />
            BIC: GENODEM1GLS<br />
            Kontoinhaber: Claudia Kumpfe
          </p>

          <p className="text-[14px] text-[#424242]">
            Mitglied der Initiative{" "}
            <span className="font-bold">&bdquo;Fairness im Handel&ldquo;</span>.
          </p>
        </div>
      </div>
    </main>
  );
}
