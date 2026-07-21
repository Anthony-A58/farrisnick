import Image from "next/image";
import Link from "next/link";
import type { LocationEntry } from "@/lib/locations-data";
import { SITE } from "@/lib/site";
import { CtaBand, FaqBlock, PageHero, breadcrumbJsonLd, faqJsonLd } from "./shared";

const PRACTICE_LINKS = [
  { label: "DUI", href: "/dui/" },
  { label: "Domestic Violence", href: "/domestic-violence/" },
  { label: "Assault and Battery", href: "/assault/" },
  { label: "Aggravated Assault", href: "/aggravated-assault/" },
  { label: "Drug Offenses", href: "/drugs/" },
  { label: "Weapons Charges", href: "/guns/" },
  { label: "Theft", href: "/theft/" },
  { label: "Robbery", href: "/robbery/" },
  { label: "Sex Crimes", href: "/sex-crimes/" },
  { label: "Vandalism", href: "/vandalism/" },
  { label: "Bench Warrants", href: "/bench-warrants-failure-to-appear/" },
  { label: "Expungement", href: "/expungement/" },
  { label: "Military Diversion", href: "/military-diversion/" },
];

export default function LocationPage({ loc }: { loc: LocationEntry }) {
  const office =
    loc.county === "Orange County" ? SITE.offices[0] : SITE.offices[1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        name: `Farris Law Firm - ${loc.city} Criminal Defense`,
        url: `${SITE.url}/${loc.slug}/`,
        telephone: "+1-818-861-0861",
        areaServed: { "@type": "City", name: `${loc.city}, CA` },
        parentOrganization: { "@id": `${SITE.url}/#organization` },
        address: {
          "@type": "PostalAddress",
          streetAddress: office.street,
          addressLocality: office.city,
          addressRegion: office.state,
          postalCode: office.zip,
          addressCountry: "US",
        },
        hasMap: office.mapsUrl,
      },
      faqJsonLd(loc.faqs),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: `${loc.city} Criminal Defense Lawyer`, path: `/${loc.slug}/` },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        kicker={`${loc.county} Criminal Defense`}
        h1={loc.h1}
        sub="Free phone consultations 24/7/365. Payment plans available."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-6 lg:py-16">
        <div>
          {loc.intro.map((p) => (
            <p key={p.slice(0, 40)} className="mb-4 leading-relaxed text-grey-700">
              {p}
            </p>
          ))}
          <h2 className="font-display mt-8 text-2xl font-bold text-navy-900 lg:text-3xl">
            {loc.local.heading}
          </h2>
          {loc.local.body.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-grey-700">
              {p}
            </p>
          ))}
        </div>
        <aside>
          <Image
            src={loc.image}
            alt={`Criminal defense representation in ${loc.city}, California`}
            width={640}
            height={427}
            className="w-full rounded object-cover"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
          <div className="mt-6 rounded border-2 border-gold-500 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-grey-500">
              Your Courthouse
            </p>
            <h3 className="font-display mt-1 text-xl font-bold text-navy-900">
              {loc.courthouse.name}
            </h3>
            <p className="mt-1 text-sm text-grey-700">{loc.courthouse.address}</p>
            <p className="mt-3 text-sm leading-relaxed text-grey-500">
              {loc.courthouse.note}
            </p>
          </div>
          <div className="mt-6 rounded bg-navy-900 p-6 text-white">
            <h3 className="font-display text-lg font-bold">
              {office.label} Office
            </h3>
            <a
              href={office.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-grey-200/90 hover:text-gold-400"
            >
              {office.street}
              <br />
              {office.city}, {office.state} {office.zip}
            </a>
            <a
              href={SITE.phoneHref}
              className="mt-3 inline-block rounded bg-gold-500 px-4 py-2 text-sm font-bold text-navy-950 hover:bg-gold-400"
            >
              {SITE.phone}
            </a>
          </div>
        </aside>
      </section>

      <section className="bg-grey-100 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">
            Cases We Defend in {loc.city}
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {PRACTICE_LINKS.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="block rounded border border-grey-200 bg-white px-4 py-3 text-sm font-semibold text-navy-900 transition hover:border-gold-500"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqBlock heading={`${loc.city} Criminal Defense FAQs`} faqs={loc.faqs} />
      <CtaBand
        heading={`Facing charges in ${loc.city}? Talk to a defense attorney tonight.`}
      />
    </>
  );
}
