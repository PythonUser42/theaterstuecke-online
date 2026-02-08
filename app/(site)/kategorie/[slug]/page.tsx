import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllCategories,
  getPlaysByAgeGroup,
  getPlaysByCategory,
  getAgeGroupBySlug,
  getCategoryBySlug,
} from "@/lib/data";
import PlayCard from "@/app/(site)/components/PlayCard";

export async function generateStaticParams() {
  const cats = getAllCategories();
  const slugs = [
    ...cats.ageGroups.map((a) => a.slug),
    ...cats.themes.map((t) => t.slug),
  ];
  return slugs.map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Try age group first, then theme
  const ageGroup = getAgeGroupBySlug(slug);
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const plays = ageGroup
    ? getPlaysByAgeGroup(slug)
    : getPlaysByCategory(slug);

  const name = "name" in category ? category.name : slug;
  const isAgeGroup = !!ageGroup;

  return (
    <main className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Breadcrumb */}
        <nav className="mb-6 text-[14px] text-[#424242]">
          <Link href="/" className="hover:text-[#cc3333]">Home</Link>
          <span className="mx-2">›</span>
          {!isAgeGroup && "ageGroup" in category && (
            <>
              <Link
                href={`/kategorie/${category.ageGroup.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-[#cc3333]"
              >
                {category.ageGroup}
              </Link>
              <span className="mx-2">›</span>
            </>
          )}
          <span className="text-[#1a1a1a]">{name}</span>
        </nav>

        <div data-section-id="category-header" className="mb-8 rounded-[20px] bg-[#fdeaa1] px-4 py-6 md:px-10 md:py-8">
          <h1 className="mb-2 font-['Amatic_SC'] text-[32px] font-bold leading-[38px] text-[#cc3333] md:text-[44px] md:leading-[48px]">
            {name}
          </h1>
          <p className="text-[15px] text-[#424242]">
            {plays.length} {plays.length === 1 ? "Stück" : "Stücke"} gefunden
          </p>
        </div>

        {/* Play grid */}
        <div data-section-id="category-grid" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plays.map((play) => (
            <PlayCard key={play.slug} play={play} />
          ))}
        </div>

        {plays.length === 0 && (
          <div className="rounded-[20px] bg-[#fdeaa1] p-10 text-center">
            <p className="font-['Amatic_SC'] text-[28px] font-bold text-[#cc3333]">
              Keine Stücke in dieser Kategorie gefunden.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
