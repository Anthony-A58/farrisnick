"use client";

import { type HTMLAttributes, useEffect, useState } from "react";

/* Plays the muted LA b-roll clipped to the headline letters instead of behind
   the whole hero. The real text always renders underneath with the striped
   `.cutout` fill, so no-JS, reduced-motion, and data-saver visitors keep a
   legible headline. When motion is allowed we fade in an overlay that shows
   the footage only through the glyphs: a knockout mask (black block + white
   text) sits over the video and, under `mix-blend-mode: multiply`, keeps the
   block black everywhere except the white letters, where the video shows
   through. The same 12s palindrome clip as before (~300 KB, invisible loop). */
export default function VideoText({
  as: Tag = "h1",
  text,
  className = "",
  ...rest
}: {
  as?: "h1" | "p";
  text: string;
  className?: string;
} & HTMLAttributes<HTMLElement>) {
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection?.saveData;
    if (!reduced.matches && !saveData) setShow(true);
  }, []);

  return (
    <span className="video-text">
      <Tag className={`cutout ${className}`} {...rest}>
        {text}
      </Tag>
      {show && (
        <span
          className={`video-text__fill transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/la-night-poster.jpg"
            onLoadedData={() => setReady(true)}
          >
            <source src="/videos/la-night.webm" type="video/webm" />
            <source src="/videos/la-night.mp4" type="video/mp4" />
          </video>
          <span className={`cutout-mask ${className}`}>{text}</span>
        </span>
      )}
    </span>
  );
}
