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

export default function KatalogPage() {
  const plays = useMemo(() => getAllPlays(), []);
  const [sortKey, setSortKey] = useState<SortKey>("title");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const sorted = useMemo(() => {
    return [...plays].sort((a, b) => {
      let av: string | number;
      let bv: string | number;

      if (sortKey === "title") {
        av = a.title;
        bv = b.title;
      } else if (sortKey === "notes") {
        av = getNotesString(a);
        bv = getNotesString(b);
      } else {
        av = a[sortKey];
        bv = b[sortKey];
      }

      if (typeof av === "string" && typeof bv === "string") {
        return sortDir === "asc" ? av.localeCompare(bv, "de") : bv.localeCompare(av, "de");
      }
      return sortDir === "asc" ? (av as number) - (bv as number) : (bv as number) - (av as number);
    });
  }, [plays, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const arrow = (key: SortKey) =>
    sortKey === key ? (sortDir === "asc" ? " ▲" : " ▼") : "";

  return (
    <main data-section-id="katalog" className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mb-4 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#000000] md:text-[40px] md:leading-[44px]">
          Theaterstücke zum Nachspielen von A-Z
        </h1>

        <h2 className="mb-4 font-['Amatic_SC'] text-[28px] font-bold leading-[32px] text-[#cc3333]">
          Hilfe! Wie finde ich ein passendes Stück?
        </h2>

        <p className="mb-6 text-[15px] leading-[1.65em] text-[#424242]">
          Sie können die Spalten sortieren, indem Sie auf die Pfeile klicken.
          Abkürzungen: <strong>TP</strong> = Theaterpädagogisches Material,{" "}
          <strong>L</strong> = mit Liedern, <strong>V</strong> = variable Spieldauer,{" "}
          <strong>W</strong> = Weihnachtsstücke. Oder nutzen Sie unsere{" "}
          <Link href="/suche" className="text-[#cc3333] underline hover:text-[#aa0000]">
            erweiterte Stück-Suche
          </Link>
          .
        </p>

        <div className="overflow-x-auto rounded-lg border border-[#e6b800] bg-white">
          <table className="w-full text-left text-[15px]">
            <thead>
              <tr className="border-b border-[#e6b800] bg-[#fdeaa1] text-[#000000]">
                <th
                  className="cursor-pointer px-4 py-3 font-bold"
                  onClick={() => toggleSort("title")}
                >
                  Titel{arrow("title")}
                </th>
                <th
                  className="hidden cursor-pointer px-4 py-3 text-center font-bold md:table-cell"
                  onClick={() => toggleSort("minPlayers")}
                >
                  Spieler min.{arrow("minPlayers")}
                </th>
                <th
                  className="hidden cursor-pointer px-4 py-3 text-center font-bold md:table-cell"
                  onClick={() => toggleSort("maxPlayers")}
                >
                  Spieler max.{arrow("maxPlayers")}
                </th>
                <th
                  className="hidden cursor-pointer px-4 py-3 text-center font-bold md:table-cell"
                  onClick={() => toggleSort("durationMinutes")}
                >
                  Dauer (min){arrow("durationMinutes")}
                </th>
                <th
                  className="cursor-pointer px-4 py-3 text-center font-bold"
                  onClick={() => toggleSort("notes")}
                >
                  Hinweise{arrow("notes")}
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((play, i) => (
                <tr
                  key={play.slug}
                  className={`border-b border-neutral-100 ${
                    i % 2 === 0 ? "bg-white" : "bg-neutral-50"
                  } hover:bg-[#fdeaa1]`}
                >
                  <td className="px-4 py-2">
                    <Link
                      href={`/stueck/${play.slug}`}
                      className="text-[#cc3333] hover:underline"
                    >
                      {play.title}
                    </Link>
                    <span className="ml-2 text-[12px] text-[#aa0000]">→ zur Leseprobe</span>
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
          {plays.length} Stücke gefunden
        </p>
      </div>
    </main>
  );
}
