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
    <div className="relative overflow-hidden border-b border-hairline bg-black py-14 text-white lg:py-20">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {kicker && (
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-yellow-500">
            {kicker}
          </p>
        )}
        <h1 className="cutout max-w-4xl text-4xl lg:text-6xl">{h1}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
          {sub}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="bg-yellow-500 px-6 py-3.5 font-extrabold uppercase tracking-[0.03em] text-night transition hover:bg-yellow-300"
          >
            Call {SITE.phone}
          </a>
          <Link
            href="/contact/"
            className="border-2 border-zinc-600 px-6 py-3 font-bold uppercase tracking-[0.03em] text-white transition hover:border-yellow-500 hover:text-yellow-500"
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
    <section className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      <h2 className="font-display text-3xl text-white lg:text-4xl">
        {heading}
      </h2>
      <div className="mt-6 space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group border border-neutral-800 border-l-4 border-l-yellow-500 bg-coal"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-extrabold text-white [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                className="font-display text-2xl text-yellow-500 transition-transform group-open:rotate-45"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-zinc-400">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({ heading }: { heading: string }) {
  return (
    <section className="border-t border-hairline bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="cutout mx-auto max-w-3xl text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-zinc-300">
          Free, confidential phone consultation any hour, any day. Payment
          plans available.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={SITE.phoneHref}
            className="bg-yellow-500 px-6 py-3.5 font-display text-xl text-night transition hover:bg-yellow-300"
          >
            Call {SITE.phone}
          </a>
          <Link
            href="/contact/"
            className="border-2 border-zinc-600 px-6 py-3.5 font-bold uppercase tracking-[0.03em] text-white transition hover:border-yellow-500 hover:text-yellow-500"
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
