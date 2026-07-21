import { CtaBand } from "@/components/templates/shared";
import { SITE } from "@/lib/site";

// The migrated WordPress contact body was theme scaffolding (FontAwesome
// icons, lazy-load map <object>s) that does not survive extraction, so this
// template rebuilds the page from SITE data. H1, title, and meta description
// keep WordPress parity via content/contact.json.
const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/FarrisLawFirm" },
  { label: "Twitter / X", href: "https://twitter.com/farrislawfirm" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/farris-firm/" },
];

export default function ContactPage() {
  return (
    <>
      <div className="relative overflow-hidden border-b border-hairline bg-black py-14 text-white lg:py-20">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-yellow-500">
            Free Consultation · 24/7
          </p>
          <h1 className="cutout max-w-4xl text-5xl lg:text-7xl">Contact</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            To get in touch, please call our office or complete our contact
            form.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={SITE.phoneHref}
              className="bg-yellow-500 px-8 py-4 font-display text-2xl text-night transition hover:bg-yellow-300"
            >
              {SITE.phone}
            </a>
            <span className="text-sm text-zinc-400">
              Free phone consultations 24/7/365.
              <br />
              Payment plans available.
            </span>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {SITE.offices.map((o) => (
            <div
              key={o.label}
              className="overflow-hidden border border-neutral-800 border-t-2 border-t-yellow-500 bg-coal"
            >
              <iframe
                src={o.mapsEmbed}
                title={`Map of the Farris Law Firm ${o.label} office`}
                className="h-72 w-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="p-7">
                <h2 className="font-display text-2xl text-white">
                  {o.label} Office
                </h2>
                <a
                  href={o.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block leading-relaxed text-zinc-300 hover:text-white"
                >
                  {o.street}
                  <br />
                  {o.city}, {o.state} {o.zip}
                </a>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
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
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="border border-neutral-800 bg-coal-deep p-7">
            <h2 className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-yellow-500">
              Hours
            </h2>
            <p className="mt-3 leading-relaxed text-zinc-300">
              Phone consultations: 24 hours a day, 7 days a week, 365 days a
              year.
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Arrested at 2am? We answer.
            </p>
          </div>
          <div className="border border-neutral-800 bg-coal-deep p-7">
            <h2 className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-yellow-500">
              Follow
            </h2>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-zinc-200 underline decoration-yellow-500 underline-offset-4 hover:text-yellow-500"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand heading="Charged with a crime? Call first." />
    </>
  );
}
