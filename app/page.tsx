import { createDirectus, readItems, rest } from '@directus/sdk';
const directus = createDirectus('http://localhost:8055').with(rest());
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const pages = await directus.request(
        readItems('pages', {
            fields: ['slug  '],
        })
    );

    return pages.map((page) => page.slug);
}

export default async function Page({
    params,
  }: {
    params: { slug: string }
  }) {
    let { slug } = params
    console.log(slug);
    if (!slug) {
      slug = 'home'
    }
    const pages = await directus.request(
        readItems('pages', {
          filter: {
            slug: { _eq: slug },
          },
          fields: ['*', { blocks: ['*', { item: [{ collection_a: ['*'], collection_b: ['*'] }] }] }],
          limit: 1,
        })
      );
      const page = pages[0];
      console.log(page)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>start</p>
        
      </div>
    </main>
  )
}
