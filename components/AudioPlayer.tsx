"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Track = {
  title: string;
  file: string;
  description?: string;
};

type AudioPlayerProps = {
  tracks: Track[];
};

function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function AudioPlayer({ tracks }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);

  const active = tracks[activeIndex];

  const selectTrack = useCallback(
    (index: number, autoPlay = true) => {
      setActiveIndex(index);
      setCurrentTime(0);
      setDuration(0);
      // Defer to next tick so the <source> updates before play()
      queueMicrotask(() => {
        const a = audioRef.current;
        if (!a) return;
        a.load();
        if (autoPlay) {
          a.play()
            .then(() => setPlaying(true))
            .catch(() => setPlaying(false));
        }
      });
    },
    []
  );

  const togglePlay = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      a.pause();
      setPlaying(false);
    }
  }, []);

  function onSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const a = audioRef.current;
    if (!a) return;
    const value = Number(e.target.value);
    a.currentTime = value;
    setCurrentTime(value);
  }

  function skip(seconds: number) {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = Math.max(0, Math.min(a.duration || 0, a.currentTime + seconds));
  }

  // Keyboard shortcut: spacebar to play/pause when player is focused
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.code === "Space" && (e.target as HTMLElement)?.tagName !== "INPUT") {
        // only when our container has focus-within
        const container = document.getElementById("rosary-audio-player");
        if (container?.matches(":focus-within")) {
          e.preventDefault();
          togglePlay();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [togglePlay]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      id="rosary-audio-player"
      className="rounded-xl border border-border bg-surface overflow-hidden shadow-sm"
    >
      {/* Now playing */}
      <div className="px-5 py-5 sm:px-6 sm:py-6 border-b border-border bg-surface-alt">
        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted">
          Now Playing
        </div>
        <div className="mt-1.5 text-[20px] sm:text-[22px] font-extrabold text-text leading-tight">
          {active.title}
        </div>
        {active.description ? (
          <div className="mt-1 text-[13px] text-text-muted">
            {active.description}
          </div>
        ) : null}

        {/* Progress bar */}
        <div className="mt-5">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={onSeek}
            aria-label="Seek"
            className="rosary-range w-full"
            style={{
              background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${progress}%, var(--color-border) ${progress}%, var(--color-border) 100%)`,
            }}
          />
          <div className="mt-1.5 flex justify-between text-[12px] tabular-nums text-text-muted">
            <span>{formatTime(currentTime)}</span>
            <span>{duration ? formatTime(duration) : loading ? "Loading…" : "—:—"}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-3 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => skip(-15)}
            aria-label="Back 15 seconds"
            className="rounded-full p-2 text-text-muted hover:bg-accent-soft hover:text-accent"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12.5 8L7.5 12l5 4" />
              <path d="M7.5 12H17a4 4 0 0 1 0 8" />
            </svg>
          </button>

          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-md hover:bg-[color-mix(in_oklab,var(--color-accent)_88%,black)] transition-colors"
          >
            {playing ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => skip(15)}
            aria-label="Forward 15 seconds"
            className="rounded-full p-2 text-text-muted hover:bg-accent-soft hover:text-accent"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11.5 8L16.5 12l-5 4" />
              <path d="M16.5 12H7a4 4 0 0 0 0 8" />
            </svg>
          </button>
        </div>
      </div>

      {/* Track list */}
      <ul className="divide-y divide-border">
        {tracks.map((t, i) => {
          const isActive = i === activeIndex;
          return (
            <li key={t.file}>
              <button
                type="button"
                onClick={() => selectTrack(i)}
                aria-current={isActive ? "true" : undefined}
                className={`group flex w-full items-center gap-3 px-5 py-3.5 text-left transition-colors ${
                  isActive
                    ? "bg-accent-soft"
                    : "hover:bg-accent-soft/40"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-bold tabular-nums ${
                    isActive
                      ? "bg-accent text-white"
                      : "bg-accent-soft text-accent border border-border"
                  }`}
                >
                  {isActive && playing ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="5" width="4" height="14" rx="1" />
                      <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block truncate text-[14px] font-bold ${
                      isActive ? "text-accent" : "text-text"
                    }`}
                  >
                    {t.title}
                  </span>
                  {t.description ? (
                    <span className="block truncate text-[12px] text-text-muted">
                      {t.description}
                    </span>
                  ) : null}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <audio
        ref={audioRef}
        src={active.file}
        preload="metadata"
        onLoadStart={() => setLoading(true)}
        onLoadedMetadata={(e) => {
          setDuration(e.currentTarget.duration);
          setLoading(false);
        }}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          if (activeIndex < tracks.length - 1) {
            selectTrack(activeIndex + 1);
          } else {
            setPlaying(false);
          }
        }}
        className="hidden"
      />

      <style>{`
        .rosary-range {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 999px;
          outline: none;
          cursor: pointer;
        }
        .rosary-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 999px;
          background: var(--color-accent);
          border: 2px solid var(--color-surface);
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .rosary-range::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 999px;
          background: var(--color-accent);
          border: 2px solid var(--color-surface);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
