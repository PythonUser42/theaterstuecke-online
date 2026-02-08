const allCategories = [
  { name: "Kita", href: "/kategorie/kita" },
  { name: "Grundschule", href: "/kategorie/grundschule" },
  { name: "9 bis 13\nJahre", href: "/kategorie/9-13-jahre" },
  { name: "Jugendliche", href: "/kategorie/jugendliche" },
  { name: "Familien-\nprogramme", href: "/suche?ag=Familienprogramme" },
  { name: "Abend-\nprogramme", href: "/suche?ag=Erwachsene" },
];

function CategoryCard({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      className="flex min-h-[120px] items-center justify-center rounded-[16px] border border-[#e6b800] bg-[#ffcc00] px-6 py-6 text-center transition-colors hover:bg-[#fcea62]"
    >
      <span className="whitespace-pre-line font-['Amatic_SC'] text-[22px] font-bold leading-[28px] text-[#cc3333] md:text-[28px] md:leading-[34px]">
        {name}
      </span>
    </a>
  );
}

export default function Categories() {
  return (
    <section
      data-section-id="categories"
      className="bg-[#ffcc00] px-4 pb-8 pt-4 md:px-5"
    >
      <div className="mx-auto max-w-[1100px] rounded-[20px] bg-[#fdeaa1] px-4 py-6 md:px-10 md:py-10">
        <h2 className="mb-8 text-center font-['Amatic_SC'] text-[28px] font-bold leading-[34px] text-[#cc3333] md:text-[36px] md:leading-[40px]">
          Alle Theaterstücke nach Kategorien
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {allCategories.map((cat) => (
            <CategoryCard key={cat.name} name={cat.name} href={cat.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
