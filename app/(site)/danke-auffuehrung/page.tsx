import Link from "next/link";

export default function DankeAuffuehrungPage() {
  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-[20px] bg-[#fdeaa1] px-5 py-10 text-center md:px-10 md:py-16">
          <h1 className="mb-6 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Vielen Dank für Ihre Aufführungsanmeldung.
          </h1>
          <p className="mb-8 text-[15px] leading-[1.65em] text-[#424242]">
            Eine Kopie Ihrer Anmeldung wurde an Ihre E-Mail-Adresse gesendet.
          </p>
          <Link
            href="/"
            className="inline-block rounded-[8px] bg-[#cc3333] px-8 py-3 font-['Amatic_SC'] text-[24px] font-bold text-white transition-colors hover:bg-[#aa0000]"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
