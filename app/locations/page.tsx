import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/lib/locations-data";
import { SITE } from "@/lib/site";
import { CtaBand, PageHero } from "@/components/templates/shared";

export const metadata: Metadata = {
  title: "Locations We Serve | Orange County & Los Angeles | Farris Law Firm",
  description:
    "Farris Law Firm defends criminal cases across Orange County, Los Angeles County, and the San Fernando Valley from offices in Aliso Viejo and Burbank.",
  alternates: { canonical: "/locations/" },
};

// Migrated WordPress city pages, grouped for the hub.
const LEGACY_LA = [
  { label: "Burbank", href: "/burbank-criminal-defense-lawyer/" },
  { label: "Van Nuys", href: "/van-nuys-criminal-defense-lawyer/" },
  { label: "Glendale", href: "/glendale-criminal-defense-attorney/" },
  { label: "San Fernando", href: "/san-fernando-criminal-defense-lawyer/" },
  { label: "Santa Clarita", href: "/santa-clarita-criminal-defense-lawyer/" },
  { label: "Pasadena", href: "/pasadena-criminal-defense-attorney/" },
  { label: "Alhambra", href: "/alhambra-criminal-defense-attorney/" },
  { label: "El Monte", href: "/el-monte-criminal-defense-lawyer/" },
  { label: "West Covina", href: "/west-covina-criminal-defense-lawyer/" },
  { label: "Lancaster", href: "/lancaster-criminal-defense-attorney/" },
  { label: "Ventura", href: "/ventura-criminal-defense-lawyer/" },
];

const COUNTY = [
  { label: "Orange County DUI", href: "/orange-county-dui-lawyer/" },
  { label: "Orange County Domestic Violence", href: "/orange-county-domestic-violence-lawyer/" },
  { label: "Orange County Gun Charges", href: "/orange-county-gun-charges-lawyer/" },
  { label: "Los Angeles DUI", href: "/los-angeles-dui-lawyer/" },
];

export default function LocationsPage() {
  const oc = LOCATIONS.filter((l) => l.county === "Orange County");
  const la = LOCATIONS.filter((l) => l.county === "Los Angeles County");

  const allItems = [
    ...COUNTY,
    ...oc.map((l) => ({ label: l.city, href: `/${l.slug}/` })),
    ...la.map((l) => ({ label: l.city, href: `/${l.slug}/` })),
    ...LEGACY_LA,
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/" },
        ].map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: SITE.url + it.path,
        })),
      },
      {
        "@type": "ItemList",
        name: "Locations Served",
        itemListElement: allItems.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.label,
          url: SITE.url + it.href,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        kicker="Southern California"
        h1="Locations We Serve"
        sub="Criminal defense across Orange County, Los Angeles County, and the San Fernando Valley from offices in Aliso Viejo and Burbank."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
        <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">
          County-Wide Defense
        </h2>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Orange County DUI", href: "/orange-county-dui-lawyer/" },
            { label: "Orange County Domestic Violence", href: "/orange-county-domestic-violence-lawyer/" },
            { label: "Orange County Gun Charges", href: "/orange-county-gun-charges-lawyer/" },
            { label: "Los Angeles DUI", href: "/los-angeles-dui-lawyer/" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded border-2 border-gold-500 bg-white px-4 py-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="font-display mt-12 text-2xl font-bold text-navy-900 lg:text-3xl">
          Orange County
        </h2>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {oc.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/${l.slug}/`}
                className="block rounded border border-grey-200 bg-white px-4 py-3 text-sm font-semibold text-navy-900 transition hover:border-gold-500"
              >
                {l.city}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="font-display mt-12 text-2xl font-bold text-navy-900 lg:text-3xl">
          Los Angeles County & Beyond
        </h2>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[...la.map((l) => ({ label: l.city, href: `/${l.slug}/` })), ...LEGACY_LA].map(
            (l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block rounded border border-grey-200 bg-white px-4 py-3 text-sm font-semibold text-navy-900 transition hover:border-gold-500"
                >
                  {l.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
      <CtaBand heading="Wherever your case is, we got you." />
    </>
  );
}
