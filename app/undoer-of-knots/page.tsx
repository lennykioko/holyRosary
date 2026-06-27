import type { Metadata } from "next";
import Image from "next/image";
import {
  KNOTS_WAYS,
  KNOTS_DATES,
  KNOTS_CORE_PRAYER,
} from "@/lib/rosary";

export const metadata: Metadata = {
  title: "Mary, Undoer of Knots — The Devotion & 54-Day Novena",
  description:
    "Pray the novena to Our Lady, Undoer of Knots — one of the prayers the demons hate most. The core prayer laid out to pray slowly, how to pray it inside the Rosary, the 54-day novena, and the feast-day dates (Aug 6 – Sept 28).",
  alternates: { canonical: "/undoer-of-knots" },
  openGraph: {
    title: "Mary, Undoer of Knots — The Devotion & 54-Day Novena",
    description:
      "Pray the novena to Our Lady, Undoer of Knots. The core prayer laid out to pray slowly, how to pray it inside the Rosary, and the 54-day novena (Aug 6 – Sept 28).",
    url: "/undoer-of-knots",
    type: "website",
    images: ["/knots.jpg"],
  },
};

export default function UndoerOfKnotsPage() {
  return (
    <article>
      <header className="mb-14">
        <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-2">
          Mary, Undoer of Knots
        </div>
        <h1 className="text-[clamp(2rem,3vw+1rem,3rem)] font-extrabold leading-[1.05] text-accent tracking-tight mb-6">
          Bring her the knot you cannot untie
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-7 sm:gap-9 items-start">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-border shadow-sm bg-accent-soft">
            <Image
              src="/knots.jpg"
              alt="Mary, Undoer of Knots"
              fill
              priority
              sizes="(min-width: 768px) 300px, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="prose text-text">
              So many of us are bound — by a wound, a confusion, a crisis with
              no way out, a knot in the heart or in the family that we have no
              power to loosen. The novena to{" "}
              <strong>Our Lady, Undoer of Knots</strong> places that very thing
              into the hands of the Mother to whom God entrusted the undoing of
              knots. According to the chief exorcist of Milan, it is one of the
              novenas the demons hate most. Choose one seemingly impossible
              intention, entrust it to her completely — and pray.
            </p>
            <figure className="mt-7 rounded-2xl border-l-[3px] border-scripture-border bg-scripture-bg px-6 py-7 sm:px-9 sm:py-8">
              <blockquote className="text-[clamp(1.125rem,1.4vw+0.75rem,1.5rem)] font-bold italic leading-snug tracking-tight text-accent">
                &ldquo;Never was it known that anyone who fled to her protection
                was left unaided.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[12px] font-bold uppercase tracking-[0.12em] text-text-muted">
                St. Bernard of Clairvaux
              </figcaption>
            </figure>
          </div>
        </div>
      </header>

      {/* The core prayer — laid out to pray slowly */}
      <section
        aria-labelledby="prayer-title"
        className="mb-16 rounded-2xl border border-border bg-surface-alt px-5 py-8 sm:px-9 sm:py-10"
      >
        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold mb-2">
          The core prayer · pray it slowly
        </div>
        <h2
          id="prayer-title"
          className="text-[clamp(1.5rem,2vw+0.5rem,2rem)] font-extrabold leading-[1.1] text-accent tracking-tight mb-3"
        >
          Prayer to Our Lady, Undoer of Knots
        </h2>
        <p className="prose text-text-muted mb-8">
          Don&rsquo;t rush it. Read each line as if you were speaking to your
          Mother face to face. When you reach the pause, name the one knot you
          are bringing her today.
        </p>

        <ol className="space-y-5">
          {KNOTS_CORE_PRAYER.map((part, i) =>
            part.type === "pause" ? (
              <li
                key={i}
                className="flex gap-4 rounded-xl border border-gold/40 bg-accent-soft px-5 py-5"
              >
                <span aria-hidden="true" className="text-gold text-xl leading-none mt-[2px] shrink-0">
                  ✠
                </span>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold mb-1">
                    Pause — name your intention
                  </div>
                  <p className="text-[clamp(1.0625rem,1vw+0.75rem,1.25rem)] font-bold italic leading-snug text-accent">
                    {part.text}
                  </p>
                </div>
              </li>
            ) : (
              <li
                key={i}
                className="text-[clamp(1.0625rem,0.7vw+0.9rem,1.1875rem)] leading-[1.7] text-text"
              >
                {part.text}
              </li>
            )
          )}
        </ol>

        <p className="mt-8 text-[15px] leading-relaxed text-text-muted">
          Close, if you wish, with three Hail Marys — and the prayer to St.
          Michael the Archangel if the knot you carry has a diabolical root.
        </p>
      </section>

      {/* Three ways to pray it */}
      <section aria-labelledby="ways-title" className="mb-16">
        <h2
          id="ways-title"
          className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-6"
        >
          How to pray the novena
        </h2>
        <p className="prose text-text mb-7">
          There is no single right way — everyone is different. Ask Our Lady
          to convict your heart of what she wants of you. If God asks
          something of you, He supplies the grace to finish it. Here are the
          ways, from the simplest to the most powerful.
        </p>

        <div className="space-y-4">
          {KNOTS_WAYS.map((w, i) => (
            <div
              key={w.label}
              className={`flex gap-4 rounded-xl border px-5 py-5 ${
                w.recommended
                  ? "border-gold/50 bg-accent-soft"
                  : "border-border bg-surface"
              }`}
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent text-[14px] font-extrabold"
              >
                {i + 1}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                  <h3 className="text-[17px] font-extrabold tracking-tight text-accent">
                    {w.label}
                  </h3>
                  {w.recommended ? (
                    <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-gold">
                      Recommended
                    </span>
                  ) : null}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted mb-2">
                  {w.tag}
                </div>
                <p className="text-[15px] leading-relaxed text-text">
                  {w.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The dates — praying it together each year */}
      <section
        aria-labelledby="dates-title"
        className="mb-4 rounded-2xl border border-border bg-surface-alt px-5 py-8 sm:px-9 sm:py-10"
      >
        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold mb-2">
          54 days · together each year
        </div>
        <h2
          id="dates-title"
          className="text-[clamp(1.5rem,2vw+0.5rem,2rem)] font-extrabold leading-[1.1] text-accent tracking-tight mb-3"
        >
          The dates that frame the novena
        </h2>
        <p className="prose text-text mb-7">
          Feast days are days of abundant grace. The 54 days fall, by
          providence, between two feasts made for this prayer — and run
          straight through St. Michael&rsquo;s Lent. You can begin any day you
          like, but these are the dates to pray it as a community.
        </p>

        <ol className="space-y-4">
          {KNOTS_DATES.map((d) => (
            <li
              key={d.date}
              className="rounded-xl border border-border bg-surface px-5 py-4"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                <span className="text-[15px] font-extrabold text-accent">
                  {d.date}
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-gold">
                  {d.feast}
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-text">{d.note}</p>
            </li>
          ))}
        </ol>

        <p className="prose text-text-muted mt-7">
          Not every prayer is answered the way we hope — but prayer is always
          fruitful, and she never fails. The Virgin Mary does not lose against
          the evil one. Graces will flow if you simply do the prayers.
        </p>
      </section>
    </article>
  );
}
