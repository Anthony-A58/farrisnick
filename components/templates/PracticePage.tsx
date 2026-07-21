import Image from "next/image";
import Link from "next/link";
import type { PracticeEntry } from "@/lib/practice-data";
import { CtaBand, FaqBlock, PageHero, breadcrumbJsonLd, faqJsonLd } from "./shared";

export default function PracticePage({ p }: { p: PracticeEntry }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      faqJsonLd(p.faqs),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Practice Areas", path: "/practice-areas/" },
        { name: p.h1, path: `/${p.slug}/` },
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
        kicker={p.kicker ?? "Orange County & Los Angeles"}
        h1={p.h1}
        sub="Free, confidential phone consultations 24/7/365. Payment plans available."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-6 lg:py-16">
        <div>
          <div className="mb-8 rounded border-2 border-gold-500 bg-white p-6">
            <h2 className="font-display text-xl font-bold text-navy-900">
              The Short Answer
            </h2>
            <p className="mt-3 leading-relaxed text-grey-700">{p.tldr}</p>
          </div>
          {p.intro.map((par) => (
            <p key={par.slice(0, 40)} className="mb-4 leading-relaxed text-grey-700">
              {par}
            </p>
          ))}
          <h2 className="font-display mt-8 text-2xl font-bold text-navy-900 lg:text-3xl">
            {p.charges.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {p.charges.items.map((c) => (
              <div key={c.name} className="rounded border border-grey-200 bg-white p-5">
                <h3 className="font-display text-lg font-bold text-navy-900">
                  {c.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-grey-700">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <aside>
          <Image
            src={p.image}
            alt={`${p.h1} in Orange County and Los Angeles`}
            width={640}
            height={427}
            className="w-full rounded object-cover"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
          <div className="mt-6 rounded bg-navy-900 p-6 text-white">
            <h3 className="font-display text-lg font-bold">
              Related Resources
            </h3>
            <ul className="mt-3 space-y-2">
              {p.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-grey-200/90 underline decoration-gold-500 underline-offset-4 hover:text-gold-400"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="bg-navy-950 py-12 text-white lg:py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="font-display text-2xl font-bold lg:text-3xl">
            {p.penalties.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-grey-200/80">
            {p.penalties.note}
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-navy-700 text-gold-400">
                  <th className="py-3 pr-4 font-semibold">Charge</th>
                  <th className="py-3 pr-4 font-semibold">Level</th>
                  <th className="py-3 font-semibold">Exposure</th>
                </tr>
              </thead>
              <tbody>
                {p.penalties.rows.map((r) => (
                  <tr key={r.charge} className="border-b border-navy-800">
                    <td className="py-3 pr-4 font-semibold text-white">
                      {r.charge}
                    </td>
                    <td className="py-3 pr-4 text-grey-200/80">{r.level}</td>
                    <td className="py-3 text-grey-200/80">{r.exposure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
        <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">
          {p.defenses.heading}
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-grey-700">
          {p.defenses.lead}
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {p.defenses.items.map((d) => (
            <li
              key={d.slice(0, 40)}
              className="flex gap-3 rounded border border-grey-200 bg-white p-4"
            >
              <span className="mt-0.5 shrink-0 font-bold text-gold-500" aria-hidden>
                ✓
              </span>
              <span className="text-sm leading-relaxed text-grey-700">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <FaqBlock heading="Frequently Asked Questions" faqs={p.faqs} />
      <CtaBand heading="Charged or under investigation? Talk to a defense attorney tonight." />
    </>
  );
}
