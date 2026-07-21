import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="border-b border-hairline bg-black py-24 text-center text-white">
      <div className="mx-auto max-w-2xl px-4">
        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-yellow-500">
          Page not found
        </p>
        <h1 className="cutout mt-4 text-3xl lg:text-5xl">
          This page does not exist. Your defense options do.
        </h1>
        <p className="mt-6 leading-relaxed text-zinc-300">
          The page you were looking for may have moved. If you are facing
          criminal charges, do not let a broken link slow you down: the phone
          consultation is free, any hour of any day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={SITE.phoneHref}
            className="bg-yellow-500 px-6 py-3.5 font-extrabold uppercase tracking-[0.03em] text-night transition hover:bg-yellow-300"
          >
            Call {SITE.phone}
          </a>
          <Link
            href="/"
            className="border-2 border-zinc-600 px-6 py-3 font-bold uppercase tracking-[0.03em] text-white transition hover:border-yellow-500 hover:text-yellow-500"
          >
            Go to the Homepage
          </Link>
        </div>
        <p className="mt-8 text-sm text-zinc-500">
          Looking for something specific? Try{" "}
          <Link href="/practice-areas/" className="text-yellow-500 underline underline-offset-4 hover:text-yellow-300">
            practice areas
          </Link>
          ,{" "}
          <Link href="/locations/" className="text-yellow-500 underline underline-offset-4 hover:text-yellow-300">
            locations
          </Link>
          , or the{" "}
          <Link href="/blog/" className="text-yellow-500 underline underline-offset-4 hover:text-yellow-300">
            blog
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
