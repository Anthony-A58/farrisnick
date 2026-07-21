import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { getPage } from "@/lib/content";
import {
  BADGES,
  FAQS,
  PRACTICE_AREAS,
  TESTIMONIALS,
  VICTORIES,
  WHY_CHOOSE,
} from "@/lib/home-data";
import { CALBAR, SITE } from "@/lib/site";

const page = getPage("/")!;

// Title and meta description stay identical to the WordPress baseline.
export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: "/" },
  openGraph: page.ogImage ? { images: [page.ogImage] } : undefined,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function PhoneCta({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={SITE.phoneHref}
        className="rounded bg-gold-500 px-6 py-3.5 font-bold text-navy-950 transition hover:bg-gold-400"
      >
        Call {SITE.phone}
      </a>
      <Link
        href="/contact/"
        className={
          dark
            ? "rounded border border-grey-200/40 px-6 py-3.5 font-semibold text-white transition hover:border-gold-400 hover:text-gold-400"
            : "rounded border border-navy-900/30 px-6 py-3.5 font-semibold text-navy-900 transition hover:border-navy-900 hover:bg-navy-900 hover:text-white"
        }
      >
        Free Case Review
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(27,58,102,0.55),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-6 lg:pb-0 lg:pt-16">
          <StaggerGroup>
            <StaggerItem>
              <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white lg:text-5xl xl:text-6xl">
                Criminal Defense Across{" "}
                <span className="text-gold-400">Orange County</span> and{" "}
                <span className="text-gold-400">Los Angeles County</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-grey-200/90">
                Talk to attorney Charles Farris tonight. Free phone
                consultations 24/7/365, payment plans available.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 pb-2 lg:pb-16">
                <PhoneCta dark />
              </div>
            </StaggerItem>
          </StaggerGroup>
          <Reveal delay={0.15} y={0} className="relative hidden self-end lg:block">
            {/* Soft glow so the cutout sits naturally on the navy */}
            <div
              className="pointer-events-none absolute inset-0 scale-110 bg-[radial-gradient(ellipse_at_center_bottom,rgba(240,179,35,0.14),rgba(27,58,102,0.35)_45%,transparent_72%)]"
              aria-hidden
            />
            <Image
              src="/images/charles-hero-cutout.webp"
              alt="Attorney Charles P. Farris of Farris Law Firm"
              width={895}
              height={775}
              priority
              className="relative z-10 w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
              sizes="(min-width: 1024px) 45vw, 1px"
            />
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-grey-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 py-6 lg:justify-between lg:px-6">
          <p className="text-sm font-semibold text-navy-900">
            <span className="text-gold-500" aria-hidden>
              ★★★★★
            </span>{" "}
            Rated 5.0 by clients on Google and Avvo
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {BADGES.map((b) => (
              <Image
                key={b.src}
                src={b.src}
                alt={b.alt}
                width={90}
                height={44}
                className="h-9 w-auto object-contain grayscale transition hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Victories marquee */}
      <section className="marquee overflow-hidden border-b border-grey-200 bg-grey-100 py-8">
        <h2 className="sr-only">Recent Victories</h2>
        <div className="marquee-track flex w-max gap-4 pr-4">
          {[...VICTORIES, ...VICTORIES].map((v, i) => (
            <Link
              href="/recent-victories/"
              key={`${v.case}-${i}`}
              aria-hidden={i >= VICTORIES.length}
              tabIndex={i >= VICTORIES.length ? -1 : undefined}
              className="w-80 shrink-0 rounded border border-grey-200 bg-white p-5 transition hover:border-gold-500"
            >
              <p className="font-display text-sm font-bold uppercase tracking-wide text-navy-900">
                {v.case}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-grey-700">
                {v.outcome}
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-5 text-center text-sm">
          <Link
            href="/recent-victories/"
            className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4 hover:text-navy-700"
          >
            See all recent victories
          </Link>
        </p>
      </section>

      {/* Intro: preserved SEO copy */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:px-6 lg:py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight text-navy-900 lg:text-4xl">
            Orange County and Los Angeles Criminal Defense Lawyers
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-grey-700">
            <p>
              If you are facing criminal charges, you need an experienced
              criminal defense lawyer who knows the local courts, prosecutors,
              and legal procedures. At Farris Law Firm, we provide aggressive,
              strategic defense representation to clients throughout Orange
              County and Los Angeles County, with offices in Aliso Viejo and
              Burbank so we are close to the courthouse wherever your case is
              heard.
            </p>
            <p>
              We are committed to protecting your rights, your record, and your
              future. During this experience with the criminal justice system,
              you need clear guidance, honest communication, and a defense
              strategy tailored to your specific case. That is what we deliver,
              every time.
            </p>
            <p>
              From investigation through trial, we stand by your side at every
              stage of the process, educating you about the system, addressing
              your concerns, and strategizing on your behalf.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full rounded border-2 border-gold-500" aria-hidden />
            <Image
              src="/wp-content/uploads/info-image-new.webp"
              alt="Criminal defense representation at every stage of the process"
              width={588}
              height={528}
              className="relative w-full rounded object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="mt-6 rounded bg-navy-900 p-6 text-white">
            <h3 className="font-display text-xl font-bold">
              About Our Orange County and Los Angeles Criminal Defense Lawyers
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-grey-200/90">
              Founded by Charles and his wife Beatrice in 2024, Farris Law Firm
              brings a refreshing approach to criminal law in Southern
              California. Having managed thousands of misdemeanor and felony
              cases at other leading firms, they built a firm around client
              education, concierge service, and supportive yet assertive
              advocacy, with an intentionally limited caseload.
            </p>
            <Link
              href="/about-us/"
              className="mt-4 inline-block text-sm font-semibold text-gold-400 hover:text-gold-500"
            >
              Meet Charles and Beatrice
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Practice areas bento */}
      <section className="bg-navy-950 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
              Are You Facing Criminal Charges?
            </h2>
            <p className="mt-3 max-w-2xl text-grey-200/80">
              Farris Law Firm can help. We defend the full range of criminal
              matters in Orange County, Los Angeles County, and the San
              Fernando Valley.
            </p>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRACTICE_AREAS.map((p) => (
              <StaggerItem
                key={p.href + p.title}
                className={
                  p.large ? "sm:col-span-2" : p.wide ? "lg:col-span-2" : ""
                }
              >
                <Link
                  href={p.href}
                  className="group flex h-full flex-col rounded border border-navy-700 bg-navy-900 p-6 transition hover:border-gold-500"
                >
                  {/* Icons ship with the old site's red baked in; invert to
                      white so gold stays the page's only accent. */}
                  <Image
                    src={p.icon}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 object-contain brightness-0 invert opacity-80"
                  />
                  <h3 className="font-display mt-4 text-lg font-bold text-white group-hover:text-gold-400">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey-200/70">
                    {p.blurb}
                  </p>
                  <span className="mt-auto pt-4 text-sm font-semibold text-gold-400">
                    Learn more
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-8 text-center">
            <Link
              href="/practice-areas/"
              className="font-semibold text-grey-200 underline decoration-gold-500 underline-offset-4 hover:text-gold-400"
            >
              All practice areas
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why choose: sticky heading + list */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-6 lg:py-24">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight text-navy-900 lg:text-4xl">
              Why Choose Our Criminal Defense Attorneys?
            </h2>
            <p className="mt-4 leading-relaxed text-grey-700">
              Our mission is to guide and support you, not intimidate. We are
              skilled at negotiating favorable plea deals and equally prepared
              to take your case to trial.
            </p>
            <div className="mt-6">
              <PhoneCta />
            </div>
          </Reveal>
        </div>
        <StaggerGroup className="space-y-6">
          {WHY_CHOOSE.map((w) => (
            <StaggerItem key={w.title}>
              <div className="rounded border border-grey-200 bg-white p-6 transition hover:border-gold-500">
                <h3 className="font-display text-xl font-bold text-navy-900">
                  {w.title}
                </h3>
                <p className="mt-2 leading-relaxed text-grey-700">{w.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Consult band */}
      <section className="bg-gold-500">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-3 lg:px-6">
          {[
            {
              n: "1",
              t: "Call any hour, any day",
              d: "Free, confidential phone consultation, 24/7/365. Arrested at 2am? We answer.",
            },
            {
              n: "2",
              t: "Get an honest assessment",
              d: "Clear answers about your charge, your options, and what happens next. If we cannot help, we say so.",
            },
            {
              n: "3",
              t: "Fees that work for you",
              d: "Flat fee quote up front, with payment plans available. No surprises.",
            },
          ].map((s) => (
            <Reveal key={s.n}>
              <div className="flex gap-4">
                <span className="font-display text-5xl font-bold text-navy-950/25">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-950">
                    {s.t}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-950/80">
                    {s.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-grey-100 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-navy-900 lg:text-4xl">
              What Our Clients Say
            </h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <StaggerItem key={t.author} className={i === 1 ? "md:mt-8" : ""}>
                <figure className="flex h-full flex-col rounded border border-grey-200 bg-white p-6">
                  <span className="text-gold-500" aria-hidden>
                    ★★★★★
                  </span>
                  <blockquote className="mt-3 flex-1 leading-relaxed text-grey-700">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 border-t border-grey-200 pt-3">
                    <span className="font-semibold text-navy-900">
                      {t.author}
                    </span>
                    <span className="block text-sm text-grey-500">
                      {t.caseType}
                    </span>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-8">
            <Link
              href="/about/reviews/"
              className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4 hover:text-navy-700"
            >
              Read more client reviews
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-6 lg:py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-navy-900 lg:text-4xl">
            Get Real Answers from an Orange County and Los Angeles Criminal Defense Lawyer
          </h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {FAQS.map((f) => (
            <Reveal key={f.q}>
              <details className="group rounded border border-grey-200 bg-white open:border-gold-500">
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* Offices */}
      <section className="border-t border-grey-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-navy-900">
              Two Offices, One Standard of Defense
            </h2>
            <p className="mt-3 max-w-2xl text-grey-700">
              Serving Orange County, Los Angeles County, and the San Fernando
              Valley from offices in Aliso Viejo and Burbank.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {SITE.offices.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.1}>
                <div className="overflow-hidden rounded border border-grey-200">
                  <iframe
                    src={o.mapsEmbed}
                    title={`Map of the Farris Law Firm ${o.label} office`}
                    className="h-56 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-navy-900">
                      {o.label} Office
                    </h3>
                    <a
                      href={o.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block text-grey-700 hover:text-navy-900"
                    >
                      {o.street}
                      <br />
                      {o.city}, {o.state} {o.zip}
                    </a>
                    <p className="mt-2 text-sm text-grey-500">
                      {o.label === "Orange County"
                        ? "Minutes from Harbor Justice Center, within reach of all four OC criminal courthouses."
                        : "Serving Burbank, Glendale, Van Nuys, and the greater San Fernando Valley."}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                      <a
                        href={SITE.phoneHref}
                        className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4"
                      >
                        {SITE.phone}
                      </a>
                      <a
                        href={o.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-950 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center lg:px-6">
          <Reveal>
            <h2 className="font-display mx-auto max-w-3xl text-3xl font-bold leading-tight lg:text-4xl">
              We got you. Talk to a defense attorney tonight.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-grey-200/80">
              Free, confidential phone consultation any hour, any day. Payment
              plans available.
            </p>
            <div className="mt-8 flex justify-center">
              <PhoneCta dark />
            </div>
          </Reveal>
        </div>
      </section>

      {/* State Bar verification */}
      <section className="border-t border-navy-800 bg-navy-950 py-6">
        <a
          href={CALBAR.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 text-center lg:px-6"
        >
          <Image
            src="/wp-content/uploads/california-bar.png"
            alt="State Bar of California"
            width={72}
            height={72}
            className="h-14 w-auto object-contain brightness-0 invert opacity-80"
          />
          <span className="text-sm text-grey-200/70">
            Charles P. Farris is licensed by the State Bar of California,
            License #{CALBAR.number}.{" "}
            <span className="font-semibold text-gold-400 underline decoration-gold-500 underline-offset-4">
              Verify at calbar.ca.gov
            </span>
          </span>
        </a>
      </section>
    </>
  );
}
