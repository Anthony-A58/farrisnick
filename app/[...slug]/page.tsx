import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndex from "@/components/templates/BlogIndex";
import PracticeHub from "@/components/templates/PracticeHub";
import ReviewsPage from "@/components/templates/ReviewsPage";
import TestimonialsPage from "@/components/templates/TestimonialsPage";
import VictoriesGrid from "@/components/templates/VictoriesPage";
import { CtaBand } from "@/components/templates/shared";
import LocationPage from "@/components/templates/LocationPage";
import PracticePage from "@/components/templates/PracticePage";
import QaPostPage from "@/components/templates/QaPostPage";
import PageBody from "@/components/PageBody";
import { getAllPaths, getPage } from "@/lib/content";
import { LOCATIONS, LOCATION_BY_SLUG } from "@/lib/locations-data";
import { PRACTICES, PRACTICE_BY_SLUG } from "@/lib/practice-data";
import { QA_POSTS, QA_BY_SLUG } from "@/lib/qa-posts-data";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  const migrated = getAllPaths()
    .filter((p) => p !== "/")
    .map((p) => ({ slug: p.replace(/^\/|\/$/g, "").split("/") }));
  const locations = LOCATIONS.map((l) => ({ slug: [l.slug] }));
  const practices = PRACTICES.map((p) => ({ slug: [p.slug] }));
  const qaPosts = QA_POSTS.map((p) => ({ slug: ["blog", p.slug] }));
  return [...migrated, ...locations, ...practices, ...qaPosts];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const joined = slug.join("/");

  const loc = slug.length === 1 ? LOCATION_BY_SLUG.get(joined) : undefined;
  if (loc) {
    return {
      title: loc.title,
      description: loc.metaDescription,
      alternates: { canonical: `/${loc.slug}/` },
      openGraph: { images: [loc.image] },
    };
  }
  const prac = slug.length === 1 ? PRACTICE_BY_SLUG.get(joined) : undefined;
  if (prac) {
    return {
      title: prac.title,
      description: prac.metaDescription,
      alternates: { canonical: `/${prac.slug}/` },
      openGraph: { images: [prac.image] },
    };
  }

  const qa =
    slug.length === 2 && slug[0] === "blog" ? QA_BY_SLUG.get(slug[1]) : undefined;
  if (qa) {
    return {
      title: qa.title,
      description: qa.metaDescription,
      alternates: { canonical: `/blog/${qa.slug}/` },
      openGraph: { images: [qa.image] },
    };
  }

  const page = getPage("/" + joined + "/");
  if (!page) return {};
  // The migrated /practice-areas/ meta wrongly advertises personal injury and
  // family law (leftover template text). Title/H1 stay for parity; fix the meta.
  const metaOverrides: Record<string, string> = {
    "practice-areas":
      "Explore the criminal defense practice areas at Farris Law Firm: DUI, domestic violence, assault, theft, drug and weapons charges, and more across Orange County and Los Angeles.",
    "about/reviews":
      "Read what Farris Law Firm clients say. 5.0 stars across dozens of reviews from Orange County, Los Angeles, and the San Fernando Valley. Free consultations 24/7.",
  };
  const description = metaOverrides[joined] ?? page.metaDescription;
  return {
    title: page.title,
    description,
    alternates: { canonical: page.path },
    openGraph: page.ogImage ? { images: [page.ogImage] } : undefined,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const joined = slug.join("/");

  const loc = slug.length === 1 ? LOCATION_BY_SLUG.get(joined) : undefined;
  if (loc) return <LocationPage loc={loc} />;

  const prac = slug.length === 1 ? PRACTICE_BY_SLUG.get(joined) : undefined;
  if (prac) return <PracticePage p={prac} />;

  const qa =
    slug.length === 2 && slug[0] === "blog" ? QA_BY_SLUG.get(slug[1]) : undefined;
  if (qa) return <QaPostPage post={qa} />;

  if (joined === "blog") return <BlogIndex />;

  if (joined === "practice-areas") return <PracticeHub />;

  if (joined === "about/reviews") return <ReviewsPage />;

  if (joined === "about/testimonials") return <TestimonialsPage />;

  if (joined === "recent-victories") {
    return (
      <>
        {/* H1 kept identical to the WordPress baseline */}
        <div className="relative overflow-hidden border-b border-hairline bg-black py-14 text-white lg:py-20">
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="cutout max-w-4xl text-4xl lg:text-6xl">
              Recent Victories
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
              Real cases, real outcomes: dismissals, reductions, and second
              chances won for our clients across Orange County and Los Angeles.
            </p>
          </div>
        </div>
        <VictoriesGrid />
        <CtaBand heading="Your case could be the next victory on this page." />
      </>
    );
  }

  const page = getPage("/" + joined + "/");
  if (!page) notFound();
  return <PageBody page={page} />;
}
