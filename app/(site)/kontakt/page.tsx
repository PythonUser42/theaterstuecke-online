"use client";

import Link from "next/link";

export default function KontaktPage() {
  return (
    <main data-section-id="kontakt-form" className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Breadcrumb */}
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1a1a1a]">Kontakt</span>
        </nav>

        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Ihre Mitteilung
          </h1>

          <p className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
            Haben Sie Fragen, Anregungen oder Wünsche? Schreiben Sie uns gerne
            eine Nachricht. Wir antworten so schnell wie möglich.
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="mb-1 block text-[15px] font-bold text-[#424242]">
                Name
              </label>
              <input
                type="text"
                placeholder="Ihr Name"
                className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]"
              />
            </div>

            <div>
              <label className="mb-1 block text-[15px] font-bold text-[#424242]">
                E-Mail
              </label>
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]"
              />
            </div>

            <div>
              <label className="mb-1 block text-[15px] font-bold text-[#424242]">
                Betreff
              </label>
              <input
                type="text"
                placeholder="Betreff Ihrer Nachricht"
                className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]"
              />
            </div>

            <div>
              <label className="mb-1 block text-[15px] font-bold text-[#424242]">
                Nachricht
              </label>
              <textarea
                rows={6}
                placeholder="Ihre Nachricht..."
                className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]"
              />
            </div>

            <button
              type="submit"
              className="rounded-[8px] bg-[#cc3333] px-8 py-3 font-['Amatic_SC'] text-[24px] font-bold text-white transition-colors hover:bg-[#aa0000]"
            >
              Nachricht senden
            </button>
          </form>

          <div className="mt-10 border-t border-[#e6b800] pt-8">
            <h2 className="mb-4 font-['Amatic_SC'] text-[28px] font-bold leading-[32px] text-[#cc3333]">
              Kontaktdaten
            </h2>
            <p className="text-[15px] leading-[1.65em] text-[#424242]">
              Tel. +49 (0)202 – 253 180 07
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
