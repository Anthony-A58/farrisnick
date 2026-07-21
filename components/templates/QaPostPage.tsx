import Image from "next/image";
import Link from "next/link";
import AuthorByline from "@/components/AuthorByline";
import type { QaPost } from "@/lib/qa-posts-data";
import { CALBAR, SITE } from "@/lib/site";
import { CtaBand, FaqBlock, breadcrumbJsonLd, faqJsonLd } from "./shared";

export default function QaPostPage({ post }: { post: QaPost }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.h1,
        datePublished: post.datePublished,
        author: {
          "@type": "Person",
          "@id": `${SITE.url}/#charles-farris`,
          name: "Charles P. Farris",
          url: `${SITE.url}/about-us/`,
          jobTitle: "Criminal Defense Attorney",
          identifier: {
            "@type": "PropertyValue",
            propertyID: "California State Bar Number",
            value: CALBAR.number,
          },
          sameAs: [CALBAR.profileUrl],
        },
        publisher: { "@id": `${SITE.url}/#organization` },
        image: SITE.url + post.image,
        mainEntityOfPage: `${SITE.url}/blog/${post.slug}/`,
      },
      faqJsonLd(post.faqs),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog/" },
        { name: post.h1, path: `/blog/${post.slug}/` },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative overflow-hidden border-b border-hairline bg-black py-12 text-white lg:py-16">
        <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-yellow-500">
            Asked &amp; Answered · {post.category}
          </p>
          <h1 className="cutout mt-4 text-3xl lg:text-5xl">
            {post.h1}
          </h1>
          <div className="mt-6">
            <AuthorByline dark date={post.datePublished} />
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-10 lg:px-8 lg:py-14">
        {/* The question, styled like the forum post it came from */}
        <figure className="border border-neutral-800 border-l-4 border-l-zinc-600 bg-coal-deep p-6">
          <figcaption className="text-sm font-extrabold uppercase tracking-[0.12em] text-zinc-500">
            The question, {post.question.source}
          </figcaption>
          <blockquote className="mt-3 italic leading-relaxed text-zinc-300">
            {post.question.text}
          </blockquote>
          <p className="mt-3 text-xs text-zinc-500">
            Paraphrased and anonymized. We answer questions like this one every
            week on free consultation calls.
          </p>
        </figure>

        {/* Direct answer up top */}
        <div className="mt-8 border border-neutral-800 border-l-4 border-l-yellow-500 bg-coal p-6">
          <h2 className="font-display text-xl text-white">
            The Short Answer
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-400">{post.tldr}</p>
        </div>

        <Image
          src={post.image}
          alt={post.h1}
          width={1200}
          height={800}
          className="mt-10 w-full object-cover"
          sizes="(min-width: 1024px) 56rem, 100vw"
        />

        {post.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="font-display text-2xl leading-[0.98] text-white lg:text-3xl">
              {s.heading}
            </h2>
            {s.body.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-zinc-400">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="mt-4 space-y-3">
                {s.list.map((item) => (
                  <li key={item.slice(0, 40)} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 font-bold text-yellow-500" aria-hidden>
                      ✓
                    </span>
                    <span className="leading-relaxed text-zinc-400">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="mt-10 border border-neutral-800 border-t-2 border-t-yellow-500 bg-coal p-6 text-white">
          <h2 className="font-display text-lg text-white">Keep Reading</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {post.related.map((r) => (
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

        <p className="mt-8 text-xs leading-relaxed text-zinc-500">
          This article is attorney advertising and general information, not
          legal advice about your specific situation, and reading it does not
          create an attorney-client relationship. Every case is different. For
          advice about your case, call us for a free, confidential consultation.
        </p>
      </article>

      <FaqBlock heading="Related Questions" faqs={post.faqs} />
      <CtaBand heading="Have a question like this one? Ask a defense attorney tonight, free." />
    </>
  );
}
