import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-black text-zinc-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 pb-24 sm:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:pb-14">
        <div>
          <span className="font-display text-2xl text-white">
            Farris<span className="text-yellow-500">.</span>
          </span>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            Criminal defense representation across Orange County, Los Angeles
            County, and the San Fernando Valley. Free phone consultations
            24/7/365. Payment plans available.
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-4 inline-block font-display text-2xl text-yellow-500 hover:text-yellow-300"
          >
            {SITE.phone}
          </a>
        </div>

        {SITE.offices.map((o) => (
          <div key={o.label}>
            <h3 className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-zinc-200">
              {o.label} Office
            </h3>
            <a
              href={o.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm leading-relaxed text-zinc-500 hover:text-yellow-500"
            >
              {o.street}
              <br />
              {o.city}, {o.state} {o.zip}
            </a>
            <p className="mt-2 text-sm text-zinc-500">
              Phone:{" "}
              <a href={SITE.phoneHref} className="text-yellow-500 hover:text-yellow-300">
                {SITE.phone}
              </a>
            </p>
          </div>
        ))}

        <div>
          <h3 className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-zinc-200">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-1.5 text-sm">
            {NAV.filter((n) => n.href !== "/").map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-zinc-500 hover:text-yellow-500">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy/" className="text-zinc-500 hover:text-yellow-500">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline px-4 py-5 text-center text-xs text-zinc-600">
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
