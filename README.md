This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Reindex on Google Search

After deploying changes to `https://sosalawu.vercel.app`, request a fresh crawl in Google Search Console:

1. Open [Google Search Console](https://search.google.com/search-console) and select the verified `sosalawu.vercel.app` property.
2. Open **URL inspection**, enter `https://sosalawu.vercel.app/`, and select **Request indexing**.
3. Open **Sitemaps**, submit `sitemap.xml`, and confirm that it is processed successfully.
4. Use **URL inspection** again after deployment to verify that Google can see the updated page and the portrait image URL.

Google controls the crawl schedule and whether the portrait is shown beside a result, so the image may not appear immediately or for every search. Keep the site publicly accessible and avoid repeatedly submitting the same URL.
