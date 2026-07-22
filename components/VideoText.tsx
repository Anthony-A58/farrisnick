"use client";

import { type HTMLAttributes, useEffect, useRef, useState } from "react";

/* Plays the muted police-light clip clipped to the headline letters against a
   solid black background. The real text always renders underneath with the
   striped `.cutout` fill, so no-JS, reduced-motion, and data-saver visitors
   keep a legible headline. When motion is allowed we fade in an overlay that
   shows the footage only through the glyphs: a knockout mask (black block +
   white text) sits over the video and, under `mix-blend-mode: multiply`, keeps
   the block black everywhere except the white letters, where the video shows
   through. */
export default function VideoText({
  as: Tag = "h1",
  text,
  className = "",
  ...rest
}: {
  as?: "h1" | "p" | "span";
  text: string;
  className?: string;
} & HTMLAttributes<HTMLElement>) {
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection?.saveData;
    if (!reduced.matches && !saveData) setShow(true);
  }, []);

  // Some browsers won't start a muted autoplay video on their own; kick it
  // off explicitly once the overlay mounts.
  useEffect(() => {
    if (show) videoRef.current?.play().catch(() => {});
  }, [show]);

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
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/police-sirens-poster.jpg"
            onLoadedData={() => setReady(true)}
            onCanPlay={() => setReady(true)}
          >
            <source src="/videos/police-sirens.webm" type="video/webm" />
            <source src="/videos/police-sirens.mp4" type="video/mp4" />
          </video>
          <span className={`cutout-mask ${className}`}>{text}</span>
        </span>
      )}
    </span>
  );
}
