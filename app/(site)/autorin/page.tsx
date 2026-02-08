export default function AutorinPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <h1
          data-section-id="autorin-title"
          className="mb-8 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#000000] md:text-[40px] md:leading-[44px]"
        >
          Autorin Claudia Kumpfe
        </h1>

        <section data-section-id="autorin-content" className="flex flex-col gap-6 md:flex-row md:gap-10">
          {/* Text column — 66% */}
          <div className="flex-[2] text-[15px] leading-[1.65em] text-[#424242]">
            <h2 className="mb-4 font-['Amatic_SC'] text-[28px] font-bold leading-[32px] text-[#cc3333]">
              Das Theater und ich — Geschichte einer Leidenschaft
            </h2>
            <p className="mb-6">
              Nach einem Studium der Germanistik und Philosophie hat die Autorin den
              &bdquo;Theatervirus&ldquo; entdeckt. Fünf Jahre nach ihrem Abschluss stand sie
              selbst auf der Bühne, zehn Jahre später absolvierte sie eine
              theaterpädagogische Ausbildung.
            </p>

            <h2 className="mb-4 font-['Amatic_SC'] text-[28px] font-bold leading-[32px] text-[#cc3333]">
              Theaterspiel — für eine schöpferische Entfaltung der Persönlichkeit
            </h2>
            <p className="mb-6">
              30 Jahre Bühnenerfahrung, 25 Jahre Arbeit mit Kindern und Jugendlichen
              an Schulen und Projekten, Workshops für Lehrer und Erzieher — die Autorin
              bringt pro Jahr etwa 6 Stücke am Kinder- und Jugendtheater in Wuppertal
              auf die Bühne, die meisten davon selbst geschrieben.
            </p>

            <p className="mb-6">
              Neben der Arbeit mit Kindern und Jugendlichen schreibt die Autorin auch
              Komödien für Erwachsene, die unter &bdquo;Abendprogramme&ldquo; zu finden sind.
            </p>

            <p>Viel Spaß beim Stöbern!</p>
          </div>

          {/* Image column — 33% */}
          <div className="flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://theaterstuecke-online.de/wp-content/uploads/2021/02/autorin-web.png"
              alt="Claudia Kumpfe — Autorin"
              className="w-full rounded-lg"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
