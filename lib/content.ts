import fs from "fs";
import path from "path";

export type PageContent = {
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  ogImage: string;
  contentHtml: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getPage(urlPath: string): PageContent | null {
  const slug = urlPath.replace(/^\/|\/$/g, "") || "home";
  const file = path.join(CONTENT_DIR, slug.replace(/\//g, "__") + ".json");
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as PageContent;
}

export function getAllPaths(): string[] {
  const index = JSON.parse(
    fs.readFileSync(path.join(CONTENT_DIR, "_index.json"), "utf8")
  ) as { path: string }[];
  return index.map((e) => e.path);
}

export function getMigratedBlogPosts(): { slug: string; title: string }[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.startsWith("blog__") && f.endsWith(".json"))
    .map((f) => {
      const data = JSON.parse(
        fs.readFileSync(path.join(CONTENT_DIR, f), "utf8")
      ) as PageContent;
      return {
        slug: f.slice("blog__".length, -".json".length),
        title: (data.h1 || data.title).replace(/ [-|] Farris Law Firm$/i, ""),
      };
    });
}
