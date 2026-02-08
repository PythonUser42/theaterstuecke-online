import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Datenschutz</span>
        </nav>

        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Datenschutzerklärung
          </h1>

          {/* 1 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            1) Einleitung und Kontaktdaten des Verantwortlichen
          </h2>
          <p className="mb-2 text-[15px] leading-[1.65em] text-[#424242]">
            Wir freuen uns, dass Sie unsere Website besuchen, und bedanken uns für Ihr Interesse.
            Im Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten
            bei der Nutzung unserer Website.
          </p>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            Claudia Kumpfe &mdash; Theaterverlag-online, Gottfried-Eschmann-Weg 104,
            42327 Wuppertal. Tel. +49 (0)202 &ndash; 253 180 07.
          </p>

          {/* 2 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            2) Datenerfassung beim Besuch unserer Website
          </h2>
          <p className="mb-2 text-[15px] leading-[1.65em] text-[#424242]">
            Bei der rein informatorischen Nutzung unserer Website werden durch den Browser
            automatisch Informationen an den Server übermittelt (Server-Logfiles).
          </p>
          <ul className="mb-6 list-inside list-disc space-y-1 text-[15px] leading-[1.65em] text-[#424242]">
            <li>Besuchte URL</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Übertragene Datenmenge</li>
            <li>Referrer-URL</li>
            <li>Verwendeter Browser und Betriebssystem</li>
            <li>IP-Adresse</li>
          </ul>

          {/* 3 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            3) Cookies
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Unsere Website verwendet Cookies. Bei Cookies handelt es sich um kleine
            Textdateien, die Ihr Browser auf Ihrem Endgerät speichert. Die meisten
            der von uns verwendeten Cookies sind sogenannte Session-Cookies, die nach
            Ende der Sitzung automatisch gelöscht werden. Andere Cookies bleiben auf
            Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie können Ihren Browser
            so einstellen, dass Sie über das Setzen von Cookies informiert werden.
          </p>

          {/* 4 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            4) Kontaktaufnahme
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre
            Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen
            gespeichert. Rechtsgrundlage ist Art.&thinsp;6 Abs.&thinsp;1 lit.&thinsp;b DSGVO.
          </p>

          {/* 5 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            5) Datenverarbeitung zur Bestellabwicklung
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Die von Ihnen bei der Bestellung übermittelten personenbezogenen Daten
            werden nur zur Abwicklung Ihrer Bestellung und Lieferung der digitalen
            Inhalte verarbeitet. Eine Weitergabe an Dritte erfolgt nur, soweit dies
            für die Vertragsabwicklung erforderlich ist.
          </p>

          {/* 6 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            6) Webanalysedienste
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Diese Website nutzt etracker (etracker GmbH, Hamburg) zur Webanalyse.
            Die Datenverarbeitung erfolgt cookiefrei und pseudonymisiert. Sie können
            der Datenverarbeitung jederzeit widersprechen.
          </p>

          {/* 7 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            7) Seitenfunktionalitäten
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Für die Kontaktformulare wird Gravity Forms (Rocketgenius Inc., USA)
            eingesetzt. Es besteht ein Auftragsverarbeitungsvertrag unter Einbezug
            der EU-Standardvertragsklauseln.
          </p>

          {/* 8 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            8) Tools und Sonstiges
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Für die Buchhaltung wird Lexware Office (Haufe-Lexware GmbH, Freiburg)
            genutzt. Zum Schutz der Website werden die Sicherheitsdienste Solid
            Security und Wordfence eingesetzt, die zur Abwehr von Angriffen
            IP-Adressen verarbeiten.
          </p>

          {/* 9 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            9) Rechte des Betroffenen
          </h2>
          <p className="mb-2 text-[15px] leading-[1.65em] text-[#424242]">
            Ihnen stehen folgende Rechte nach der DSGVO zu:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1 text-[15px] leading-[1.65em] text-[#424242]">
            <li>Auskunftsrecht (Art.&thinsp;15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art.&thinsp;16 DSGVO)</li>
            <li>Recht auf Löschung (Art.&thinsp;17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art.&thinsp;18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art.&thinsp;20 DSGVO)</li>
            <li>Widerspruchsrecht (Art.&thinsp;21 DSGVO)</li>
            <li>Recht auf Widerruf der Einwilligung (Art.&thinsp;7 Abs.&thinsp;3 DSGVO)</li>
            <li>Beschwerderecht bei einer Aufsichtsbehörde (Art.&thinsp;77 DSGVO)</li>
          </ul>

          <div className="mb-6 rounded-[12px] border border-[#e6b800] bg-[#ffcc00] p-5">
            <p className="text-[15px] font-bold uppercase leading-[1.65em] text-[#1a1a1a]">
              Widerspruchsrecht
            </p>
            <p className="text-[15px] leading-[1.65em] text-[#424242]">
              Soweit wir personenbezogene Daten auf Grundlage unseres berechtigten
              Interesses verarbeiten, haben Sie das Recht, Widerspruch gegen die
              Verarbeitung einzulegen. Bitte richten Sie Ihren Widerspruch an die
              oben genannten Kontaktdaten.
            </p>
          </div>

          {/* 10 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            10) Dauer der Speicherung personenbezogener Daten
          </h2>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Die Dauer der Speicherung richtet sich nach der jeweiligen Rechtsgrundlage,
            dem Verarbeitungszweck und den gesetzlichen Aufbewahrungsfristen
            (z.&thinsp;B. handels- und steuerrechtlich bis zu 10 Jahre).
          </p>
        </div>
      </div>
    </main>
  );
}
