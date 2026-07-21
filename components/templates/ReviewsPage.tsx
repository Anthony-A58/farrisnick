import Image from "next/image";
import Link from "next/link";
import { REVIEWS, REVIEW_COUNT } from "@/lib/reviews-data";
import { SITE } from "@/lib/site";
import { CtaBand } from "./shared";

const GOOGLE_REVIEWS_URL = "https://maps.google.com/?cid=4157033397039245050";

function Stars({ n }: { n: number }) {
  return (
    <span className="text-yellow-500" aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}
    </span>
  );
}

export default function ReviewsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${SITE.url}/#organization`,
    name: "Farris Law Firm",
    url: `${SITE.url}/about/reviews/`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: String(REVIEW_COUNT),
      bestRating: "5",
    },
    review: REVIEWS.slice(0, 12).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.stars),
        bestRating: "5",
      },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header with rating summary. H1 stays "Reviews" for SEO parity. */}
      <div className="relative overflow-hidden border-b border-hairline bg-black py-12 text-white lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="cutout max-w-4xl text-4xl lg:text-6xl">
                Reviews
              </h1>
              <p className="mt-4 max-w-xl text-zinc-300">
                Real words from real clients across Orange County, Los Angeles,
                and the San Fernando Valley. We are honored by the trust they
                have placed in us.
              </p>
              <Link
                href="/about/testimonials/"
                className="mt-4 inline-block text-sm font-semibold text-yellow-500 underline decoration-yellow-500 underline-offset-4 hover:text-yellow-300"
              >
                Read longer client testimonials
              </Link>
            </div>
            <div className="shrink-0 border border-neutral-800 border-t-2 border-t-yellow-500 bg-coal-deep p-6 text-center">
              <div className="font-display text-5xl text-yellow-500">
                5.0
              </div>
              <div className="mt-1 text-xl tracking-[2px] text-yellow-500" aria-hidden>
                {"★★★★★"}
              </div>
              <p className="mt-2 text-sm text-zinc-400">
                {REVIEW_COUNT} five-star reviews
              </p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-yellow-500 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.03em] text-night transition hover:bg-yellow-300"
              >
                Read them on Google
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-hairline pt-6">
            {[
              { src: "/wp-content/uploads/california-bar.png", alt: "State Bar of California" },
              { src: "/wp-content/uploads/google-screened.png", alt: "Google Screened" },
              { src: "/wp-content/uploads/san-fernand-valley-bar.png", alt: "San Fernando Valley Bar Association" },
              { src: "/wp-content/uploads/provisors.png", alt: "ProVisors" },
            ].map((b) => (
              <Image
                key={b.src}
                src={b.src}
                alt={b.alt}
                width={90}
                height={44}
                className="h-9 w-auto object-contain brightness-0 invert opacity-50 transition hover:opacity-90"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Masonry grid of review cards */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="[column-gap:1.5rem] sm:columns-2 lg:columns-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.author + r.when}
              className="mb-6 break-inside-avoid border border-neutral-800 border-t-2 border-t-yellow-500 bg-coal-deep p-6"
            >
              <div className="flex items-center justify-between">
                <Stars n={r.stars} />
                <span className="text-xs text-zinc-500">{r.when}</span>
              </div>
              <blockquote className="mt-3 leading-relaxed text-zinc-200">
                {r.text}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-hairline pt-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-800 bg-coal text-sm font-bold text-yellow-500">
                  {r.author.trim().charAt(0).toUpperCase()}
                </span>
                <span className="font-extrabold text-white">{r.author}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          Reviews are the words of individual clients. Prior results do not
          guarantee a similar outcome. Attorney advertising.
        </p>
      </section>

      <CtaBand heading="Ready to talk to the firm these clients trust?" />
    </>
  );
}
