import Link from "next/link";
import { SITE } from "@/lib/site";
import { CtaBand } from "./shared";

// Grouped practice-area index. Mixes migrated pages and new pages into a
// single organized hub. H1 stays "Practice Areas" to preserve SEO parity.
const GROUPS: { heading: string; items: { label: string; href: string }[] }[] = [
  {
    heading: "DUI and Driving",
    items: [
      { label: "DUI Defense", href: "/dui/" },
      { label: "Orange County DUI", href: "/orange-county-dui-lawyer/" },
      { label: "Los Angeles DUI", href: "/los-angeles-dui-lawyer/" },
      { label: "Traffic Offenses", href: "/traffic-offenses/" },
      { label: "Hit and Run", href: "/hit-and-run/" },
      { label: "Drunk in Public", href: "/drunk-in-public/" },
    ],
  },
  {
    heading: "Violent Crimes",
    items: [
      { label: "Assault and Battery", href: "/assault/" },
      { label: "Aggravated Assault", href: "/aggravated-assault/" },
      { label: "Domestic Violence", href: "/domestic-violence/" },
      { label: "Orange County Domestic Violence", href: "/orange-county-domestic-violence-lawyer/" },
      { label: "Criminal Threats", href: "/criminal-threats/" },
      { label: "Robbery", href: "/robbery/" },
    ],
  },
  {
    heading: "Theft and Property Crimes",
    items: [
      { label: "Theft Crimes", href: "/theft/" },
      { label: "Shoplifting and Petty Theft", href: "/shoplifting/" },
      { label: "Burglary", href: "/burglary/" },
      { label: "Receiving Stolen Property", href: "/receiving-stolen-property/" },
      { label: "Vandalism", href: "/vandalism/" },
    ],
  },
  {
    heading: "Drug and Weapons Charges",
    items: [
      { label: "Drug Offenses", href: "/drugs/" },
      { label: "Weapons Charges", href: "/guns/" },
      { label: "Orange County Gun Charges", href: "/orange-county-gun-charges-lawyer/" },
    ],
  },
  {
    heading: "White Collar and Fraud",
    items: [
      { label: "White Collar Crimes", href: "/white-collar-crimes/" },
      { label: "Embezzlement", href: "/embezzlement/" },
      { label: "Identity Theft", href: "/identity-theft/" },
      { label: "Credit Card Fraud", href: "/credit-card-fraud/" },
      { label: "Forgery", href: "/forgery/" },
      { label: "Extortion", href: "/extortion/" },
    ],
  },
  {
    heading: "Sensitive and Serious Matters",
    items: [
      { label: "Sex Crimes", href: "/sex-crimes/" },
      { label: "Juvenile Defense", href: "/juvenile-defense/" },
    ],
  },
  {
    heading: "Warrants, Diversion, and Records",
    items: [
      { label: "Bench Warrants", href: "/bench-warrants-failure-to-appear/" },
      { label: "Probation Violations", href: "/probation-violations/" },
      { label: "Military and Judicial Diversion", href: "/military-diversion/" },
      { label: "Expungement", href: "/expungement/" },
    ],
  },
];

export default function PracticeHub() {
  const items = GROUPS.flatMap((g) => g.items);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { name: "Home", path: "/" },
          { name: "Practice Areas", path: "/practice-areas/" },
        ].map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: SITE.url + it.path,
        })),
      },
      {
        "@type": "ItemList",
        name: "Criminal Defense Practice Areas",
        itemListElement: items.map((it, i) => ({
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
      <div className="relative overflow-hidden border-b border-hairline bg-black py-14 text-white lg:py-20">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="cutout max-w-4xl text-4xl lg:text-6xl">
            Practice Areas
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Farris Law Firm defends the full range of criminal matters across
            Orange County, Los Angeles County, and the San Fernando Valley. Free
            phone consultations 24/7/365, payment plans available.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {GROUPS.map((g) => (
            <div key={g.heading}>
              <h2 className="font-display border-b border-hairline pb-2 text-xl text-white">
                {g.heading}
              </h2>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="group flex items-center gap-2 text-zinc-400 transition hover:text-white"
                    >
                      <span className="text-yellow-500" aria-hidden>
                        &rsaquo;
                      </span>
                      <span className="underline decoration-transparent underline-offset-4 transition group-hover:decoration-yellow-500">
                        {it.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <CtaBand heading="Not sure which category fits your case? Just call and ask." />
    </>
  );
}
