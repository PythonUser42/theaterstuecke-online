import Link from "next/link";

export default function AuffuehrungsrechtPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Aufführungsrecht</span>
        </nav>

        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Aufführungsrecht
          </h1>

          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Alle Theaterstücke und Sketche auf dieser Website sind urheberrechtlich geschützt.
            Die Aufführung, auch in Auszügen, bedarf der Genehmigung der Autorin.
          </p>

          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            1. Vereinfachtes Aufführungsrecht für Schulen und Kindergärten
          </h2>
          <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
            Sie erwerben mit dem Onlinekauf des Stückes das Aufführungsrecht für
            die Premiere plus einer weiteren Aufführung &mdash; ohne zusätzliche
            Anmeldung und ohne zusätzliche Aufführungsgebühren.
          </p>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Ab der 3. Aufführung ist eine Anmeldung und Abrechnung erforderlich.
            Die Aufführungsgebühr beträgt 10 % der Bruttoeinnahmen je Aufführung,
            mindestens den Kaufpreis des Stückes im Shop. Die Lizenz ist auf 12 Monate begrenzt.
          </p>

          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            2. Aufführungsrecht für Amateurgruppen beim Online-Kauf
          </h2>
          <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
            Der Kaufpreis des Stückes im Shop entspricht der Mindestaufführungsgebühr
            und wird mit den Tantiemen verrechnet. Die Tantiemen betragen 10 % der
            Bruttoeinnahmen je Aufführung.
          </p>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Jede Aufführung muss 4 Wochen vor der Premiere angemeldet und 4 Wochen
            nach der letzten Aufführung abgerechnet werden.
          </p>

          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            3. Vervielfältigungen der Texte und der Musik
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Die Vervielfältigung der Texte ist nur für die Mitglieder des eigenen
            Ensembles gestattet. Die Weitergabe an Dritte ist nicht erlaubt.
          </p>

          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            4. Namensnennungsrecht
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Der Name der Autorin muss auf allen Veröffentlichungen, Programmen,
            Plakaten und Anzeigen genannt werden.
          </p>

          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            5. Für professionelle Bühnen
          </h2>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Für professionelle Bühnen gelten gesonderte Aufführungsrechte.
            Bitte nehmen Sie{" "}
            <Link href="/kontakt" className="text-[#cc3333] underline hover:text-[#aa0000]">
              Kontakt
            </Link>{" "}
            mit uns auf.
          </p>
        </div>
      </div>
    </main>
  );
}
