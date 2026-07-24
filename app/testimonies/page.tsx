import type { Metadata } from "next";
import { VideoCard } from "@/components/VideoCard";
import { TESTIMONY_VIDEOS, LEARN_MORE_VIDEOS } from "@/lib/rosary";

export const metadata: Metadata = {
  title: "Stories & Testimonies of the Rosary",
  description:
    "Real testimonies of the Holy Rosary, and — for those who want to learn more — the Marian apparitions recognized by the Vatican.",
  alternates: { canonical: "/testimonies" },
  openGraph: {
    title: "Stories & Testimonies of the Rosary",
    description:
      "Real testimonies of the Holy Rosary, and a deeper look for those who want to learn more.",
    url: "/testimonies",
    type: "website",
    images: ["/opengraph-image.png"],
  },
};

const VIDEOS = [...TESTIMONY_VIDEOS, ...LEARN_MORE_VIDEOS];

export default function TestimoniesPage() {
  return (
    <article>
      <header className="mb-8">
        <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-2">
          Stories & Testimonies
        </div>
        <h1 className="text-[clamp(2rem,3vw+1rem,3rem)] font-extrabold leading-[1.05] text-accent tracking-tight mb-4">
          What the Rosary has done
        </h1>
        <p className="text-text-muted text-[15px] max-w-prose">
          Testimonies of lives the Rosary has changed, and a deeper look for
          those who want to learn more. Tap a card to watch — each opens in a
          small player on this page.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {VIDEOS.map((v) => (
          <VideoCard
            key={v.videoId}
            videoId={v.videoId}
            title={v.title}
            author={v.author}
            orientation="landscape"
            variant="compact"
          />
        ))}
      </div>
    </article>
  );
}
