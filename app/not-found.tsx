import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="bg-navy-950 py-24 text-center text-white">
      <div className="mx-auto max-w-2xl px-4">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold-400">
          Page not found
        </p>
        <h1 className="font-display mt-3 text-3xl font-bold leading-tight lg:text-5xl">
          This page does not exist. Your defense options do.
        </h1>
        <p className="mt-4 text-grey-200/80">
          The page you were looking for may have moved. If you are facing
          criminal charges, do not let a broken link slow you down: the phone
          consultation is free, any hour of any day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={SITE.phoneHref}
            className="rounded bg-gold-500 px-6 py-3.5 font-bold text-navy-950 transition hover:bg-gold-400"
          >
            Call {SITE.phone}
          </a>
          <Link
            href="/"
            className="rounded border border-grey-200/40 px-6 py-3.5 font-semibold text-white transition hover:border-gold-400 hover:text-gold-400"
          >
            Go to the Homepage
          </Link>
        </div>
        <p className="mt-8 text-sm text-grey-200/60">
          Looking for something specific? Try{" "}
          <Link href="/practice-areas/" className="text-gold-400 underline underline-offset-4">
            practice areas
          </Link>
          ,{" "}
          <Link href="/locations/" className="text-gold-400 underline underline-offset-4">
            locations
          </Link>
          , or the{" "}
          <Link href="/blog/" className="text-gold-400 underline underline-offset-4">
            blog
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
