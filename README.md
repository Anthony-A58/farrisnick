# Farris Law Firm

Website for Farris Law Firm, a criminal defense practice serving Orange County,
Los Angeles County, and the San Fernando Valley.

Built with Next.js (App Router) and Tailwind CSS as a fully static site. It is a
redesign of the existing farrisfirm.com, rebuilt to preserve every ranking URL
while modernizing the design and expanding content.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build the production site:

```bash
npm run build
npm run start
```

## Deploying

This is a standard Next.js app and deploys to Vercel with zero configuration:
import the repository at [vercel.com/new](https://vercel.com/new) and deploy.
Netlify and other Next.js hosts work as well.

## How it is organized

- `app/` — routes. The homepage, plus a catch-all (`app/[...slug]/`) that serves
  migrated pages, location pages, practice-area pages, and blog posts.
- `components/` — the shared header, footer, page templates, and motion helpers.
- `content/` — the migrated page content from the original site, preserved as
  JSON so existing URLs and their SEO stay intact.
- `lib/` — structured data for the new pages (locations, practice areas, blog
  posts, victories) and site-wide settings.
- `public/` — images, including the firm's photography and generated artwork.

## SEO parity

Every URL from the original WordPress site is preserved at the same path, with
titles, meta descriptions, and headings matched exactly (a few deliberate,
documented improvements aside). This protects the existing search rankings
during the redesign.
