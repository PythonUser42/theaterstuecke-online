"use client";

import type { CategoriesData } from "@/lib/data";

export interface FilterState {
  query: string;
  ageGroups: string[];
  themes: string[];
  minPlayers: number | null;
  maxPlayers: number | null;
  minDuration: number | null;
  maxDuration: number | null;
  hasLieder: boolean;
  hasTP: boolean;
  isChristmas: boolean;
  sort: string;
}

interface SearchFiltersProps {
  filters: FilterState;
  categories: CategoriesData;
  resultCount: number;
  onFiltersChange: (filters: FilterState) => void;
}

export default function SearchFilters({
  filters,
  categories,
  resultCount,
  onFiltersChange,
}: SearchFiltersProps) {
  function update(partial: Partial<FilterState>) {
    onFiltersChange({ ...filters, ...partial });
  }

  function toggleArrayItem(arr: string[], item: string): string[] {
    return arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];
  }

  // Get unique theme names (deduplicated across age groups)
  const uniqueThemes = [...new Set(categories.themes.map((t) => t.name))].sort();

  return (
    <aside className="w-full md:w-[280px] md:shrink-0">
      <div className="space-y-5 md:sticky md:top-4">
        {/* Search input */}
        <div>
          <label className="mb-1 block font-['Amatic_SC'] text-[22px] font-bold text-[#cc3333]">
            Suche
          </label>
          <input
            type="text"
            value={filters.query}
            onChange={(e) => update({ query: e.target.value })}
            placeholder="Titel, Beschreibung..."
            className="w-full rounded-[8px] border border-[#e6b800] bg-white px-3 py-2 text-[15px] text-[#424242] outline-none focus:border-[#cc3333]"
          />
        </div>

        {/* Result count */}
        <p className="text-[15px] font-bold text-[#424242]">
          {resultCount} {resultCount === 1 ? "Stück" : "Stücke"} gefunden
        </p>

        {/* Sort */}
        <div>
          <label className="mb-1 block font-['Amatic_SC'] text-[22px] font-bold text-[#cc3333]">
            Sortierung
          </label>
          <select
            value={filters.sort}
            onChange={(e) => update({ sort: e.target.value })}
            className="w-full rounded-[8px] border border-[#e6b800] bg-white px-3 py-2 text-[15px] text-[#424242]"
          >
            <option value="relevanz">Relevanz</option>
            <option value="titel-az">Titel A-Z</option>
            <option value="titel-za">Titel Z-A</option>
            <option value="preis-auf">Preis aufsteigend</option>
            <option value="preis-ab">Preis absteigend</option>
            <option value="spieler">Spieleranzahl</option>
            <option value="dauer">Dauer</option>
          </select>
        </div>

        {/* Age groups */}
        <div>
          <label className="mb-2 block font-['Amatic_SC'] text-[22px] font-bold text-[#cc3333]">
            Altersgruppen
          </label>
          <div className="space-y-1">
            {categories.ageGroups.map((ag) => (
              <label key={ag.slug} className="flex items-center gap-2 text-[14px] text-[#424242]">
                <input
                  type="checkbox"
                  checked={filters.ageGroups.includes(ag.name)}
                  onChange={() => update({ ageGroups: toggleArrayItem(filters.ageGroups, ag.name) })}
                  className="accent-[#cc3333]"
                />
                {ag.name}
              </label>
            ))}
          </div>
        </div>

        {/* Themes */}
        <div>
          <label className="mb-2 block font-['Amatic_SC'] text-[22px] font-bold text-[#cc3333]">
            Themen
          </label>
          <div className="max-h-[200px] space-y-1 overflow-y-auto">
            {uniqueThemes.map((theme) => (
              <label key={theme} className="flex items-center gap-2 text-[14px] text-[#424242]">
                <input
                  type="checkbox"
                  checked={filters.themes.includes(theme)}
                  onChange={() => update({ themes: toggleArrayItem(filters.themes, theme) })}
                  className="accent-[#cc3333]"
                />
                {theme}
              </label>
            ))}
          </div>
        </div>

        {/* Player count range */}
        <div>
          <label className="mb-1 block font-['Amatic_SC'] text-[22px] font-bold text-[#cc3333]">
            Spieleranzahl
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={99}
              value={filters.minPlayers ?? ""}
              onChange={(e) => update({ minPlayers: e.target.value ? parseInt(e.target.value) : null })}
              placeholder="min"
              className="w-[70px] rounded-[8px] border border-[#e6b800] bg-white px-2 py-1.5 text-[14px] text-[#424242]"
            />
            <span className="text-[#424242]">–</span>
            <input
              type="number"
              min={1}
              max={99}
              value={filters.maxPlayers ?? ""}
              onChange={(e) => update({ maxPlayers: e.target.value ? parseInt(e.target.value) : null })}
              placeholder="max"
              className="w-[70px] rounded-[8px] border border-[#e6b800] bg-white px-2 py-1.5 text-[14px] text-[#424242]"
            />
          </div>
        </div>

        {/* Duration range */}
        <div>
          <label className="mb-1 block font-['Amatic_SC'] text-[22px] font-bold text-[#cc3333]">
            Dauer (Minuten)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              max={999}
              value={filters.minDuration ?? ""}
              onChange={(e) => update({ minDuration: e.target.value ? parseInt(e.target.value) : null })}
              placeholder="min"
              className="w-[70px] rounded-[8px] border border-[#e6b800] bg-white px-2 py-1.5 text-[14px] text-[#424242]"
            />
            <span className="text-[#424242]">–</span>
            <input
              type="number"
              min={0}
              max={999}
              value={filters.maxDuration ?? ""}
              onChange={(e) => update({ maxDuration: e.target.value ? parseInt(e.target.value) : null })}
              placeholder="max"
              className="w-[70px] rounded-[8px] border border-[#e6b800] bg-white px-2 py-1.5 text-[14px] text-[#424242]"
            />
          </div>
        </div>

        {/* Toggle filters */}
        <div>
          <label className="mb-2 block font-['Amatic_SC'] text-[22px] font-bold text-[#cc3333]">
            Extras
          </label>
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-[14px] text-[#424242]">
              <input
                type="checkbox"
                checked={filters.hasLieder}
                onChange={() => update({ hasLieder: !filters.hasLieder })}
                className="accent-[#cc3333]"
              />
              Mit Liedern
            </label>
            <label className="flex items-center gap-2 text-[14px] text-[#424242]">
              <input
                type="checkbox"
                checked={filters.hasTP}
                onChange={() => update({ hasTP: !filters.hasTP })}
                className="accent-[#cc3333]"
              />
              Theaterpädagogisches Material
            </label>
            <label className="flex items-center gap-2 text-[14px] text-[#424242]">
              <input
                type="checkbox"
                checked={filters.isChristmas}
                onChange={() => update({ isChristmas: !filters.isChristmas })}
                className="accent-[#cc3333]"
              />
              Weihnachtsstücke
            </label>
          </div>
        </div>

        {/* Reset */}
        <button
          onClick={() =>
            onFiltersChange({
              query: "",
              ageGroups: [],
              themes: [],
              minPlayers: null,
              maxPlayers: null,
              minDuration: null,
              maxDuration: null,
              hasLieder: false,
              hasTP: false,
              isChristmas: false,
              sort: "relevanz",
            })
          }
          className="w-full rounded-[8px] border border-[#cc3333] px-4 py-2 text-[14px] font-bold text-[#cc3333] transition-colors hover:bg-[#cc3333] hover:text-white"
        >
          Filter zurücksetzen
        </button>
      </div>
    </aside>
  );
}
