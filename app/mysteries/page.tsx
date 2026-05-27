import type { Metadata } from "next";
import { MysteriesGrid } from "@/components/MysteriesGrid";

export const metadata: Metadata = {
  title: "The Mysteries",
  description:
    "Meditate on the Joyful, Sorrowful, Glorious, and Luminous mysteries of the Holy Rosary, with scripture and reflection.",
  alternates: { canonical: "/mysteries" },
  openGraph: {
    title: "The Mysteries of the Holy Rosary",
    description:
      "Meditate on the Joyful, Sorrowful, Glorious, and Luminous mysteries of the Holy Rosary, with scripture and reflection.",
    url: "/mysteries",
    type: "website",
    images: ["/opengraph-image.png"],
  },
};

export default function MysteriesPage() {
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

      <MysteriesGrid />
    </article>
  );
}
