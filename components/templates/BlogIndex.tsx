import Image from "next/image";
import Link from "next/link";
import { getMigratedBlogPosts } from "@/lib/content";
import { QA_POSTS } from "@/lib/qa-posts-data";
import { CtaBand } from "./shared";

export default function BlogIndex() {
  const migrated = getMigratedBlogPosts();

  return (
    <>
      <div className="relative overflow-hidden bg-navy-950 py-12 text-white lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(27,58,102,0.55),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
          {/* H1 kept identical to the WordPress baseline */}
          <h1 className="font-display text-3xl font-bold leading-tight lg:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-grey-200/90">
            Straight answers about California criminal law from the attorneys
            at Farris Law Firm.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
        <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">
          Asked &amp; Answered
        </h2>
        <p className="mt-2 max-w-2xl text-grey-700">
          Real questions people ask online, answered properly by a defense
          attorney.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {QA_POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}/`}
              className="group overflow-hidden rounded border border-grey-200 bg-white transition hover:border-gold-500"
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
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-500">
                  {p.category}
                </p>
                <h3 className="font-display mt-1.5 text-lg font-bold leading-snug text-navy-900 group-hover:text-navy-700">
                  {p.h1}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-navy-900 lg:text-3xl">
          Guides &amp; Articles
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {migrated.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}/`}
                className="block rounded border border-grey-200 bg-white px-5 py-4 font-semibold text-navy-900 transition hover:border-gold-500"
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
