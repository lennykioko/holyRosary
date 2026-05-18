import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { VideoCard } from "@/components/VideoCard";
import {
  FIFTEEN_PROMISES,
  INSPIRATION_VIDEOS,
  MYSTERY_ORDER,
  MYSTERY_SETS,
  mysteryForToday,
} from "@/lib/rosary";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const today = MYSTERY_SETS[mysteryForToday()];

  return (
    <article>
      {/* Hero */}
      <section className="flex flex-col sm:flex-row gap-7 sm:gap-8 items-start">
        <div className="shrink-0 w-full sm:w-56 mx-auto sm:mx-0">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-border shadow-sm bg-accent-soft">
            <Image
              src="/africanMary.jpg"
              alt="Mary, Mother of God — depicted in the iconography of Africa"
              fill
              priority
              sizes="(min-width: 640px) 224px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-3">
            <span className="ornament">✦ ✦ ✦</span>
          </div>
          <h1 className="text-[clamp(2rem,3vw+1rem,3.25rem)] font-extrabold leading-[1.05] text-accent tracking-tight mb-4">
            The Holy Rosary
          </h1>
          <p className="prose text-text">
            A simple, sacred place to grow in devotion to the Holy Rosary —
            with the mysteries, scripture, guided videos, rosaries in song, and
            the fifteen promises of Our Lady, gathered in one place.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href={`/mysteries/${today.slug}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-[14px] font-bold text-white hover:bg-[color-mix(in_oklab,var(--color-accent)_88%,black)] transition-colors"
            >
              Pray today’s mysteries — {today.shortName}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/audio"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-[14px] font-bold text-accent hover:border-accent transition-colors"
            >
              Pray with song
            </Link>
          </div>
        </div>
      </section>

      {/* Inspiration to start */}
      <section
        aria-labelledby="inspiration-heading"
        className="mt-14 pt-10 border-t border-border"
      >
        <h2
          id="inspiration-heading"
          className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-1.5"
        >
          Inspiration to begin
        </h2>
        <p className="text-text-muted text-[15px] mb-5 max-w-prose">
          Short reflections to remind us why we pray the Rosary. Tap a card to
          watch — each opens in a small player on this page.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INSPIRATION_VIDEOS.map((v) => (
            <VideoCard
              key={v.videoId}
              videoId={v.videoId}
              title={v.title}
              author={v.author}
              orientation={v.orientation ?? "landscape"}
              variant="compact"
            />
          ))}
        </div>
      </section>

      {/* Ways to pray */}
      <section
        aria-labelledby="ways-heading"
        className="mt-14 pt-10 border-t border-border"
      >
        <h2
          id="ways-heading"
          className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-5"
        >
          Four ways to pray
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/mysteries"
            className="group rounded-xl border border-border bg-surface p-5 hover:border-accent hover:shadow-sm transition-all"
          >
            <div className="text-accent mb-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <h3 className="text-[17px] font-extrabold text-text">
              Mysteries & Scripture
            </h3>
            <p className="mt-1 text-[14px] text-text-muted leading-relaxed">
              Meditate on each mystery with its scripture reading and a brief
              reflection. Quiet, image-and-text only.
            </p>
            <span className="mt-3 inline-block text-[13px] font-bold text-accent group-hover:underline underline-offset-2">
              Begin →
            </span>
          </Link>

          <Link
            href="/pray-along"
            className="group rounded-xl border border-border bg-surface p-5 hover:border-accent hover:shadow-sm transition-all"
          >
            <div className="text-accent mb-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="6 4 20 12 6 20 6 4" />
              </svg>
            </div>
            <h3 className="text-[17px] font-extrabold text-text">
              Pray along (video)
            </h3>
            <p className="mt-1 text-[14px] text-text-muted leading-relaxed">
              Guided rosary videos from several channels — pick a voice and
              pace that helps you pray.
            </p>
            <span className="mt-3 inline-block text-[13px] font-bold text-accent group-hover:underline underline-offset-2">
              Watch →
            </span>
          </Link>

          <Link
            href="/audio"
            className="group rounded-xl border border-border bg-surface p-5 hover:border-accent hover:shadow-sm transition-all"
          >
            <div className="text-accent mb-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3v4zM3 19a2 2 0 0 0 2 2h1v-6H3v4z" />
              </svg>
            </div>
            <h3 className="text-[17px] font-extrabold text-text">
              The Rosary in song
            </h3>
            <p className="mt-1 text-[14px] text-text-muted leading-relaxed">
              Open your heart. The Rosary sung by <strong>Donna</strong>,
              with a quiet, distraction-free player.
            </p>
            <span className="mt-3 inline-block text-[13px] font-bold text-accent group-hover:underline underline-offset-2">
              Listen →
            </span>
          </Link>

          <Link
            href="/gregorian"
            className="group rounded-xl border border-border bg-surface p-5 hover:border-accent hover:shadow-sm transition-all"
          >
            <div className="text-accent mb-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <h3 className="text-[17px] font-extrabold text-text">
              Gregorian chant
            </h3>
            <p className="mt-1 text-[14px] text-text-muted leading-relaxed">
              The Rosary sung in Latin chant — ancient, sacred, and slow.
              Let the melody carry the prayer.
            </p>
            <span className="mt-3 inline-block text-[13px] font-bold text-accent group-hover:underline underline-offset-2">
              Chant →
            </span>
          </Link>
        </div>
      </section>

      {/* Mystery overview */}
      <section
        aria-labelledby="mysteries-overview"
        className="mt-14 pt-10 border-t border-border"
      >
        <h2
          id="mysteries-overview"
          className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-5"
        >
          The Four Mysteries
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {MYSTERY_ORDER.map((slug) => {
            const m = MYSTERY_SETS[slug];
            return (
              <Link
                key={slug}
                href={`/mysteries/${slug}`}
                className="rounded-lg border border-border bg-surface p-4 hover:border-accent hover:bg-accent-soft/40 transition-colors"
              >
                <div className="text-[15px] font-extrabold text-text">
                  {m.shortName}
                </div>
                <div className="mt-0.5 text-[12px] text-text-muted">
                  {m.prayedOn}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Fifteen Promises */}
      <section
        aria-labelledby="promises-heading"
        className="mt-14 pt-10 border-t border-border"
      >
        <div className="flex items-end justify-between gap-4 mb-2">
          <h2
            id="promises-heading"
            className="text-[clamp(1.5rem,2vw+0.5rem,2rem)] font-extrabold tracking-tight text-text"
          >
            The 15 Promises of the Holy Rosary
          </h2>
        </div>
        <p className="prose text-text-muted">
          According to tradition, the Blessed Virgin Mary made these fifteen
          promises to those who faithfully pray her Rosary — given through
          St. Dominic and Blessed Alan de la Roche.
        </p>
        <ol className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 list-none p-0">
          {FIFTEEN_PROMISES.map((promise, i) => (
            <li
              key={i}
              className="rounded-lg border border-border bg-surface px-4 py-3.5"
            >
              <div className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent text-[12px] font-extrabold tabular-nums"
                >
                  {i + 1}
                </span>
                <p className="text-[14.5px] leading-relaxed text-text">
                  {promise}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-[12px] text-text-muted italic">
          A devotional tradition recognized in Catholic piety; not part of the
          deposit of faith.
        </p>
      </section>
    </article>
  );
}
