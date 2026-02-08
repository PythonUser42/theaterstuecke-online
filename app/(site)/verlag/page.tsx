export default function VerlagPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <section data-section-id="verlag-intro">
          <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#000000] md:text-[40px] md:leading-[44px]">
            Ein kleiner deutscher Theaterverlag
          </h1>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Das Angebot umfasst eine sorgfältig kuratierte Auswahl an Theaterstücken,
            Komödien und Sketch-Programmen für Theatergruppen.
          </p>

          <h2 className="mb-4 font-['Amatic_SC'] text-[28px] font-bold leading-[32px] text-[#cc3333]">
            Was Sie hier NICHT finden
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
            Slapstick-Possen und klassische Dramen sind hier nicht zu finden.
          </p>

          <h2 className="mb-4 font-['Amatic_SC'] text-[28px] font-bold leading-[32px] text-[#cc3333]">
            Was Sie hier finden
          </h2>
          <p className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
            Diese Seite ist für Fans von Komödien, Sketchen mit Anspruch
            oder Tragikomödien.
          </p>
        </section>

        {/* Two-column CTA */}
        <section data-section-id="verlag-cta" className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <a
            href="#"
            className="block rounded-[12px] bg-[#fdeaa1] px-8 py-10 text-center transition-colors hover:bg-[#fcea62]"
          >
            <h2 className="mb-2 font-['Amatic_SC'] text-[32px] font-bold leading-[36px] text-[#cc3333]">
              Stücke für Abendprogramme
            </h2>
            <p className="font-['Amatic_SC'] text-[22px] leading-[26px] text-[#424242]">
              Komödien &amp; Sketche
            </p>
          </a>
          <a
            href="#"
            className="block rounded-[12px] bg-[#fdeaa1] px-8 py-10 text-center transition-colors hover:bg-[#fcea62]"
          >
            <h2 className="mb-2 font-['Amatic_SC'] text-[32px] font-bold leading-[36px] text-[#cc3333]">
              Stücke für Familienprogramme
            </h2>
            <p className="font-['Amatic_SC'] text-[22px] leading-[26px] text-[#424242]">
              Von Aschenputtel bis Zirkustheater
            </p>
          </a>
        </section>

        {/* Banner image */}
        <section data-section-id="verlag-banner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://theaterstuecke-online.de/wp-content/uploads/2021/02/theaterverlag-online-theaterszenen-1000web-1-1024x341.jpg"
            alt="Theaterszenen — Bühnenbilder Collage"
            className="w-full rounded-lg"
          />
        </section>
      </div>
    </main>
  );
}
