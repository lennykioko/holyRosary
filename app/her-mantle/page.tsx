import type { Metadata } from "next";
import Image from "next/image";
import { MARIAN_DEVOTIONS } from "@/lib/rosary";

export const metadata: Metadata = {
  title: "Under Her Mantle — Marian Devotions & Apparitions",
  description:
    "Short writeups on Marian apparitions and devotions — Our Lady of Kibeho (Rwanda), Our Lady of Africa (Algeria), and Our Lady of Guadalupe (Mexico).",
  alternates: { canonical: "/her-mantle" },
  openGraph: {
    title: "Under Her Mantle — Marian Devotions & Apparitions",
    description:
      "Short writeups on Marian apparitions and devotions — Our Lady of Kibeho (Rwanda), Our Lady of Africa (Algeria), and Our Lady of Guadalupe (Mexico).",
    url: "/her-mantle",
    type: "website",
    images: ["/opengraph-image.png"],
  },
};

export default function HerMantlePage() {
  return (
    <article>
      <header className="mb-12">
        <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-2">
          Under Her Mantle
        </div>
        <h1 className="text-[clamp(2rem,3vw+1rem,3rem)] font-extrabold leading-[1.05] text-accent tracking-tight mb-4">
          Marian devotions &amp; apparitions
        </h1>
        <p className="prose text-text">
          A small library of writeups on Marian devotions throughout the
          world — Our Lady of Kibeho in Rwanda, Our Lady of Africa in
          Algiers, and Our Lady of Guadalupe in Mexico. More will be added
          over time.
        </p>
      </header>

      <div className="space-y-16">
        {MARIAN_DEVOTIONS.map((d, idx) => (
          <section
            key={d.slug}
            id={d.slug}
            aria-labelledby={`${d.slug}-title`}
            className="scroll-mt-24"
          >
            <div
              className={`grid grid-cols-1 md:grid-cols-[280px_1fr] gap-7 sm:gap-9 items-start ${
                idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-border shadow-sm bg-accent-soft">
                  <Image
                    src={d.image}
                    alt={d.imageAlt}
                    fill
                    sizes="(min-width: 768px) 280px, 100vw"
                    className="object-contain"
                  />
                </div>
                <dl className="mt-4 space-y-2 text-[13px]">
                  <div className="flex gap-2">
                    <dt className="font-bold uppercase tracking-[0.1em] text-text-muted text-[11px]">
                      Where
                    </dt>
                    <dd className="text-text">{d.location}</dd>
                  </div>
                  {d.feastDay ? (
                    <div className="flex gap-2">
                      <dt className="font-bold uppercase tracking-[0.1em] text-text-muted text-[11px]">
                        Feast
                      </dt>
                      <dd className="text-text">{d.feastDay}</dd>
                    </div>
                  ) : null}
                </dl>
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted mb-2">
                  {d.subtitle}
                </div>
                <h2
                  id={`${d.slug}-title`}
                  className="text-[clamp(1.75rem,2vw+0.5rem,2.25rem)] font-extrabold leading-[1.1] text-accent tracking-tight mb-4"
                >
                  {d.title}
                </h2>
                <div className="prose text-text">
                  {d.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <blockquote>
                    <p>{d.invocation}</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

    </article>
  );
}
