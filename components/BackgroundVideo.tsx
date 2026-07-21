"use client";

import { useEffect, useState } from "react";

/* Decorative, muted, looping b-roll behind hero/CTA lettering. Renders
   nothing on the server and only mounts after the client confirms the
   visitor allows motion and isn't on data-saver, so it never touches the
   critical path or Lighthouse. The 12s clip is a forward+reverse palindrome
   (~300 KB) so the loop point is invisible. */
export default function BackgroundVideo() {
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection?.saveData;
    if (!reduced.matches && !saveData) setShow(true);
  }, []);

  if (!show) return null;
  return (
    <video
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
        ready ? "opacity-100" : "opacity-0"
      }`}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster="/images/la-night-poster.jpg"
      aria-hidden
      onLoadedData={() => setReady(true)}
    >
      <source src="/videos/la-night.webm" type="video/webm" />
      <source src="/videos/la-night.mp4" type="video/mp4" />
    </video>
  );
}
