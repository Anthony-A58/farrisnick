import Link from "next/link";
import { SITE } from "@/lib/site";

export function PageHero({
  h1,
  kicker,
  sub,
}: {
  h1: string;
  kicker?: string;
  sub: string;
}) {
  return (
    <div className="relative overflow-hidden bg-navy-950 py-12 text-white lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(27,58,102,0.55),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        {kicker && (
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold-400">
            {kicker}
          </p>
        )}
        <h1 className="font-display mt-2 max-w-3xl text-3xl font-bold leading-tight lg:text-5xl">
          {h1}
        </h1>
        <p className="mt-4 max-w-2xl text-grey-200/90">{sub}</p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="rounded bg-gold-500 px-6 py-3.5 font-bold text-navy-950 transition hover:bg-gold-400"
          >
            Call {SITE.phone}
          </a>
          <Link
            href="/contact/"
            className="rounded border border-grey-200/40 px-6 py-3.5 font-semibold text-white transition hover:border-gold-400 hover:text-gold-400"
          >
            Free Case Review
          </Link>
        </div>
      </div>
    </div>
  );
}

export function FaqBlock({
  heading,
  faqs,
}: {
  heading: string;
  faqs: { q: string; a: string }[];
}) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 lg:px-6 lg:py-16">
      <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">
        {heading}
      </h2>
      <div className="mt-6 space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded border border-grey-200 bg-white open:border-gold-500"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                className="text-gold-500 transition-transform group-open:rotate-45"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-grey-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({ heading }: { heading: string }) {
  return (
    <section className="bg-navy-950 py-14 text-white">
      <div className="mx-auto max-w-6xl px-4 text-center lg:px-6">
        <h2 className="font-display mx-auto max-w-3xl text-2xl font-bold leading-tight lg:text-3xl">
          {heading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-grey-200/80">
          Free, confidential phone consultation any hour, any day. Payment
          plans available.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <a
            href={SITE.phoneHref}
            className="rounded bg-gold-500 px-6 py-3.5 font-bold text-navy-950 transition hover:bg-gold-400"
          >
            Call {SITE.phone}
          </a>
          <Link
            href="/contact/"
            className="rounded border border-grey-200/40 px-6 py-3.5 font-semibold text-white transition hover:border-gold-400 hover:text-gold-400"
          >
            Free Case Review
          </Link>
        </div>
      </div>
    </section>
  );
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: SITE.url + it.path,
    })),
  };
}
