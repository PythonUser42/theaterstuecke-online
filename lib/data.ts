import playsData from "@/data/plays.json";
import categoriesData from "@/data/categories.json";

export interface PlayVariant {
  id: string;
  name: string;
  price: number;
}

export interface Play {
  slug: string;
  title: string;
  excerpt: string;
  price: number;
  variants?: PlayVariant[];
  ageGroups: string[];
  themes: string[];
  minPlayers: number;
  maxPlayers: number;
  durationMinutes: number;
  hasLieder: boolean;
  hasTP: boolean;
  isVariableLength: boolean;
  isChristmas: boolean;
  leseprobeUrl: string;
  imageUrl: string | null;
  wpProductUrl: string;
}

export interface AgeGroup {
  slug: string;
  name: string;
}

export interface Theme {
  slug: string;
  name: string;
  ageGroup: string;
}

export interface CategoriesData {
  ageGroups: AgeGroup[];
  themes: Theme[];
}

const plays: Play[] = playsData as Play[];
const categories: CategoriesData = categoriesData as CategoriesData;

export function getAllPlays(): Play[] {
  return plays;
}

export function getPlayBySlug(slug: string): Play | undefined {
  return plays.find((p) => p.slug === slug);
}

export function getPlaysByCategory(themeSlug: string): Play[] {
  const theme = categories.themes.find((t) => t.slug === themeSlug);
  if (!theme) return [];
  return plays.filter((p) => p.themes.includes(theme.name));
}

export function getPlaysByAgeGroup(ageSlug: string): Play[] {
  const ag = categories.ageGroups.find((a) => a.slug === ageSlug);
  if (!ag) return [];
  return plays.filter((p) => p.ageGroups.includes(ag.name));
}

export function getAllCategories(): CategoriesData {
  return categories;
}

export function getCategoryBySlug(slug: string): Theme | AgeGroup | undefined {
  const theme = categories.themes.find((t) => t.slug === slug);
  if (theme) return theme;
  return categories.ageGroups.find((a) => a.slug === slug);
}

export function getAgeGroupBySlug(slug: string): AgeGroup | undefined {
  return categories.ageGroups.find((a) => a.slug === slug);
}

export function getThemesByAgeGroup(ageGroupName: string): Theme[] {
  return categories.themes.filter((t) => t.ageGroup === ageGroupName);
}
