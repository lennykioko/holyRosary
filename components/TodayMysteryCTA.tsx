"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MYSTERY_SETS,
  mysteryForToday,
  type MysterySlug,
} from "@/lib/rosary";

export function TodayMysteryCTA() {
  const [slug, setSlug] = useState<MysterySlug | null>(null);

  useEffect(() => {
    setSlug(mysteryForToday());
  }, []);

  const href = slug ? `/mysteries/${slug}` : "/mysteries";
  const label = slug
    ? `Pray today’s mysteries — ${MYSTERY_SETS[slug].shortName}`
    : "Pray today’s mysteries";

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-[14px] font-bold text-white hover:bg-[color-mix(in_oklab,var(--color-accent)_88%,black)] transition-colors"
    >
      {label}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
