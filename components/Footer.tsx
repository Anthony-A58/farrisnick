import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-grey-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 pb-24 sm:grid-cols-2 lg:grid-cols-4 lg:px-6 lg:pb-14">
        <div>
          <span className="font-display text-xl font-bold text-white">
            Farris <span className="text-gold-500">Law Firm</span>
          </span>
          <p className="mt-3 text-sm leading-relaxed text-grey-200/80">
            Criminal defense representation across Orange County, Los Angeles
            County, and the San Fernando Valley. Free phone consultations
            24/7/365. Payment plans available.
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-4 inline-block rounded bg-gold-500 px-4 py-2 font-bold text-navy-950 hover:bg-gold-400"
          >
            {SITE.phone}
          </a>
        </div>

        {SITE.offices.map((o) => (
          <div key={o.label}>
            <h3 className="font-display text-lg font-semibold text-white">
              {o.label} Office
            </h3>
            <a
              href={o.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-sm leading-relaxed text-grey-200/80 hover:text-gold-400"
            >
              {o.street}
              <br />
              {o.city}, {o.state} {o.zip}
            </a>
            <p className="mt-2 text-sm text-grey-200/80">
              Phone: <a href={SITE.phoneHref} className="text-gold-400">{SITE.phone}</a>
            </p>
          </div>
        ))}

        <div>
          <h3 className="font-display text-lg font-semibold text-white">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm">
            {NAV.filter((n) => n.href !== "/").map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-grey-200/80 hover:text-gold-400">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy/" className="text-grey-200/80 hover:text-gold-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800 px-4 py-5 text-center text-xs text-grey-200/60">
        <p>
          © {new Date().getFullYear()} Farris Law Firm. All rights reserved.
          Attorney Advertising. Prior results do not guarantee a similar
          outcome. This website is for informational purposes only and does not
          constitute legal advice.
        </p>
      </div>
    </footer>
  );
}
