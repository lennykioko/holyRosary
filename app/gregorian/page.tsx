import type { Metadata } from "next";
import Image from "next/image";
import { VideoCard } from "@/components/VideoCard";
import { GREGORIAN_VIDEOS } from "@/lib/rosary";

export const metadata: Metadata = {
  title: "Gregorian Chant",
  description:
    "Pray the Holy Rosary in the ancient tradition of Gregorian chant — Latin, sung, sacred.",
  alternates: { canonical: "/gregorian" },
  openGraph: {
    title: "The Rosary, sung in Gregorian chant",
    description:
      "Pray the Holy Rosary in the ancient tradition of Gregorian chant — Latin, sung, sacred.",
    url: "/gregorian",
    type: "website",
    images: ["/opengraph-image.png"],
  },
};

export default function GregorianPage() {
  return (
    <article>
      <header className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-7 mb-12 items-start">
        <div>
          <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-2">
            Gregorian Chant
          </div>
          <h1 className="text-[clamp(2rem,3vw+1rem,3rem)] font-extrabold leading-[1.05] text-accent tracking-tight mb-4">
            The Rosary, sung in chant
          </h1>
          <p className="prose text-text">
            Gregorian chant is the oldest music of the Roman Church — a sung
            form of prayer that has carried the words of Scripture and the
            liturgy for more than a thousand years. Praying the Rosary with
            chant is a gentle way to slow down, breathe, and let the prayer
            wash over you.
          </p>
          <p className="prose text-text-muted">
            You don&rsquo;t need to follow the Latin to pray well. Let the
            melody hold you while you keep your hands on the beads and your
            heart on the mystery.
          </p>
        </div>
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-border shadow-sm bg-accent-soft order-first md:order-none">
          <Image
            src="/ourLadyofAfrica.jpg"
            alt="Our Lady of Africa"
            fill
            priority
            sizes="(min-width: 768px) 240px, 100vw"
            className="object-cover"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {GREGORIAN_VIDEOS.map((v) => (
          <div key={v.videoId} className="flex flex-col gap-3">
            <VideoCard
              videoId={v.videoId}
              title={v.title}
              author={v.author}
              orientation="landscape"
            />
            <p className="text-[13px] text-text-muted leading-relaxed px-1">
              {v.description}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-14 pt-10 border-t border-border">
        <h2 className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-3">
          A note on chant
        </h2>
        <p className="prose text-text-muted">
          The Second Vatican Council, in <em>Sacrosanctum Concilium</em> (1963),
          recognized Gregorian chant as &ldquo;specially suited to the Roman
          liturgy&rdquo; and gave it &ldquo;pride of place&rdquo; among forms
          of sacred music. To pray with chant is to pray with the Church
          across the centuries.
        </p>
      </section>
    </article>
  );
}
