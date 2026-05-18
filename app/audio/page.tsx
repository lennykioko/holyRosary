import type { Metadata } from "next";
import Image from "next/image";
import { AudioPlayer } from "@/components/AudioPlayer";
import { DONNA_TRACKS } from "@/lib/rosary";

export const metadata: Metadata = {
  title: "The Rosary in Song",
  description:
    "The Rosary sung by Donna — a quiet, distraction-free way to pray along.",
};

export default function AudioPage() {
  return (
    <article>
      <header className="mb-10">
        <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-2">
          The Rosary in Song
        </div>
        <h1 className="text-[clamp(2rem,3vw+1rem,3rem)] font-extrabold leading-[1.1] text-accent tracking-tight mb-4">
          Let her voice carry the prayer
        </h1>
        <p className="prose text-text">
          The Holy Rosary, sung by <strong>Donna</strong>. Settle in however
          you pray best — let your hands hold the beads and her voice carry
          the prayer. The player below is quiet by design, with nothing to
          distract.
        </p>
        <p className="mt-3 text-[13px] text-text-muted">
          With gratitude to Donna for these recordings — every track on this
          page is her work.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
        <AudioPlayer tracks={DONNA_TRACKS} />

        <aside className="hidden lg:block">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-border shadow-sm bg-accent-soft">
            <Image
              src="/ourLadyofKibeho.jpg"
              alt="Our Lady of Kibeho"
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-[12px] text-text-muted italic">
            Our Lady of Kibeho — the only Marian apparitions on the African
            continent approved by the Holy See.
          </p>
        </aside>
      </div>

      <section className="mt-14 pt-10 border-t border-border">
        <h2 className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-3">
          A way to listen
        </h2>
        <p className="prose text-text-muted">
          You can pray the whole rosary with one set of mysteries, or simply
          rest with the <em>Hail Mary a cappella</em> when you are tired but
          want to stay close to Our Lady. Use 15-second skip to repeat a
          decade, or to find your place if you wander.
        </p>
      </section>
    </article>
  );
}
