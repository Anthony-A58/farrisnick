"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Link href="/" className="shrink-0">
          <span className="font-display text-xl font-bold tracking-wide lg:text-2xl">
            Farris <span className="text-gold-500">Law Firm</span>
          </span>
          <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-grey-200/80">
            Criminal Defense
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="rounded px-3 py-2 text-sm font-medium text-grey-200 transition hover:text-gold-400"
              >
                {item.label}
              </Link>
              {item.children && (
                <div
                  className={`invisible absolute left-0 top-full grid gap-x-2 rounded-b-md bg-navy-800 p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 ${
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
                      className="block rounded px-3 py-2 text-sm text-grey-200 hover:bg-navy-700 hover:text-gold-400"
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
            <span className="block text-xs text-grey-200/80">
              Free Consultation 24/7
            </span>
            <span className="block font-semibold text-gold-400">
              {SITE.phone}
            </span>
          </a>
          <Link
            href="/contact/"
            className="rounded bg-gold-500 px-4 py-2.5 text-sm font-bold text-navy-950 transition hover:bg-gold-400"
          >
            Free Case Review
          </Link>
        </div>

        <button
          className="rounded p-2 text-grey-200 lg:hidden"
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
        <nav className="border-t border-navy-700 bg-navy-900 pb-4 lg:hidden">
          {NAV.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block px-5 py-2.5 font-medium text-grey-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="block px-8 py-1.5 text-sm text-grey-200/80"
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
