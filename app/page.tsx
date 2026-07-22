import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VideoText from "@/components/VideoText";
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

function PhoneCta() {
  return (
    <div className="flex flex-wrap items-center gap-3">
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
      <section className="relative overflow-hidden bg-black text-white">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-0 lg:pt-20">
          <StaggerGroup>
            <StaggerItem>
              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.28em] text-yellow-500">
                Orange County · Los Angeles Criminal Defense
              </p>
            </StaggerItem>
            <StaggerItem>
              {/* Keyword-rich H1 stays for SEO but is visually hidden; the big
                  cutout is decorative art (matches the original design). */}
              <h1 className="sr-only">
                Criminal Defense Across Orange County and Los Angeles County
              </h1>
              <VideoText
                as="p"
                aria-hidden
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-[170px]"
                text="Criminal Defense"
              />
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 max-w-xl text-xl font-semibold leading-relaxed text-white">
                Talk to attorney Charles Farris tonight. Free phone
                consultations 24/7/365, payment plans available.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 pb-2 lg:pb-16">
                <PhoneCta />
              </div>
            </StaggerItem>
          </StaggerGroup>
          <Reveal delay={0.15} y={0} className="relative hidden self-end lg:block">
            {/* Yellow glow so the cutout sits naturally on the black */}
            <div
              className="pointer-events-none absolute inset-0 scale-110 bg-[radial-gradient(ellipse_at_center_bottom,rgba(234,179,8,0.16),rgba(20,20,20,0.5)_45%,transparent_72%)]"
              aria-hidden
            />
            <Image
              src="/images/charles-hero-cutout.webp"
              alt="Attorney Charles P. Farris of Farris Law Firm"
              width={895}
              height={775}
              priority
              className="relative z-10 w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.65)]"
              sizes="(min-width: 1024px) 45vw, 1px"
            />
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-yellow-500">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {[
            { b: "24/7", s: "Free Phone Consultations" },
            { b: "$0", s: "Consultation Fee" },
            { b: "2", s: "Offices · OC + LA" },
            { b: "5.0", s: "Rated on Google and Avvo" },
          ].map((t) => (
            <div
              key={t.s}
              className="border-b border-r border-black/10 px-8 py-7 last:border-r-0 lg:border-b-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r"
            >
              <b className="font-display block text-4xl leading-none text-night lg:text-5xl">
                {t.b}
              </b>
              <small className="text-[13px] font-bold uppercase tracking-[0.06em] text-night/70">
                {t.s}
              </small>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials: full-color certificate logos on uniform white cards */}
      <section className="border-b border-hairline bg-night">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <p className="text-center text-sm font-semibold text-zinc-400">
            <span className="text-yellow-500" aria-hidden>
              ★★★★★
            </span>{" "}
            Rated 5.0 by clients on Google and Avvo
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {BADGES.map((b) => (
              <span
                key={b.src}
                className="flex h-20 w-32 items-center justify-center rounded-xl bg-white px-4 py-3 shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
              >
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={160}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Victories marquee */}
      <section className="marquee overflow-hidden border-b border-hairline bg-coal-deep py-8">
        <h2 className="sr-only">Recent Victories</h2>
        <div className="marquee-track flex w-max gap-4 pr-4">
          {[...VICTORIES, ...VICTORIES].map((v, i) => (
            <Link
              href="/recent-victories/"
              key={`${v.case}-${i}`}
              aria-hidden={i >= VICTORIES.length}
              tabIndex={i >= VICTORIES.length ? -1 : undefined}
              className="w-80 shrink-0 border border-neutral-800 border-t-2 border-t-yellow-500 bg-coal p-5 transition hover:border-yellow-500"
            >
              <p className="font-display text-sm tracking-wide text-yellow-500">
                {v.case}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-zinc-300">
                {v.outcome}
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-5 text-center text-sm">
          <Link
            href="/recent-victories/"
            className="font-semibold text-zinc-200 underline decoration-yellow-500 underline-offset-4 hover:text-yellow-500"
          >
            See all recent victories
          </Link>
        </p>
      </section>

      {/* Intro: preserved SEO copy, centered over a shadowy LA skyline */}
      <section className="relative overflow-hidden border-y border-hairline bg-night py-16 lg:py-24">
        {/* Faded, dark skyline behind the copy */}
        <Image
          src="/wp-content/uploads/pexels-badun-17445604.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="pointer-events-none object-cover opacity-80"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.72),rgba(10,10,10,0.42)_45%,rgba(10,10,10,0.82))]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center [text-shadow:0_2px_12px_rgba(0,0,0,0.75)] lg:px-8">
          <Reveal>
            <h2 className="font-display text-[2.75rem] leading-[0.95] text-white sm:text-[3.25rem] lg:text-[4.25rem]">
              Orange County and Los Angeles Criminal Defense Lawyers
            </h2>
            <div className="mx-auto mt-8 max-w-4xl space-y-5 text-xl leading-relaxed text-zinc-200">
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
                We are committed to protecting your rights, your record, and
                your future. During this experience with the criminal justice
                system, you need clear guidance, honest communication, and a
                defense strategy tailored to your specific case. That is what we
                deliver, every time.
              </p>
              <p>
                From investigation through trial, we stand by your side at every
                stage of the process, educating you about the system, addressing
                your concerns, and strategizing on your behalf.
              </p>
            </div>
          </Reveal>
          <Reveal
            delay={0.1}
            className="mx-auto mt-12 max-w-3xl border-t border-white/15 pt-10"
          >
            <h3 className="font-display text-[1.75rem] text-white lg:text-[2.25rem]">
              About Our Orange County and Los Angeles Criminal Defense Lawyers
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-200">
              Founded by Charles and his wife Beatrice in 2024, Farris Law Firm
              brings a refreshing approach to criminal law in Southern
              California. Having managed thousands of misdemeanor and felony
              cases at other leading firms, they built a firm around client
              education, concierge service, and supportive yet assertive
              advocacy, with an intentionally limited caseload.
            </p>
            <Link
              href="/about-us/"
              className="mt-5 inline-block font-bold uppercase tracking-[0.04em] text-yellow-500 hover:text-yellow-300"
            >
              Meet Charles and Beatrice →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Practice areas: uniform media cards */}
      <section className="border-y border-hairline bg-black py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="font-display text-4xl leading-[0.95] text-white lg:text-5xl">
              Are You Facing Criminal Charges?
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Farris Law Firm can help. We defend the full range of criminal
              matters in Orange County, Los Angeles County, and the San
              Fernando Valley.
            </p>
          </Reveal>
          {/* Uniform, equal-size cards; each has a media slot for a video or
              image, matching the original design. */}
          <StaggerGroup className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((p) => (
              <StaggerItem key={p.href + p.title}>
                <Link
                  href={p.href}
                  className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden border border-neutral-800 bg-coal p-7 transition hover:-translate-y-1 hover:border-yellow-500"
                >
                  {/* Media slot: a video or image drops in here later */}
                  <span
                    className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#1c1c1c,#1c1c1c_14px,#232323_14px,#232323_28px)]"
                    aria-hidden
                  />
                  {/* Bottom fade so the label reads over the media */}
                  <span
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0)_35%,rgba(10,10,10,0.92))]"
                    aria-hidden
                  />
                  <span className="relative z-[1]">
                    <span className="flex items-center gap-3">
                      <span className="flex h-13 w-13 shrink-0 items-center justify-center bg-yellow-500 p-2.5">
                        {/* Icons ship with the old site's red baked in; force to
                            solid black so they sit on the yellow tag. */}
                        <Image
                          src={p.icon}
                          alt=""
                          width={44}
                          height={44}
                          className="h-7 w-7 object-contain brightness-0"
                        />
                      </span>
                      <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-yellow-500">
                        Video / Image · {p.abbr}
                      </span>
                    </span>
                    <h3 className="mt-4 text-2xl font-extrabold uppercase leading-tight text-white group-hover:text-yellow-500">
                      {p.title}
                    </h3>
                    <span className="mt-3 inline-block text-sm font-bold uppercase tracking-[0.04em] text-yellow-500">
                      Explore Defense →
                    </span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-8 text-center">
            <Link
              href="/practice-areas/"
              className="font-semibold text-zinc-200 underline decoration-yellow-500 underline-offset-4 hover:text-yellow-500"
            >
              All practice areas
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why choose: sticky heading + list */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <h2 className="font-display text-4xl leading-[0.95] text-white lg:text-5xl">
              The Difference That Wins Cases
            </h2>
            <p className="mt-5 leading-relaxed text-zinc-400">
              Our mission is to guide and support you, not intimidate. We are
              skilled at negotiating favorable plea deals and equally prepared
              to take your case to trial.
            </p>
            <div className="mt-6">
              <PhoneCta />
            </div>
          </Reveal>
        </div>
        <StaggerGroup className="space-y-4">
          {WHY_CHOOSE.map((w, i) => (
            <StaggerItem key={w.title}>
              <div className="flex gap-6 border border-neutral-800 border-t-2 border-t-yellow-500 bg-coal-deep p-6 transition hover:border-yellow-500">
                <span className="font-display text-3xl text-yellow-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    {w.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-400">{w.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Consult band */}
      <section className="bg-yellow-500">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-3 lg:px-8">
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
                <span className="font-display text-6xl leading-none text-night/20">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-xl text-night">{s.t}</h3>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-night/80">
                    {s.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-night py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="font-display text-4xl leading-[0.95] text-white lg:text-5xl">
              The Verdict Is In
            </h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <StaggerItem key={t.author} className={i === 1 ? "md:mt-8" : ""}>
                <figure className="flex h-full flex-col border border-neutral-800 border-t-2 border-t-yellow-500 bg-coal-deep p-7">
                  <span
                    className="text-xl tracking-[2px] text-yellow-500"
                    aria-hidden
                  >
                    ★★★★★
                  </span>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-zinc-200">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 border-t border-hairline pt-4">
                    <span className="font-extrabold text-white">
                      {t.author}
                    </span>
                    <span className="block text-[13px] font-semibold uppercase tracking-[0.04em] text-zinc-500">
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
              className="font-semibold text-zinc-200 underline decoration-yellow-500 underline-offset-4 hover:text-yellow-500"
            >
              Read more client reviews
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="font-display text-3xl leading-[0.98] text-white lg:text-4xl">
            Get Real Answers from an Orange County and Los Angeles Criminal
            Defense Lawyer
          </h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {FAQS.map((f) => (
            <Reveal key={f.q}>
              <details className="group border border-neutral-800 border-l-4 border-l-yellow-500 bg-coal">
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* Offices */}
      <section className="border-t border-hairline bg-coal-deep py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="font-display text-4xl leading-[0.95] text-white">
              Two Offices, One Standard of Defense
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Serving Orange County, Los Angeles County, and the San Fernando
              Valley from offices in Aliso Viejo and Burbank.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {SITE.offices.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.1}>
                <div className="overflow-hidden border border-neutral-800 bg-coal">
                  <iframe
                    src={o.mapsEmbed}
                    title={`Map of the Farris Law Firm ${o.label} office`}
                    className="h-56 w-full border-0 grayscale"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="p-6">
                    <h3 className="font-display text-xl text-white">
                      {o.label} Office
                    </h3>
                    <a
                      href={o.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block text-zinc-400 hover:text-white"
                    >
                      {o.street}
                      <br />
                      {o.city}, {o.state} {o.zip}
                    </a>
                    <p className="mt-2 text-sm text-zinc-500">
                      {o.label === "Orange County"
                        ? "Minutes from Harbor Justice Center, within reach of all four OC criminal courthouses."
                        : "Serving Burbank, Glendale, Van Nuys, and the greater San Fernando Valley."}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                      <a
                        href={SITE.phoneHref}
                        className="font-semibold text-zinc-200 underline decoration-yellow-500 underline-offset-4 hover:text-yellow-500"
                      >
                        {SITE.phone}
                      </a>
                      <a
                        href={o.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-zinc-200 underline decoration-yellow-500 underline-offset-4 hover:text-yellow-500"
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
      <section className="relative overflow-hidden border-t border-hairline bg-black py-16 text-white lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <Reveal>
            <VideoText
              as="p"
              className="text-6xl sm:text-7xl lg:text-8xl"
              text="We Got You"
              aria-hidden
            />
            <h2 className="mx-auto mt-6 max-w-3xl text-xl font-extrabold text-white lg:text-2xl">
              Talk to a defense attorney tonight.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-zinc-400">
              Free, confidential phone consultation any hour, any day. Payment
              plans available.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={SITE.phoneHref}
                className="bg-yellow-500 px-10 py-5 font-display text-2xl text-night transition hover:bg-yellow-300"
              >
                {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* State Bar verification */}
      <section className="border-t border-hairline bg-black py-6">
        <a
          href={CALBAR.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 text-center lg:px-8"
        >
          <Image
            src="/wp-content/uploads/california-bar.png"
            alt="State Bar of California"
            width={72}
            height={72}
            className="h-14 w-auto object-contain brightness-0 invert opacity-60"
          />
          <span className="text-sm text-zinc-500">
            Charles P. Farris is licensed by the State Bar of California,
            License #{CALBAR.number}.{" "}
            <span className="font-semibold text-yellow-500 underline decoration-yellow-500 underline-offset-4">
              Verify at calbar.ca.gov
            </span>
          </span>
        </a>
      </section>
    </>
  );
}
