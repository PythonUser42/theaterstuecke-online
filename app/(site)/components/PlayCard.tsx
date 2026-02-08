import Link from "next/link";
import type { Play } from "@/lib/data";

export default function PlayCard({ play }: { play: Play }) {
  return (
    <Link
      href={`/stueck/${play.slug}`}
      className="block rounded-[16px] border border-[#e6b800] bg-[#fdeaa1] p-5 transition-colors hover:bg-[#fcea62]"
    >
      <h3 className="mb-2 font-['Amatic_SC'] text-[20px] font-bold leading-[24px] text-[#cc3333] md:text-[24px] md:leading-[28px]">
        {play.title}
      </h3>

      <div className="mb-3 flex flex-wrap gap-2 text-[13px] text-[#424242]">
        <span>{play.minPlayers}–{play.maxPlayers} Spieler</span>
        <span>·</span>
        <span>{play.durationMinutes} min</span>
        {play.hasLieder && <span className="rounded bg-[#ffcc00] px-1.5 py-0.5 text-[11px] font-bold">♪ Lieder</span>}
        {play.hasTP && <span className="rounded bg-[#ffcc00] px-1.5 py-0.5 text-[11px] font-bold">TP</span>}
        {play.isChristmas && <span className="rounded bg-[#ffcc00] px-1.5 py-0.5 text-[11px] font-bold">🎄</span>}
      </div>

      <p className="mb-3 line-clamp-3 text-[14px] leading-[1.5em] text-[#424242]">
        {play.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {play.ageGroups.map((ag) => (
            <span
              key={ag}
              className="rounded-full bg-[#ffcc00] px-2 py-0.5 text-[11px] font-bold text-[#424242]"
            >
              {ag}
            </span>
          ))}
        </div>
        <span className="font-['Amatic_SC'] text-[22px] font-bold text-[#cc3333]">
          ab {play.price},00 €
        </span>
      </div>
    </Link>
  );
}
