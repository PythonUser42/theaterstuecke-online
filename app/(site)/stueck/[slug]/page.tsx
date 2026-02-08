import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPlays, getPlayBySlug } from "@/lib/data";
import AddToCart from "../../components/AddToCart";
import Accordion from "../../components/Accordion";

export async function generateStaticParams() {
  return getAllPlays().map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const play = getPlayBySlug(slug);
  if (!play) notFound();

  return (
    <main data-section-id="product-detail" className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Breadcrumb */}
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/suche" className="hover:text-[#cc3333]">Stück-Suche</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1a1a1a]">{play.title}</span>
        </nav>

        <div className="rounded-[20px] bg-[#fdeaa1] p-5 md:p-8">
          {/* Title + Price */}
          <div data-section-id="product-hero" className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
            <h1 className="font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
              {play.title}
            </h1>
            <div className="w-full rounded-[12px] bg-[#ffcc00] px-6 py-3 text-center md:w-auto md:shrink-0">
              <span className="block font-['Amatic_SC'] text-[18px] font-bold text-[#424242]">ab</span>
              <span className="font-['Amatic_SC'] text-[36px] font-bold leading-[36px] text-[#cc3333]">
                {play.price},00 €
              </span>
            </div>
          </div>

          {/* Details grid */}
          <div data-section-id="product-details" className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-[12px] bg-[#ffcc00] p-4 text-center">
              <span className="block text-[13px] text-[#424242]">Spieler</span>
              <span className="font-['Amatic_SC'] text-[28px] font-bold text-[#1a1a1a]">
                {play.minPlayers}–{play.maxPlayers}
              </span>
            </div>
            <div className="rounded-[12px] bg-[#ffcc00] p-4 text-center">
              <span className="block text-[13px] text-[#424242]">Dauer</span>
              <span className="font-['Amatic_SC'] text-[28px] font-bold text-[#1a1a1a]">
                {play.durationMinutes} min
              </span>
            </div>
            <div className="rounded-[12px] bg-[#ffcc00] p-4 text-center">
              <span className="block text-[13px] text-[#424242]">Preis</span>
              <span className="font-['Amatic_SC'] text-[28px] font-bold text-[#1a1a1a]">
                ab {play.price} €
              </span>
            </div>
            <div className="rounded-[12px] bg-[#ffcc00] p-4 text-center">
              <span className="block text-[13px] text-[#424242]">Hinweise</span>
              <span className="font-['Amatic_SC'] text-[24px] font-bold text-[#1a1a1a]">
                {[
                  play.hasLieder && "♪ Lieder",
                  play.hasTP && "TP",
                  play.isVariableLength && "Variabel",
                  play.isChristmas && "Weihnachten",
                ].filter(Boolean).join(", ") || "–"}
              </span>
            </div>
          </div>

          {/* Age groups + themes */}
          <div className="mb-6 flex flex-wrap gap-2">
            {play.ageGroups.map((ag) => (
              <Link
                key={ag}
                href={`/kategorie/${ag.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-full bg-[#cc3333] px-3 py-1 text-[13px] font-bold text-white hover:bg-[#aa0000]"
              >
                {ag}
              </Link>
            ))}
            {play.themes.map((t) => (
              <span
                key={t}
                className="rounded-full bg-[#ffcc00] px-3 py-1 text-[13px] font-bold text-[#424242]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Excerpt */}
          <div className="mb-6">
            <h2 className="mb-3 font-['Amatic_SC'] text-[28px] font-bold leading-[32px] text-[#cc3333]">
              Beschreibung
            </h2>
            <p className="whitespace-pre-line text-[15px] leading-[1.65em] text-[#424242]">
              {play.excerpt}
            </p>
          </div>

          {/* Leseprobe link */}
          {play.leseprobeUrl && (
            <div className="mb-6">
              <a
                href={play.leseprobeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-[8px] bg-[#cc3333] px-8 py-3 font-['Amatic_SC'] text-[24px] font-bold text-white transition-colors hover:bg-[#aa0000]"
              >
                → zur Leseprobe
              </a>
            </div>
          )}

          {/* Add to cart */}
          <AddToCart play={play} />

          {/* Info accordions */}
          <div className="mt-6 space-y-3">
            <Accordion title="Was ist im Preis enthalten?">
              <ul className="list-disc space-y-2 pl-5">
                <li><strong>Schulen:</strong> Im Kaufpreis sind bereits 2 Aufführungen enthalten.</li>
                <li><strong>Amateurgruppen:</strong> Der Kaufpreis ist gleichzeitig die Mindest-Tantiemengebühr.</li>
                <li>Sie erhalten das komplette Stück als PDF-Datei zum Download.</li>
                {play.hasLieder && (
                  <li>Bei der Variante &quot;mit Liedern&quot; erhalten Sie zusätzlich die Noten und Texte aller Lieder.</li>
                )}
              </ul>
            </Accordion>

            <Accordion title="Bezahlung & Lieferung">
              <ul className="list-disc space-y-2 pl-5">
                <li><strong>Kreditkarte / PayPal:</strong> Sofortige Lieferung per E-Mail nach Zahlungseingang.</li>
                <li><strong>Vorkasse:</strong> Lieferung nach Zahlungseingang auf unserem Konto.</li>
                <li><strong>Kauf auf Rechnung:</strong> Nur für Schulen und öffentliche Einrichtungen — Lieferung innerhalb eines Werktages.</li>
                <li>Alle Stücke werden als PDF-Datei per E-Mail zugestellt.</li>
              </ul>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}
