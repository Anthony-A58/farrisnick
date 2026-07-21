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

      <div className="relative overflow-hidden bg-navy-950 py-12 text-white lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(27,58,102,0.55),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 lg:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold-400">
            Asked &amp; Answered · {post.category}
          </p>
          <h1 className="font-display mt-2 text-3xl font-bold leading-tight lg:text-4xl">
            {post.h1}
          </h1>
          <div className="mt-5">
            <AuthorByline dark date={post.datePublished} />
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-10 lg:px-6 lg:py-14">
        {/* The question, styled like the forum post it came from */}
        <figure className="rounded border-l-4 border-grey-200 bg-grey-100 p-6">
          <figcaption className="text-sm font-semibold uppercase tracking-[0.12em] text-grey-500">
            The question, {post.question.source}
          </figcaption>
          <blockquote className="mt-3 italic leading-relaxed text-grey-700">
            {post.question.text}
          </blockquote>
          <p className="mt-3 text-xs text-grey-500">
            Paraphrased and anonymized. We answer questions like this one every
            week on free consultation calls.
          </p>
        </figure>

        {/* Direct answer up top */}
        <div className="mt-8 rounded border-2 border-gold-500 bg-white p-6">
          <h2 className="font-display text-xl font-bold text-navy-900">
            The Short Answer
          </h2>
          <p className="mt-3 leading-relaxed text-grey-700">{post.tldr}</p>
        </div>

        <Image
          src={post.image}
          alt={post.h1}
          width={1200}
          height={800}
          className="mt-10 w-full rounded object-cover"
          sizes="(min-width: 1024px) 56rem, 100vw"
        />

        {post.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="font-display text-2xl font-bold leading-tight text-navy-900 lg:text-3xl">
              {s.heading}
            </h2>
            {s.body.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-grey-700">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="mt-4 space-y-3">
                {s.list.map((item) => (
                  <li key={item.slice(0, 40)} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 font-bold text-gold-500" aria-hidden>
                      ✓
                    </span>
                    <span className="leading-relaxed text-grey-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="mt-10 rounded bg-navy-900 p-6 text-white">
          <h2 className="font-display text-lg font-bold">Keep Reading</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {post.related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="text-sm text-grey-200/90 underline decoration-gold-500 underline-offset-4 hover:text-gold-400"
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-grey-500">
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
