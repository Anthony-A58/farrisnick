"use client";

import { useEffect, useRef } from "react";

/* Muted, looping background video. Kicks playback off explicitly (some browsers
   won't auto-start on their own) and stays paused on its poster frame for
   reduced-motion or data-saver visitors. */
export default function BackgroundLoop({
  webm,
  mp4,
  poster,
  className = "",
}: {
  webm: string;
  mp4: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection?.saveData;
    if (reduced || saveData) {
      v.pause();
      return;
    }
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
