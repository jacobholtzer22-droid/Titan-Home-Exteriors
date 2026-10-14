import type { Metadata } from 'next'
import Link from 'next/link'
import CtaBand from '@/components/CtaBand'
import Em from '@/components/Em'
import Eyebrow from '@/components/Eyebrow'
import Img from '@/components/Img'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import PromoBand from '@/components/PromoBand'
import Reveal from '@/components/Reveal'
import { config } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { hasImage } from '@/lib/images'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { PRODUCT_CATEGORIES as CATEGORIES } from '@/lib/product-categories'

const CONTENT = 'products.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
]


export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({
    kind: 'other',
    title: 'Windows, Doors & Siding Products',
    path: '/products',
    description: fm.description,
    image: fm.image,
  }).metadata
}

export default async function ProductsIndexPage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHero
        eyebrow="PRODUCTS"
        title={`Windows, doors and siding we install in ${config.primaryCity}`}
        emphasis="install"
        intro="Sixteen products across four categories, every one of them sold and installed by our own crew."
        crumbs={CRUMBS}
        secondary={{ href: '/services', label: 'See our services' }}
      />

      <div className="mx-auto max-w-page px-4 sm:px-6">
        <article className="max-w-3xl pt-14">{content}</article>
      </div>

      {CATEGORIES.map((cat) => {
        const items = config.products.filter((p) => p.category === cat.key)
        if (items.length === 0) return null
        const banner = items.map((p) => p.image).find((n): n is string => Boolean(n) && hasImage(n as string)) ?? null
        return (
          <section key={cat.key} className="mx-auto max-w-page px-4 py-12 sm:px-6 md:py-16">
            <Eyebrow>{cat.title.toUpperCase()}</Eyebrow>
            <h2 className="mt-3 font-heading text-2xl font-bold text-primary-dark md:text-4xl">{cat.blurb}</h2>
            {/* ONE photograph per category, not one per card. There are eleven
                client photographs and sixteen products, so a photo on every
                card meant the same window appeared six times down one page,
                which reads as filler. The band carries the photo; the cards
                carry the words. */}
            {banner && (
              <Reveal className="mt-8">
                <div className="relative overflow-hidden rounded-site">
                  <div className="relative aspect-[21/9]">
                    <Img name={banner} sizes="100vw" className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                </div>
              </Reveal>
            )}
            <Reveal className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="group flex flex-col justify-between rounded-site border border-line bg-surface p-6 transition-colors hover:border-accent"
                  >
                    <div>
                      <h3 className="font-heading text-lg font-bold text-primary-dark group-hover:text-accent">{p.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{p.shortDescription}</p>
                    </div>
                    <span className="mt-4 text-sm font-semibold text-accent">View details &rarr;</span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </section>
        )
      })}

      <section className="mx-auto max-w-page px-4 pb-8 sm:px-6">
        <p className="text-sm text-muted">
          Not sure which style fits? <Em>Start with the service page</Em> for{' '}
          <Link href="/services/window-replacement" className="font-medium text-accent hover:underline">
            window replacement
          </Link>
          ,{' '}
          <Link href="/services/impact-windows-and-doors" className="font-medium text-accent hover:underline">
            impact windows and doors
          </Link>{' '}
          or{' '}
          <Link href="/services/entry-and-patio-doors" className="font-medium text-accent hover:underline">
            entry and patio doors
          </Link>
          .
        </p>
      </section>

      <PromoBand />
      <CtaBand />
    </>
  )
}
