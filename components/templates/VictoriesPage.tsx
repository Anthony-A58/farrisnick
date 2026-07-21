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
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter victories">
        {VICTORY_CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={
              active === c
                ? "bg-yellow-500 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.03em] text-night"
                : "border border-neutral-800 bg-coal px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-yellow-500 hover:text-yellow-500"
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
            className="flex flex-col border border-neutral-800 border-t-2 border-t-yellow-500 bg-coal p-5 transition hover:border-yellow-500"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
              {v.category}
            </span>
            <h3 className="font-display mt-1.5 text-sm tracking-wide text-yellow-500">
              {v.case}
            </h3>
            <p className="mt-2 text-sm leading-snug text-zinc-300">
              {v.outcome}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xs leading-relaxed text-zinc-500">
        Every case is different. Prior results do not guarantee a similar
        outcome. Attorney advertising.
      </p>
    </section>
  );
}
