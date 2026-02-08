import Link from "next/link";

export default function BestellenBezahlenPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Bestellen &amp; Bezahlen</span>
        </nav>

        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Bestellen &amp; Bezahlen
          </h1>

          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            Ihre Bestellung
          </h2>
          <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
            Alle Texte werden als PDF-Dateien geliefert, die Sie selbst ausdrucken oder
            kopieren können. Es fallen keine zusätzlichen Kosten für Textbücher oder
            Kopiergebühren an.
          </p>
          <p className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
            Bestellen Sie einfach über den Warenkorb. Mit dem Kauf erwerben Sie das
            vereinfachte{" "}
            <Link href="/auffuehrungsrecht" className="text-[#cc3333] underline hover:text-[#aa0000]">
              Aufführungsrecht
            </Link>
            .
          </p>

          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            Bezahlen Sie&nbsp;&hellip;
          </h2>

          <div className="space-y-6">
            <div className="rounded-[12px] bg-[#ffcc00] p-5 md:p-6">
              <h3 className="mb-2 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#1a1a1a]">
                per Vorkasse
              </h3>
              <p className="text-[15px] leading-[1.65em] text-[#424242]">
                Die Lieferung erfolgt nach Zahlungseingang.
              </p>
            </div>

            <div className="rounded-[12px] bg-[#ffcc00] p-5 md:p-6">
              <h3 className="mb-2 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#1a1a1a]">
                mit PayPal oder Kreditkarte
              </h3>
              <p className="text-[15px] leading-[1.65em] text-[#424242]">
                Die Lieferung erfolgt sofort nach Zahlungseingang.
              </p>
            </div>

            <div className="rounded-[12px] bg-[#ffcc00] p-5 md:p-6">
              <h3 className="mb-2 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#1a1a1a]">
                per Kauf auf Rechnung
              </h3>
              <p className="text-[15px] leading-[1.65em] text-[#424242]">
                Der Kauf auf Rechnung ist möglich für offizielle Bestellungen von
                Schulen, Kindergärten, Kirchen und öffentlichen Einrichtungen in
                Deutschland. Die Lieferung mit Rechnung erfolgt innerhalb eines
                Werktages.
              </p>
            </div>
          </div>

          <p className="mt-8 text-[14px] text-[#424242]">
            Zum Öffnen der PDF-Dateien benötigen Sie einen PDF-Reader.
          </p>
        </div>
      </div>
    </main>
  );
}
