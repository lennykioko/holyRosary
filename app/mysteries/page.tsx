import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MYSTERY_ORDER, MYSTERY_SETS, mysteryForToday } from "@/lib/rosary";

export const metadata: Metadata = {
  title: "The Mysteries",
  description:
    "Meditate on the Joyful, Sorrowful, Glorious, and Luminous mysteries of the Holy Rosary, with scripture and reflection.",
};

export default function MysteriesPage() {
  const todaySlug = mysteryForToday();

  return (
    <article>
      <header className="mb-10">
        <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-2">
          The Mysteries
        </div>
        <h1 className="text-[clamp(2rem,3vw+1rem,3rem)] font-extrabold leading-[1.1] text-accent tracking-tight mb-4">
          The Mysteries of the Holy Rosary
        </h1>
        <p className="prose text-text">
          Each set of mysteries draws us into a moment of the life of Jesus
          through the eyes of His Mother. Pray slowly — one decade, one
          mystery, one moment at a time.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {MYSTERY_ORDER.map((slug) => {
          const m = MYSTERY_SETS[slug];
          const isToday = slug === todaySlug;
          return (
            <Link
              key={slug}
              href={`/mysteries/${slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface hover:border-accent hover:shadow-md transition-all"
            >
              <div className="relative aspect-square bg-accent-soft overflow-hidden">
                <Image
                  src="/mystries.jpg"
                  alt={m.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {isToday ? (
                  <span className="absolute top-3 left-3 rounded-full bg-accent text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1">
                    For today
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col gap-1.5 p-5">
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">
                  {m.prayedOn}
                </div>
                <h2 className="text-[20px] font-extrabold text-text tracking-tight">
                  {m.name}
                </h2>
                <p className="text-[14px] text-text-muted leading-relaxed">
                  {m.intro}
                </p>
                <span className="mt-2 text-[13px] font-bold text-accent group-hover:underline underline-offset-2">
                  Open →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </article>
  );
}
