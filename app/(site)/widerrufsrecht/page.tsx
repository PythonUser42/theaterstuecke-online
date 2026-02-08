import Link from "next/link";

export default function WiderrufsrechtPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Ihr Widerrufsrecht</span>
        </nav>

        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Ihr Widerrufsrecht
          </h1>

          <p className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
            Verbraucher haben bei Fernabsatzverträgen ein gesetzliches Widerrufsrecht.
          </p>

          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            A. Widerrufsbelehrung
          </h2>

          <h3 className="mb-3 text-[16px] font-bold text-[#1a1a1a]">Widerrufsrecht</h3>
          <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
            diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage
            ab dem Tag des Vertragsschlusses.
          </p>
          <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer
            eindeutigen Erklärung (z.&thinsp;B. ein mit der Post versandter Brief
            oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen,
            informieren.
          </p>
          <div className="mb-6 rounded-[12px] bg-[#ffcc00] p-5 text-[15px] leading-[1.65em] text-[#424242]">
            <p className="font-bold">Claudia Kumpfe &mdash; Theaterverlag-online</p>
            <p>Gottfried-Eschmann-Weg 104</p>
            <p>42327 Wuppertal, Deutschland</p>
            <p>Tel. +49 (0)202 &ndash; 253 180 07</p>
            <p>
              E-Mail:{" "}
              <Link href="/kontakt" className="text-[#cc3333] underline hover:text-[#aa0000]">
                Kontaktformular
              </Link>
            </p>
          </div>

          <h3 className="mb-3 text-[16px] font-bold text-[#1a1a1a]">Folgen des Widerrufs</h3>
          <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
            die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen
            vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
            Ihren Widerruf bei uns eingegangen ist. Für diese Rückzahlung verwenden
            wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion
            eingesetzt haben.
          </p>

          <h3 className="mb-3 text-[16px] font-bold text-[#1a1a1a]">
            Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts
          </h3>
          <p className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
            Das Widerrufsrecht erlischt bei Verträgen zur Lieferung von digitalen
            Inhalten, die nicht auf einem körperlichen Datenträger geliefert werden,
            wenn die Ausführung begonnen hat, nachdem der Verbraucher ausdrücklich
            zugestimmt hat.
          </p>

          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            B. Widerrufsformular
          </h2>
          <div className="rounded-[12px] border border-[#e6b800] bg-white p-5 md:p-6">
            <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
              Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses
              Formular aus und senden Sie es zurück:
            </p>
            <div className="space-y-2 text-[15px] text-[#424242]">
              <p>An: Claudia Kumpfe &mdash; Theaterverlag-online</p>
              <p>Gottfried-Eschmann-Weg 104, 42327 Wuppertal</p>
              <p className="mt-4">
                Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
                Vertrag über den Kauf der folgenden Waren / die Erbringung der
                folgenden Dienstleistung (*):
              </p>
              <p>_______________________________________________</p>
              <p>Bestellt am / erhalten am (*): _______________</p>
              <p>Name des/der Verbraucher(s): _______________</p>
              <p>Anschrift des/der Verbraucher(s): _______________</p>
              <p className="mt-4">Datum: _______________</p>
              <p className="mt-2 text-[13px] text-[#888]">(*) Unzutreffendes streichen</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
