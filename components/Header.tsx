"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-night text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <Link href="/" className="shrink-0">
          <span className="font-display text-2xl tracking-wide text-white lg:text-[27px]">
            Farris<span className="text-yellow-500">.</span>
          </span>
          <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Criminal Defense
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="px-3 py-2 text-sm font-semibold uppercase tracking-[0.04em] text-zinc-200 transition hover:text-yellow-500"
              >
                {item.label}
              </Link>
              {item.children && (
                <div
                  className={`invisible absolute left-0 top-full grid gap-x-2 border border-hairline bg-coal p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 ${
                    item.children.length > 14
                      ? "w-[42rem] grid-cols-3"
                      : item.children.length > 7
                        ? "w-[28rem] grid-cols-2"
                        : "min-w-56 grid-cols-1"
                  }`}
                >
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-3 py-2 text-sm text-zinc-400 hover:bg-hairline hover:text-yellow-500"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a href={SITE.phoneHref} className="text-right">
            <span className="block text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Free Consultation 24/7
            </span>
            <span className="block font-display text-lg leading-tight text-yellow-500">
              {SITE.phone}
            </span>
          </a>
          <Link
            href="/contact/"
            className="bg-yellow-500 px-4 py-2.5 text-sm font-extrabold uppercase tracking-[0.03em] text-night transition hover:bg-yellow-300"
          >
            Free Case Review
          </Link>
        </div>

        <button
          className="p-2 text-zinc-200 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-hairline bg-night pb-24 lg:hidden">
          {NAV.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block px-5 py-2.5 font-bold uppercase tracking-wide text-zinc-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="block px-8 py-1.5 text-sm text-zinc-500"
                  onClick={() => setOpen(false)}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
