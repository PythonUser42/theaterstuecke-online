import Link from "next/link";

export default function AGBPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">AGB</span>
        </nav>

        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Allgemeine Geschäftsbedingungen
          </h1>

          {/* TOC */}
          <nav className="mb-8 rounded-[12px] bg-[#ffcc00] p-5">
            <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#1a1a1a]">
              Inhaltsverzeichnis
            </h2>
            <ol className="list-inside list-decimal space-y-1 text-[15px] text-[#424242]">
              <li>Geltungsbereich</li>
              <li>Vertragsschluss</li>
              <li>Widerrufsrecht</li>
              <li>Preise und Zahlungsbedingungen</li>
              <li>Liefer- und Versandbedingungen</li>
              <li>Einräumung von Nutzungsrechten für digitale Inhalte</li>
              <li>Eigentumsvorbehalt</li>
              <li>Mängelhaftung (Gewährleistung)</li>
              <li>Haftung</li>
              <li>Anwendbares Recht</li>
              <li>Verhaltenskodex</li>
              <li>Alternative Streitbeilegung</li>
            </ol>
          </nav>

          {/* 1 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            1) Geltungsbereich
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die
            über den Online-Shop zwischen dem Anbieter (Claudia Kumpfe &mdash;
            Theaterverlag-online) und dem Kunden geschlossen werden. Verbraucher im
            Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu
            Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer
            selbständigen beruflichen Tätigkeit zugerechnet werden können.
          </p>

          {/* 2 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            2) Vertragsschluss
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Die Produktdarstellungen im Online-Shop stellen keine verbindlichen
            Angebote dar, sondern dienen zur Abgabe eines verbindlichen Angebots
            durch den Kunden. Durch Absenden der Bestellung gibt der Kunde ein
            verbindliches Kaufangebot ab. Die Annahme erfolgt durch eine
            Auftragsbestätigung per E-Mail innerhalb von fünf Tagen.
          </p>

          {/* 3 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            3) Widerrufsrecht
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Näheres entnehmen
            Sie bitte unserer{" "}
            <Link href="/widerrufsrecht" className="text-[#cc3333] underline hover:text-[#aa0000]">
              Widerrufsbelehrung
            </Link>
            .
          </p>

          {/* 4 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            4) Preise und Zahlungsbedingungen
          </h2>
          <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
            Die angegebenen Preise sind Endpreise. Aufgrund der Kleinunternehmerregelung
            nach §&thinsp;19 UStG wird keine Umsatzsteuer erhoben.
          </p>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Zahlungsmöglichkeiten: Vorkasse (Banküberweisung), PayPal, Kreditkarte
            oder Kauf auf Rechnung (für Schulen und öffentliche Einrichtungen,
            Zahlungsziel 7 Tage).
          </p>

          {/* 5 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            5) Liefer- und Versandbedingungen
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Digitale Inhalte werden als PDF-Download und per E-Mail bereitgestellt.
            Die Lieferung erfolgt innerhalb des angegebenen Liefergebiets nach
            Zahlungseingang.
          </p>

          {/* 6 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            6) Einräumung von Nutzungsrechten für digitale Inhalte
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Der Kunde erhält ein einfaches, zeitlich unbegrenztes Nutzungsrecht
            für den privaten und den durch das Aufführungsrecht definierten
            gewerblichen Gebrauch. Die Weitergabe an Dritte ist ohne vorherige
            Zustimmung nicht gestattet. Die Nutzungsrechte werden erst mit
            vollständiger Bezahlung wirksam.
          </p>

          {/* 7 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            7) Eigentumsvorbehalt
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Bis zur vollständigen Bezahlung bleibt die Ware Eigentum des Anbieters.
          </p>

          {/* 8 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            8) Mängelhaftung (Gewährleistung)
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Es gilt die gesetzliche Mängelhaftung. Gegenüber Unternehmern beträgt
            die Gewährleistungsfrist ein Jahr ab Ablieferung.
          </p>

          {/* 9 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            9) Haftung
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit
            sowie bei Verletzung von Leben, Körper und Gesundheit. Bei leichter
            Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher
            Vertragspflichten, begrenzt auf den vorhersehbaren, vertragstypischen Schaden.
          </p>

          {/* 10 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            10) Anwendbares Recht
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
            UN-Kaufrechts. Bei Verbrauchern gilt dies nur insoweit, als der gewährte
            Schutz nicht durch zwingende Bestimmungen des Rechts des Aufenthaltsstaates
            eingeschränkt wird.
          </p>

          {/* 11 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            11) Verhaltenskodex
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Wir haben uns der Initiative &bdquo;Fairness im Handel&ldquo; angeschlossen.
          </p>

          {/* 12 */}
          <h2 className="mb-3 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#cc3333] md:text-[26px] md:leading-[30px]">
            12) Alternative Streitbeilegung
          </h2>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
            (OS) bereit. Wir sind nicht verpflichtet und nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </main>
  );
}
