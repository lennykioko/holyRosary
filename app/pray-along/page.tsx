import type { Metadata } from "next";
import { VideoCard } from "@/components/VideoCard";
import { PRAY_CHANNELS, prayVideoLabel } from "@/lib/rosary";

export const metadata: Metadata = {
  title: "Pray Along",
  description:
    "Guided rosary videos from Ascension Presents (Fr. Mike Schmitz), Catholic Minute (Ken Yasinski), and My Mother Mary — all four mysteries from each channel.",
};

export default function PrayAlongPage() {
  return (
    <article>
      <header className="mb-12">
        <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-2">
          Pray Along
        </div>
        <h1 className="text-[clamp(2rem,3vw+1rem,3rem)] font-extrabold leading-[1.1] text-accent tracking-tight mb-4">
          Pray the Rosary along with a guide
        </h1>
        <p className="prose text-text">
          Sometimes the best help to begin is to pray <em>alongside</em>{" "}
          someone else. Below are the full sets of mysteries from three
          channels — each with a different voice and pace. Tap a card to open
          the video in a quiet player on this page.
        </p>
      </header>

      <div className="space-y-14">
        {PRAY_CHANNELS.map((channel) => (
          <section
            key={channel.slug}
            aria-labelledby={`channel-${channel.slug}`}
          >
            <div className="mb-5 flex flex-col gap-1 border-b border-border pb-4">
              <h2
                id={`channel-${channel.slug}`}
                className="text-[clamp(1.375rem,1.5vw+0.5rem,1.75rem)] font-extrabold tracking-tight text-text"
              >
                {channel.name}
                {channel.presenter ? (
                  <span className="text-text-muted font-bold"> · {channel.presenter}</span>
                ) : null}
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                {channel.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {channel.videos.map((v) => (
                <div key={v.videoId} className="flex flex-col">
                  <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted mb-2">
                    {v.mystery === "all" ? "All in one" : v.mystery}
                  </div>
                  <VideoCard
                    videoId={v.videoId}
                    title={prayVideoLabel(v)}
                    author={
                      channel.presenter
                        ? `${channel.name} · ${channel.presenter}`
                        : channel.name
                    }
                    orientation="landscape"
                    variant="compact"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 pt-10 border-t border-border">
        <h2 className="text-[12px] font-bold uppercase tracking-[0.14em] text-text-muted mb-3">
          A note before you begin
        </h2>
        <p className="prose text-text-muted">
          The Rosary is one prayer with many voices. If a particular guide
          helps you pray more deeply, return to it. If your attention strays,
          come back gently — Our Lady is patient. The point is not perfection;
          the point is presence.
        </p>
      </section>
    </article>
  );
}
