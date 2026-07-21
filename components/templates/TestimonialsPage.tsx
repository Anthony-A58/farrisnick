import Link from "next/link";
import { TESTIMONIALS_FULL } from "@/lib/testimonials-data";
import { SITE } from "@/lib/site";
import { CtaBand } from "./shared";

function displayName(name: string) {
  const n = name.trim();
  if (/^anonymous/i.test(n)) return "Anonymous Client";
  return n;
}

export default function TestimonialsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${SITE.url}/#organization`,
    url: `${SITE.url}/about/testimonials/`,
    review: TESTIMONIALS_FULL.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: displayName(t.author) },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: t.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* H1 stays "Testimonials" for SEO parity. */}
      <div className="relative overflow-hidden border-b border-hairline bg-black py-12 text-white lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="cutout max-w-4xl text-4xl lg:text-6xl">
            Testimonials
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            In their own words: clients describe what it was like to have Farris
            Law Firm in their corner during one of the hardest moments of their
            lives.
          </p>
          <Link
            href="/about/reviews/"
            className="mt-4 inline-block text-sm font-semibold text-yellow-500 underline decoration-yellow-500 underline-offset-4 hover:text-yellow-300"
          >
            See our 5.0 Google reviews
          </Link>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS_FULL.map((t, i) => (
            <figure
              key={t.author + i}
              className="relative flex h-full flex-col border border-neutral-800 border-t-2 border-t-yellow-500 bg-coal-deep p-7"
            >
              <span
                className="font-display absolute right-6 top-2 text-6xl leading-none text-yellow-500/20"
                aria-hidden
              >
                &rdquo;
              </span>
              <span className="text-xl tracking-[2px] text-yellow-500" aria-hidden>
                {"★★★★★"}
              </span>
              <blockquote className="mt-4 flex-1 leading-relaxed text-zinc-200">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-hairline pt-4">
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 bg-coal font-bold text-yellow-500">
                    {displayName(t.author).charAt(0)}
                  </span>
                  <span className="font-extrabold text-white">
                    {displayName(t.author)}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-xs text-zinc-500">
          Testimonials reflect the experience of individual clients. Prior
          results do not guarantee a similar outcome. Attorney advertising.
        </p>
      </section>

      <CtaBand heading="Let us be the firm you tell people about." />
    </>
  );
}
