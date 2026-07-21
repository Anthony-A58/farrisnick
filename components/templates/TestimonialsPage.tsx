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
      <div className="relative overflow-hidden bg-navy-950 py-12 text-white lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(27,58,102,0.55),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
          <h1 className="font-display text-3xl font-bold leading-tight lg:text-5xl">
            Testimonials
          </h1>
          <p className="mt-4 max-w-2xl text-grey-200/90">
            In their own words: clients describe what it was like to have Farris
            Law Firm in their corner during one of the hardest moments of their
            lives.
          </p>
          <Link
            href="/about/reviews/"
            className="mt-4 inline-block text-sm font-semibold text-gold-400 underline decoration-gold-500 underline-offset-4 hover:text-gold-500"
          >
            See our 5.0 Google reviews
          </Link>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS_FULL.map((t, i) => (
            <figure
              key={t.author + i}
              className="relative flex flex-col rounded border border-grey-200 bg-white p-8"
            >
              <span
                className="font-display absolute right-6 top-2 text-6xl leading-none text-gold-500/20"
                aria-hidden
              >
                &rdquo;
              </span>
              <span className="text-gold-500" aria-hidden>
                {"★★★★★"}
              </span>
              <blockquote className="mt-4 flex-1 leading-relaxed text-grey-700">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-grey-200 pt-4">
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-bold text-gold-400">
                    {displayName(t.author).charAt(0)}
                  </span>
                  <span className="font-semibold text-navy-900">
                    {displayName(t.author)}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-xs text-grey-500">
          Testimonials reflect the experience of individual clients. Prior
          results do not guarantee a similar outcome. Attorney advertising.
        </p>
      </section>

      <CtaBand heading="Let us be the firm you tell people about." />
    </>
  );
}
