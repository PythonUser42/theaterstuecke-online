"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getAllPlays, type Play } from "@/lib/data";

type SortKey = "title" | "minPlayers" | "maxPlayers" | "durationMinutes" | "notes";
type SortDir = "asc" | "desc";

function getNotesString(play: Play): string {
  const parts: string[] = [];
  if (play.hasLieder) parts.push("L");
  if (play.hasTP) parts.push("TP");
  if (play.isVariableLength) parts.push("V");
  if (play.isChristmas) parts.push("W");
  return parts.join(", ");
}

export default function KindergartenPage() {
  const kitaPlays = useMemo(
    () => getAllPlays().filter((p) => p.ageGroups.includes("Kita")),
    []
  );
  const [sortKey, setSortKey] = useState<SortKey>("title");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const sorted = useMemo(() => {
    return [...kitaPlays].sort((a, b) => {
      let av: string | number;
      let bv: string | number;
      if (sortKey === "title") { av = a.title; bv = b.title; }
      else if (sortKey === "notes") { av = getNotesString(a); bv = getNotesString(b); }
      else { av = a[sortKey]; bv = b[sortKey]; }
      if (typeof av === "string" && typeof bv === "string") {
        return sortDir === "asc" ? av.localeCompare(bv, "de") : bv.localeCompare(av, "de");
      }
      return sortDir === "asc" ? (av as number) - (bv as number) : (bv as number) - (av as number);
    });
  }, [kitaPlays, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  }

  const arrow = (key: SortKey) =>
    sortKey === key ? (sortDir === "asc" ? " ▲" : " ▼") : "";

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#1a1a1a]">Kleine Theaterstücke für den Kindergarten</span>
        </nav>

        <div className="mb-8 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h1 className="mb-4 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            Großer Auftritt für kleine Füße
          </h1>
          <h2 className="mb-4 font-['Amatic_SC'] text-[22px] font-bold leading-[26px] text-[#424242] md:text-[26px] md:leading-[30px]">
            Kurze Theaterstücke für die Kita
          </h2>
          <p className="mb-2 text-[15px] leading-[1.65em] text-[#424242]">
            Abkürzungen: <strong>TP</strong> = Theaterpädagogisches Material,{" "}
            <strong>L</strong> = mit Liedern, <strong>V</strong> = variable Spieldauer,{" "}
            <strong>W</strong> = Weihnachtsstücke.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-[#e6b800] bg-white">
          <table className="w-full text-left text-[15px]">
            <thead>
              <tr className="border-b border-[#e6b800] bg-[#fdeaa1] text-[#000000]">
                <th className="cursor-pointer px-4 py-3 font-bold" onClick={() => toggleSort("title")}>
                  Titel{arrow("title")}
                </th>
                <th className="hidden cursor-pointer px-4 py-3 text-center font-bold md:table-cell" onClick={() => toggleSort("minPlayers")}>
                  Spieler min.{arrow("minPlayers")}
                </th>
                <th className="hidden cursor-pointer px-4 py-3 text-center font-bold md:table-cell" onClick={() => toggleSort("maxPlayers")}>
                  Spieler max.{arrow("maxPlayers")}
                </th>
                <th className="hidden cursor-pointer px-4 py-3 text-center font-bold md:table-cell" onClick={() => toggleSort("durationMinutes")}>
                  Dauer (min){arrow("durationMinutes")}
                </th>
                <th className="cursor-pointer px-4 py-3 text-center font-bold" onClick={() => toggleSort("notes")}>
                  Hinweise{arrow("notes")}
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((play, i) => (
                <tr
                  key={play.slug}
                  className={`border-b border-neutral-100 ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"} hover:bg-[#fdeaa1]`}
                >
                  <td className="px-4 py-2">
                    <Link href={`/stueck/${play.slug}`} className="text-[#cc3333] hover:underline">
                      {play.title}
                    </Link>
                  </td>
                  <td className="hidden px-4 py-2 text-center md:table-cell">{play.minPlayers}</td>
                  <td className="hidden px-4 py-2 text-center md:table-cell">{play.maxPlayers}</td>
                  <td className="hidden px-4 py-2 text-center md:table-cell">{play.durationMinutes}</td>
                  <td className="px-4 py-2 text-center">{getNotesString(play)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-[13px] text-[#424242]">
          {kitaPlays.length} Stücke gefunden
        </p>

        <div className="mt-10 rounded-[20px] bg-[#fdeaa1] px-5 py-6 md:px-10 md:py-10">
          <h2 className="mb-4 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[32px]">
            Theaterspielen im Kindergarten
          </h2>
          <p className="mb-4 text-[15px] leading-[1.65em] text-[#424242]">
            Theater für die Kleinsten &mdash; das bedeutet große Augen, stolze
            Gesichter und jede Menge Spaß auf der Bühne. Unsere Stücke für die
            Kita sind speziell für Kinder ab 3 Jahren entwickelt und berücksichtigen
            die besonderen Bedürfnisse dieser Altersgruppe.
          </p>
          <p className="text-[15px] leading-[1.65em] text-[#424242]">
            Viele Stücke enthalten eine Erzählerrolle, die den Kindern Sicherheit
            gibt und die Handlung zusammenhält. Lieder, einfache Choreografien
            und bunte Kostüme machen den Auftritt zu einem unvergesslichen Erlebnis.
          </p>
        </div>
      </div>
    </main>
  );
}
