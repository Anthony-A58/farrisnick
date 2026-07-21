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

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8 lg:py-16">
        <div>
          <div className="mb-8 border border-neutral-800 border-l-4 border-l-yellow-500 bg-coal p-6">
            <h2 className="font-display text-xl text-white">
              The Short Answer
            </h2>
            <p className="mt-3 leading-relaxed text-zinc-400">{p.tldr}</p>
          </div>
          {p.intro.map((par) => (
            <p key={par.slice(0, 40)} className="mb-4 leading-relaxed text-zinc-400">
              {par}
            </p>
          ))}
          <h2 className="font-display mt-8 text-2xl leading-[0.98] text-white lg:text-3xl">
            {p.charges.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {p.charges.items.map((c) => (
              <div key={c.name} className="border border-neutral-800 bg-coal p-5 transition hover:border-yellow-500">
                <h3 className="text-lg font-extrabold text-white">
                  {c.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
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
            className="w-full object-cover"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
          <div className="mt-6 border border-neutral-800 border-t-2 border-t-yellow-500 bg-coal p-6 text-white">
            <h3 className="font-display text-lg">
              Related Resources
            </h3>
            <ul className="mt-3 space-y-2">
              {p.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-zinc-300 underline decoration-yellow-500 underline-offset-4 hover:text-yellow-500"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="border-y border-hairline bg-black py-12 text-white lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-2xl leading-[0.98] text-white lg:text-3xl">
            {p.penalties.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
            {p.penalties.note}
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-800 text-yellow-500">
                  <th className="py-3 pr-4 font-semibold">Charge</th>
                  <th className="py-3 pr-4 font-semibold">Level</th>
                  <th className="py-3 font-semibold">Exposure</th>
                </tr>
              </thead>
              <tbody>
                {p.penalties.rows.map((r) => (
                  <tr key={r.charge} className="border-b border-hairline">
                    <td className="py-3 pr-4 font-semibold text-white">
                      {r.charge}
                    </td>
                    <td className="py-3 pr-4 text-zinc-400">{r.level}</td>
                    <td className="py-3 text-zinc-400">{r.exposure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <h2 className="font-display text-2xl leading-[0.98] text-white lg:text-3xl">
          {p.defenses.heading}
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-zinc-400">
          {p.defenses.lead}
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {p.defenses.items.map((d) => (
            <li
              key={d.slice(0, 40)}
              className="flex gap-3 border border-neutral-800 bg-coal p-4"
            >
              <span className="mt-0.5 shrink-0 font-bold text-yellow-500" aria-hidden>
                ✓
              </span>
              <span className="text-sm leading-relaxed text-zinc-400">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <FaqBlock heading="Frequently Asked Questions" faqs={p.faqs} />
      <CtaBand heading="Charged or under investigation? Talk to a defense attorney tonight." />
    </>
  );
}
