"use client";

import Link from "next/link";

export default function EinnahmenMeldenPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Einnahmen melden</span>
        </nav>

        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Ihre Meldung der Einnahmen
          </h1>

          <p className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
            Bitte melden Sie Ihre Einnahmen innerhalb von 4 Wochen nach der letzten Aufführung.
          </p>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* Wer hat gespielt? */}
            <fieldset>
              <legend className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
                Wer hat gespielt?
              </legend>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-[15px] font-bold text-[#424242]">Theater / Schule / Kindergarten *</label>
                  <input type="text" required className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[15px] font-bold text-[#424242]">Straße &amp; Hausnummer *</label>
                    <input type="text" required className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-[15px] font-bold text-[#424242]">PLZ *</label>
                      <input type="text" required className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
                    </div>
                    <div>
                      <label className="mb-1 block text-[15px] font-bold text-[#424242]">Stadt *</label>
                      <input type="text" required className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-[15px] font-bold text-[#424242]">Land *</label>
                  <input type="text" required className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333] sm:w-1/2" />
                </div>
              </div>
            </fieldset>

            {/* Kontaktperson */}
            <fieldset>
              <legend className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
                Kontaktperson
              </legend>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-[15px] font-bold text-[#424242]">Anrede *</label>
                  <select required className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333] sm:w-auto">
                    <option value="">Bitte wählen</option>
                    <option value="Frau">Frau</option>
                    <option value="Herr">Herr</option>
                    <option value="Divers">Divers</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[15px] font-bold text-[#424242]">Vorname *</label>
                    <input type="text" required className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
                  </div>
                  <div>
                    <label className="mb-1 block text-[15px] font-bold text-[#424242]">Nachname *</label>
                    <input type="text" required className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[15px] font-bold text-[#424242]">E-Mail-Adresse *</label>
                    <input type="email" required className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
                  </div>
                  <div>
                    <label className="mb-1 block text-[15px] font-bold text-[#424242]">Telefon</label>
                    <input type="tel" className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Was wurde gespielt? */}
            <fieldset>
              <legend className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
                Was wurde gespielt?
              </legend>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-[15px] font-bold text-[#424242]">Titel des Theaterstücks *</label>
                  <input type="text" required className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
                </div>
                <div>
                  <label className="mb-1 block text-[15px] font-bold text-[#424242]">Bestellnummer *</label>
                  <input type="text" required className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
                </div>
              </div>
            </fieldset>

            {/* Einnahmen */}
            <fieldset>
              <legend className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
                Einnahmen
              </legend>
              <p className="mb-4 text-[14px] text-[#424242]">
                Bitte geben Sie je Aufführung das Datum und die Einnahme an.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-[15px] font-bold text-[#424242]">Datum und Einnahme je Aufführung *</label>
                  <textarea rows={4} required placeholder={"15.03.2026 — 450,00 €\n16.03.2026 — 380,00 €"} className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[15px] font-bold text-[#424242]">Anzahl der Aufführungen *</label>
                    <input type="number" required min={1} className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
                  </div>
                  <div>
                    <label className="mb-1 block text-[15px] font-bold text-[#424242]">Einnahmen gesamt (EUR) *</label>
                    <input type="text" required placeholder="z.B. 830,00" className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Mitteilungen */}
            <div>
              <label className="mb-1 block text-[15px] font-bold text-[#424242]">Weitere Mitteilungen</label>
              <textarea rows={4} className="w-full rounded-[8px] border border-[#e6b800] bg-white px-4 py-3 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]" />
            </div>

            {/* Einwilligung */}
            <label className="flex items-start gap-3 text-[14px] text-[#424242]">
              <input type="checkbox" required className="mt-1 accent-[#cc3333]" />
              <span>
                Ich habe die{" "}
                <Link href="/datenschutz" className="text-[#cc3333] underline hover:text-[#aa0000]">
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und stimme der Verarbeitung meiner Daten zu. *
              </span>
            </label>

            <button
              type="submit"
              className="rounded-[8px] bg-[#cc3333] px-8 py-3 font-['Amatic_SC'] text-[24px] font-bold text-white transition-colors hover:bg-[#aa0000]"
            >
              Einnahmen melden
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
