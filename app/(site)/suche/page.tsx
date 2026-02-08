"use client";

import { Suspense, useState, useMemo, useCallback, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getAllPlays, getAllCategories } from "@/lib/data";
import PlayCard from "@/app/(site)/components/PlayCard";
import SearchFilters, { type FilterState } from "@/app/(site)/components/SearchFilters";

const defaultFilters: FilterState = {
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
};

function parseFiltersFromParams(params: URLSearchParams): FilterState {
  return {
    query: params.get("q") || "",
    ageGroups: params.get("ag") ? params.get("ag")!.split(",") : [],
    themes: params.get("th") ? params.get("th")!.split(",") : [],
    minPlayers: params.get("pmin") ? parseInt(params.get("pmin")!) : null,
    maxPlayers: params.get("pmax") ? parseInt(params.get("pmax")!) : null,
    minDuration: params.get("dmin") ? parseInt(params.get("dmin")!) : null,
    maxDuration: params.get("dmax") ? parseInt(params.get("dmax")!) : null,
    hasLieder: params.get("lieder") === "1",
    hasTP: params.get("tp") === "1",
    isChristmas: params.get("xmas") === "1",
    sort: params.get("sort") || "relevanz",
  };
}

function filtersToParams(filters: FilterState): string {
  const p = new URLSearchParams();
  if (filters.query) p.set("q", filters.query);
  if (filters.ageGroups.length) p.set("ag", filters.ageGroups.join(","));
  if (filters.themes.length) p.set("th", filters.themes.join(","));
  if (filters.minPlayers !== null) p.set("pmin", String(filters.minPlayers));
  if (filters.maxPlayers !== null) p.set("pmax", String(filters.maxPlayers));
  if (filters.minDuration !== null) p.set("dmin", String(filters.minDuration));
  if (filters.maxDuration !== null) p.set("dmax", String(filters.maxDuration));
  if (filters.hasLieder) p.set("lieder", "1");
  if (filters.hasTP) p.set("tp", "1");
  if (filters.isChristmas) p.set("xmas", "1");
  if (filters.sort !== "relevanz") p.set("sort", filters.sort);
  const str = p.toString();
  return str ? `?${str}` : "";
}

function SucheContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const allPlays = useMemo(() => getAllPlays(), []);
  const categories = useMemo(() => getAllCategories(), []);

  const [filters, setFilters] = useState<FilterState>(() =>
    parseFiltersFromParams(searchParams)
  );

  // Sync URL params when filters change
  const handleFiltersChange = useCallback(
    (newFilters: FilterState) => {
      setFilters(newFilters);
      const paramStr = filtersToParams(newFilters);
      router.replace(`/suche${paramStr}`, { scroll: false });
    },
    [router]
  );

  // Sync from URL on popstate
  useEffect(() => {
    setFilters(parseFiltersFromParams(searchParams));
  }, [searchParams]);

  // Filter + sort
  const filtered = useMemo(() => {
    let result = allPlays;

    // Text search
    if (filters.query) {
      const q = filters.query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      );
    }

    // Age groups
    if (filters.ageGroups.length > 0) {
      result = result.filter((p) =>
        filters.ageGroups.some((ag) => p.ageGroups.includes(ag))
      );
    }

    // Themes
    if (filters.themes.length > 0) {
      result = result.filter((p) =>
        filters.themes.some((t) => p.themes.includes(t))
      );
    }

    // Player count
    if (filters.minPlayers !== null) {
      result = result.filter((p) => p.maxPlayers >= filters.minPlayers!);
    }
    if (filters.maxPlayers !== null) {
      result = result.filter((p) => p.minPlayers <= filters.maxPlayers!);
    }

    // Duration
    if (filters.minDuration !== null) {
      result = result.filter((p) => p.durationMinutes >= filters.minDuration!);
    }
    if (filters.maxDuration !== null) {
      result = result.filter((p) => p.durationMinutes <= filters.maxDuration!);
    }

    // Toggle filters
    if (filters.hasLieder) result = result.filter((p) => p.hasLieder);
    if (filters.hasTP) result = result.filter((p) => p.hasTP);
    if (filters.isChristmas) result = result.filter((p) => p.isChristmas);

    // Sort
    const sorted = [...result];
    switch (filters.sort) {
      case "titel-az":
        sorted.sort((a, b) => a.title.localeCompare(b.title, "de"));
        break;
      case "titel-za":
        sorted.sort((a, b) => b.title.localeCompare(a.title, "de"));
        break;
      case "preis-auf":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "preis-ab":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "spieler":
        sorted.sort((a, b) => a.minPlayers - b.minPlayers);
        break;
      case "dauer":
        sorted.sort((a, b) => a.durationMinutes - b.durationMinutes);
        break;
      default:
        // relevanz = default alphabetical for no query, or as-filtered
        if (!filters.query) sorted.sort((a, b) => a.title.localeCompare(b.title, "de"));
        break;
    }

    return sorted;
  }, [allPlays, filters]);

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Breadcrumb */}
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1a1a1a]">Stück-Suche</span>
        </nav>

        <h1 className="mb-8 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
          Stück-Suche
        </h1>

        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {/* Filter sidebar */}
          <SearchFilters
            filters={filters}
            categories={categories}
            resultCount={filtered.length}
            onFiltersChange={handleFiltersChange}
          />

          {/* Results */}
          <div className="flex-1">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((play) => (
                  <PlayCard key={play.slug} play={play} />
                ))}
              </div>
            ) : (
              <div className="rounded-[20px] bg-[#fdeaa1] p-10 text-center">
                <p className="mb-2 font-['Amatic_SC'] text-[32px] font-bold text-[#cc3333]">
                  Keine Stücke gefunden
                </p>
                <p className="text-[15px] text-[#424242]">
                  Versuche andere Suchbegriffe oder setze die Filter zurück.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function SuchePage() {
  return (
    <Suspense fallback={<div className="bg-[#ffcc00] px-5 py-8"><div className="mx-auto max-w-[1200px]"><p className="text-[#424242]">Laden...</p></div></div>}>
      <SucheContent />
    </Suspense>
  );
}
