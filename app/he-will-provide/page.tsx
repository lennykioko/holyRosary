import type { Metadata } from "next";
import { VideoCard } from "@/components/VideoCard";
import {
  PROVISION_PREACHINGS,
  BREAKTHROUGH_SCRIPTURES,
  HOLY_SPIRIT_RICHES,
} from "@/lib/rosary";

export const metadata: Metadata = {
  title: "He Will Provide — Promises for the Crisis",
  description:
    "Preachings by Fr. Antony Parankimalil VC on suffering, financial breakthrough, and the Holy Spirit — with the scriptures to claim every day for one month, and the promise that the Holy Spirit holds enduring riches.",
  alternates: { canonical: "/he-will-provide" },
  openGraph: {
    title: "He Will Provide — Promises for the Crisis",
    description:
      "Preachings by Fr. Antony Parankimalil VC on suffering, financial breakthrough, and the Holy Spirit — with the scriptures to claim every day for one month.",
    url: "/he-will-provide",
    type: "website",
    images: ["/opengraph-image.png"],
  },
};

export default function HeWillProvidePage() {
  return (
    <article>
      <header className="mb-14">
        <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-2">
          He Will Provide
        </div>
        <h1 className="text-[clamp(2rem,3vw+1rem,3rem)] font-extrabold leading-[1.05] text-accent tracking-tight mb-5">
          Financial crisis? Claim His promise
        </h1>
        <p className="prose text-text">
          A preaching by{" "}
          <strong>Fr. Antony Parankimalil VC</strong>, from the Divine
          Retreat ministry, for anyone carrying a burden of money, work, or
          a crisis with no way out. His counsel is simple: don&rsquo;t only
          run to people. Take the promise of God, claim it every day for a
          month — and let Him provide. The Lord who owns heaven and earth is
          your provider, and the Holy Spirit Himself is your greatest wealth.
        </p>
        <p className="prose text-text-muted">
          He kept saying it like a refrain, and it is worth keeping on your
          lips through all of this:
        </p>
        <p className="text-[clamp(1.25rem,1.5vw+0.75rem,1.625rem)] font-extrabold leading-snug tracking-tight text-accent">
          &ldquo;Holy Spirit, I love you. Be my love.&rdquo;
        </p>
      </header>

      {/* The preaching */}
      <section aria-labelledby="preachings-title" className="mb-16">
        <h2
          id="preachings-title"
          className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-6"
        >
          The preaching
        </h2>
        <div className="space-y-12">
          {PROVISION_PREACHINGS.map((p) => (
            <div
              key={p.videoId}
              className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 sm:gap-8 items-start"
            >
              <div className="md:sticky md:top-20">
                <VideoCard
                  videoId={p.videoId}
                  title={p.title}
                  author={p.author}
                  orientation="landscape"
                />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold mb-2">
                  {p.theme}
                </div>
                <p className="text-[clamp(1.0625rem,1vw+0.75rem,1.25rem)] font-bold italic text-accent leading-snug mb-4">
                  {p.lead}
                </p>
                <ul className="space-y-3">
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-text">
                      <span aria-hidden="true" className="mt-[2px] text-gold shrink-0">
                        ✠
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The scriptures to claim for a month */}
      <section
        aria-labelledby="claim-title"
        className="mb-16 rounded-2xl border border-border bg-surface-alt px-5 py-8 sm:px-9 sm:py-10"
      >
        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold mb-2">
          Claim every day · for one month
        </div>
        <h2
          id="claim-title"
          className="text-[clamp(1.5rem,2vw+0.5rem,2rem)] font-extrabold leading-[1.1] text-accent tracking-tight mb-3"
        >
          The promises for a financial breakthrough
        </h2>
        <p className="prose text-text mb-7">
          These are the scriptures Fr. Antony gave to those facing a
          financial crisis or seeking work — not to read once, but to
          claim out loud, every day, for one month. Speak them as your
          own. Each is shown by its reference and in the simple words he
          had the people say after him.
        </p>

        <ol className="space-y-4">
          {BREAKTHROUGH_SCRIPTURES.map((s, i) => (
            <li
              key={s.ref}
              className="flex gap-4 rounded-xl border border-border bg-surface px-4 py-4 sm:px-5"
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent text-[14px] font-extrabold"
              >
                {i + 1}
              </span>
              <div>
                <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-gold mb-1">
                  {s.ref}
                </div>
                <p className="text-[clamp(1.05rem,0.9vw+0.85rem,1.25rem)] font-bold italic leading-snug text-text">
                  &ldquo;{s.spoken}&rdquo;
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* The closing word — Holy Spirit holds the riches */}
      <section aria-labelledby="riches-title" className="mb-4">
        <h2
          id="riches-title"
          className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-4"
        >
          And finally — who holds the riches
        </h2>
        <p className="prose text-text mb-2">
          Before any breakthrough, Fr. Antony points past the money to its
          source. The Holy Spirit, he says, is the accountant who holds all
          enduring wealth. This is the last word he leaves on it:
        </p>
        <figure className="rounded-2xl border-l-[3px] border-scripture-border bg-scripture-bg px-6 py-8 sm:px-9 sm:py-10">
          <blockquote className="text-[clamp(1.375rem,2vw+0.75rem,1.875rem)] font-extrabold italic leading-snug tracking-tight text-accent">
            &ldquo;{HOLY_SPIRIT_RICHES.spoken}&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-[12px] font-bold uppercase tracking-[0.12em] text-text-muted">
            {HOLY_SPIRIT_RICHES.ref} — the Holy Spirit speaking
          </figcaption>
        </figure>
        <p className="prose text-text-muted mt-6">
          So seek first the Giver. &ldquo;Holy Spirit, I love you. Be my
          love&rdquo; — and the riches and honor that are with Him will be
          ordered, at the appointed time, unto you.
        </p>
      </section>
    </article>
  );
}
