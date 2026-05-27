"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MYSTERY_ORDER,
  MYSTERY_SETS,
  mysteryForToday,
  type MysterySlug,
} from "@/lib/rosary";

export function MysteriesGrid() {
  const [todaySlug, setTodaySlug] = useState<MysterySlug | null>(null);

  useEffect(() => {
    setTodaySlug(mysteryForToday());
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {MYSTERY_ORDER.map((slug) => {
        const m = MYSTERY_SETS[slug];
        const isToday = slug === todaySlug;
        return (
          <Link
            key={slug}
            href={`/mysteries/${slug}`}
            className={
              isToday
                ? "group flex flex-col overflow-hidden rounded-xl bg-surface ring-2 ring-accent shadow-lg hover:shadow-xl transition-all"
                : "group flex flex-col overflow-hidden rounded-xl border border-border bg-surface hover:border-accent hover:shadow-md transition-all"
            }
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
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-accent text-white text-[12px] font-bold uppercase tracking-wider px-3 py-1.5 shadow-md">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
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
  );
}
