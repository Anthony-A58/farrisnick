import Image from "next/image";
import Link from "next/link";
import { REVIEWS, REVIEW_COUNT } from "@/lib/reviews-data";
import { SITE } from "@/lib/site";
import { CtaBand } from "./shared";

const GOOGLE_REVIEWS_URL = "https://maps.google.com/?cid=4157033397039245050";

function Stars({ n }: { n: number }) {
  return (
    <span className="text-gold-500" aria-label={`${n} out of 5 stars`}>
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
      <div className="relative overflow-hidden bg-navy-950 py-12 text-white lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(27,58,102,0.55),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold leading-tight lg:text-5xl">
                Reviews
              </h1>
              <p className="mt-4 max-w-xl text-grey-200/90">
                Real words from real clients across Orange County, Los Angeles,
                and the San Fernando Valley. We are honored by the trust they
                have placed in us.
              </p>
              <Link
                href="/about/testimonials/"
                className="mt-4 inline-block text-sm font-semibold text-gold-400 underline decoration-gold-500 underline-offset-4 hover:text-gold-500"
              >
                Read longer client testimonials
              </Link>
            </div>
            <div className="shrink-0 rounded border border-navy-700 bg-navy-900/60 p-6 text-center">
              <div className="font-display text-5xl font-bold text-gold-400">
                5.0
              </div>
              <div className="mt-1 text-xl tracking-widest text-gold-500" aria-hidden>
                {"★★★★★"}
              </div>
              <p className="mt-2 text-sm text-grey-200/80">
                {REVIEW_COUNT} five-star reviews
              </p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded bg-gold-500 px-4 py-2 text-sm font-bold text-navy-950 transition hover:bg-gold-400"
              >
                Read them on Google
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-navy-800 pt-6">
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
                className="h-9 w-auto object-contain opacity-80 brightness-0 invert"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Masonry grid of review cards */}
      <section className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="[column-gap:1.5rem] sm:columns-2 lg:columns-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.author + r.when}
              className="mb-6 break-inside-avoid rounded border border-grey-200 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <Stars n={r.stars} />
                <span className="text-xs text-grey-500">{r.when}</span>
              </div>
              <blockquote className="mt-3 leading-relaxed text-grey-700">
                {r.text}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-grey-200 pt-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-gold-400">
                  {r.author.trim().charAt(0).toUpperCase()}
                </span>
                <span className="font-semibold text-navy-900">{r.author}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-xs text-grey-500">
          Reviews are the words of individual clients. Prior results do not
          guarantee a similar outcome. Attorney advertising.
        </p>
      </section>

      <CtaBand heading="Ready to talk to the firm these clients trust?" />
    </>
  );
}
