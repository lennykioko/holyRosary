import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MYSTERY_ORDER,
  MYSTERY_SETS,
  type MysterySlug,
} from "@/lib/rosary";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return MYSTERY_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const set = MYSTERY_SETS[slug as MysterySlug];
  if (!set) return {};
  return {
    title: set.name,
    description: set.intro,
    alternates: { canonical: `/mysteries/${set.slug}` },
    openGraph: {
      title: set.name,
      description: set.intro,
      url: `/mysteries/${set.slug}`,
      type: "article",
      images: [{ url: set.image, alt: set.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: set.name,
      description: set.intro,
      images: [set.image],
    },
  };
}

export default async function MysteryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const set = MYSTERY_SETS[slug as MysterySlug];
  if (!set) notFound();

  const idx = MYSTERY_ORDER.indexOf(set.slug);
  const prev =
    idx > 0 ? MYSTERY_SETS[MYSTERY_ORDER[idx - 1]] : null;
  const next =
    idx < MYSTERY_ORDER.length - 1
      ? MYSTERY_SETS[MYSTERY_ORDER[idx + 1]]
      : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: set.name,
    description: set.intro,
    image: set.image,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Holy Rosary — A Devotion",
    },
    about: set.mysteries.map((m) => ({
      "@type": "CreativeWork",
      name: m.title,
      description: m.meditation,
      citation: m.scriptureRef,
    })),
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <Link
          href="/mysteries"
          className="text-[13px] font-bold text-text-muted hover:text-accent inline-flex items-center gap-1"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All mysteries
        </Link>
      </nav>

      <header className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-7 mb-12">
        <div>
          <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-2">
            Prayed on {set.prayedOn}
          </div>
          <h1 className="text-[clamp(2rem,3vw+1rem,3rem)] font-extrabold leading-[1.05] text-accent tracking-tight mb-4">
            {set.name}
          </h1>
          <p className="prose text-text">{set.intro}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/pray-along"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3.5 py-2 text-[13px] font-bold text-accent hover:border-accent transition-colors"
            >
              Pray along with video
            </Link>
            <Link
              href="/audio"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3.5 py-2 text-[13px] font-bold text-accent hover:border-accent transition-colors"
            >
              Pray with song
            </Link>
            <Link
              href="/gregorian"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3.5 py-2 text-[13px] font-bold text-accent hover:border-accent transition-colors"
            >
              Gregorian chant
            </Link>
          </div>
        </div>
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-border shadow-sm bg-accent-soft order-first md:order-none">
          <Image
            src={set.image}
            alt={set.imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 280px, 100vw"
            className="object-cover"
          />
        </div>
      </header>

      <ol className="space-y-10 list-none p-0">
        {set.mysteries.map((m) => (
          <li
            key={m.number}
            className="rounded-xl border border-border bg-surface p-6 sm:p-8"
            id={`mystery-${m.number}`}
          >
            <div className="flex items-baseline gap-3 mb-1.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent text-[13px] font-extrabold tabular-nums">
                {m.number}
              </span>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted">
                Fruit · {m.fruit}
              </div>
            </div>
            <h2 className="text-[clamp(1.5rem,2vw+0.5rem,1.875rem)] font-extrabold tracking-tight text-text mb-4">
              {m.title}
            </h2>

            <p className="prose text-text">{m.meditation}</p>

            <figure className="mt-5">
              <blockquote className="!my-0">
                <p>{m.scriptureText}</p>
              </blockquote>
              <figcaption className="scripture-citation mt-2">
                — {m.scriptureRef}
              </figcaption>
            </figure>
          </li>
        ))}
      </ol>

      {/* Prev / next */}
      <nav
        aria-label="Mystery navigation"
        className="mt-12 pt-8 border-t border-border grid grid-cols-2 gap-3"
      >
        {prev ? (
          <Link
            href={`/mysteries/${prev.slug}`}
            className="rounded-lg border border-border bg-surface p-4 hover:border-accent transition-colors"
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">
              ← Previous
            </div>
            <div className="mt-1 text-[15px] font-extrabold text-accent">
              {prev.shortName}
            </div>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/mysteries/${next.slug}`}
            className="rounded-lg border border-border bg-surface p-4 text-right hover:border-accent transition-colors"
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">
              Next →
            </div>
            <div className="mt-1 text-[15px] font-extrabold text-accent">
              {next.shortName}
            </div>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
