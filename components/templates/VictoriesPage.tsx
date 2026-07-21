"use client";

import { useState } from "react";
import { ALL_VICTORIES, VICTORY_CATEGORIES } from "@/lib/victories-data";

export default function VictoriesGrid() {
  const [active, setActive] = useState<string>("All");
  const shown =
    active === "All"
      ? ALL_VICTORIES
      : ALL_VICTORIES.filter((v) => v.category === active);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter victories">
        {VICTORY_CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={
              active === c
                ? "rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white"
                : "rounded-full border border-grey-200 bg-white px-4 py-2 text-sm font-semibold text-grey-700 transition hover:border-gold-500"
            }
          >
            {c}
            {c !== "All" && (
              <span className="ml-1.5 text-xs opacity-60">
                {ALL_VICTORIES.filter((v) => v.category === c).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((v) => (
          <div
            key={v.case}
            className="flex flex-col rounded border border-grey-200 bg-white p-6 transition hover:border-gold-500"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-500">
              {v.category}
            </span>
            <h3 className="font-display mt-1.5 text-lg font-bold text-navy-900">
              {v.case}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-grey-700">
              {v.outcome}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xs leading-relaxed text-grey-500">
        Every case is different. Prior results do not guarantee a similar
        outcome. Attorney advertising.
      </p>
    </section>
  );
}
