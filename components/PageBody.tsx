import Link from "next/link";
import AuthorByline from "@/components/AuthorByline";
import { BLOG_TLDR } from "@/lib/blog-tldr";
import { PRACTICE_TLDR } from "@/lib/practice-tldr";
import type { PageContent } from "@/lib/content";
import { CALBAR, SITE } from "@/lib/site";

export default function PageBody({
  page,
  isHome = false,
}: {
  page: PageContent;
  isHome?: boolean;
}) {
  const isBlogArticle =
    page.path.startsWith("/blog/") && page.path !== "/blog/";
  const practiceTldr = PRACTICE_TLDR[page.path.replace(/\//g, "")];
  const authorJsonLd = isBlogArticle
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: page.h1 || page.title,
        mainEntityOfPage: SITE.url + page.path,
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
      }
    : null;

  // Fix #4: breadcrumb schema for migrated practice and location pages
  // (the new template pages already emit their own).
  const isMigLocation =
    page.path.includes("criminal-defense") ||
    page.path.startsWith("/burbank-") ||
    page.path === "/dui-defense-lawyers-in-burbank/";
  const crumbParent = practiceTldr
    ? { name: "Practice Areas", path: "/practice-areas/" }
    : isMigLocation
      ? { name: "Locations", path: "/locations/" }
      : null;
  const breadcrumbLd = crumbParent
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { name: "Home", path: "/" },
          crumbParent,
          { name: page.h1 || page.title, path: page.path },
        ].map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: SITE.url + it.path,
        })),
      }
    : null;
  return (
    <>
      <div className="bg-navy-900 py-10 text-white lg:py-14">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          {isHome ? (
            <h1 className="font-display max-w-3xl text-3xl font-bold leading-tight lg:text-5xl">
              {page.h1}
            </h1>
          ) : (
            <h1 className="font-display max-w-3xl text-3xl font-bold leading-tight lg:text-4xl">
              {page.h1 || page.title}
            </h1>
          )}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="rounded bg-gold-500 px-5 py-2.5 font-bold text-navy-950 transition hover:bg-gold-400"
            >
              Call {SITE.phone}
            </a>
            <span className="text-sm text-grey-200/80">
              Free phone consultations 24/7/365. Payment plans available.
            </span>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-10 lg:px-6 lg:py-14">
        {breadcrumbLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
          />
        )}
        {authorJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(authorJsonLd) }}
          />
        )}
        {isBlogArticle && (
          <div className="mb-8 border-b border-grey-200 pb-6">
            <AuthorByline />
          </div>
        )}
        {isBlogArticle && BLOG_TLDR[page.path.split("/")[2]] && (
          <div className="mb-10 rounded border-2 border-gold-500 bg-white p-6">
            <h2 className="font-display text-xl font-bold text-navy-900">
              The Short Answer
            </h2>
            <p className="mt-3 leading-relaxed text-grey-700">
              {BLOG_TLDR[page.path.split("/")[2]]}
            </p>
          </div>
        )}
        {practiceTldr && (
          <div className="mb-10 rounded border-2 border-gold-500 bg-white p-6">
            <h2 className="font-display text-xl font-bold text-navy-900">
              The Short Answer
            </h2>
            <p className="mt-3 leading-relaxed text-grey-700">{practiceTldr}</p>
          </div>
        )}
        {/* Legacy WordPress markup gets normalized by the browser, which
            trips React's hydration comparison. Content is static, so the
            warning is a false positive. */}
        <div
          className="wp-content"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: page.contentHtml }}
        />
      </article>

      <section className="bg-grey-100">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Charged with a crime? Talk to a defense attorney tonight.
            </h2>
            <p className="mt-1 text-grey-500">
              Free, confidential phone consultation any hour, any day.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={SITE.phoneHref}
              className="rounded bg-navy-900 px-5 py-3 font-bold text-white transition hover:bg-navy-800"
            >
              {SITE.phone}
            </a>
            <Link
              href="/contact/"
              className="rounded bg-gold-500 px-5 py-3 font-bold text-navy-950 transition hover:bg-gold-400"
            >
              Free Case Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
