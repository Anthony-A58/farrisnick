import Image from "next/image";
import Link from "next/link";
import { getMigratedBlogPosts } from "@/lib/content";
import { QA_POSTS } from "@/lib/qa-posts-data";
import { CtaBand } from "./shared";

export default function BlogIndex() {
  const migrated = getMigratedBlogPosts();

  return (
    <>
      <div className="relative overflow-hidden border-b border-hairline bg-black py-12 text-white lg:py-16">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          {/* H1 kept identical to the WordPress baseline */}
          <h1 className="cutout max-w-4xl text-4xl lg:text-6xl">
            Blog
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Straight answers about California criminal law from the attorneys
            at Farris Law Firm.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <h2 className="font-display text-3xl leading-[0.98] text-white lg:text-4xl">
          Asked &amp; Answered
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Real questions people ask online, answered properly by a defense
          attorney.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {QA_POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}/`}
              className="group overflow-hidden border border-neutral-800 bg-coal transition hover:-translate-y-1 hover:border-yellow-500"
            >
              <Image
                src={p.image}
                alt=""
                width={1200}
                height={800}
                className="h-44 w-full object-cover"
                sizes="(min-width: 768px) 34rem, 100vw"
              />
              <div className="p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-yellow-500">
                  {p.category}
                </p>
                <h3 className="mt-1.5 text-lg font-extrabold leading-snug text-white group-hover:text-yellow-500">
                  {p.h1}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="font-display mt-14 text-3xl leading-[0.98] text-white lg:text-4xl">
          Guides &amp; Articles
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {migrated.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}/`}
                className="block border border-neutral-800 bg-coal px-5 py-4 font-semibold text-zinc-200 transition hover:border-yellow-500 hover:text-yellow-500"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand heading="Questions about your own case? Ask us directly, free." />
    </>
  );
}
