import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CtaBand from '@/components/CtaBand'
import Eyebrow from '@/components/Eyebrow'
import FaqAccordion from '@/components/FaqAccordion'
import Img from '@/components/Img'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import ProcessStepper from '@/components/ProcessStepper'
import PromoBand from '@/components/PromoBand'
import Reveal from '@/components/Reveal'
import { config, getProduct, getService } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { hasImage } from '@/lib/images'
import { breadcrumbList, faqPage, productService } from '@/lib/schema'
import { productTitle } from '@/lib/product-titles'
import { buildMetadata } from '@/lib/seo'
import { categoryTitle } from '@/lib/product-categories'

export function generateStaticParams() {
  return config.products.map((p) => ({ slug: p.slug }))
}

function crumbsFor(name: string, slug: string) {
  return [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name, path: `/products/${slug}` },
  ]
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug)
  if (!product) return {}
  const fm = readFrontmatter(`products/${product.slug}.mdx`)
  const built = buildMetadata({
    kind: 'other',
    title: product.name,
    path: `/products/${product.slug}`,
    description: fm.description,
    image: fm.image ?? product.image,
  })
  // kind 'other' appends the business name; productTitle also handles the
  // overlong names by dropping the city, so set the absolute title here.
  built.metadata.title = { absolute: productTitle(product.name) }
  if (built.metadata.openGraph) built.metadata.openGraph.title = productTitle(product.name)
  if (built.metadata.twitter) built.metadata.twitter.title = productTitle(product.name)
  return built.metadata
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug)
  if (!product) notFound()
  const { content } = await loadContent(`products/${product.slug}.mdx`, { product })
  const crumbs = crumbsFor(product.name, product.slug)
  const service = getService(product.relatedService)
  const siblings = config.products.filter((p) => p.category === product.category && p.slug !== product.slug)
  const nearest = siblings.slice(0, 2)

  return (
    <>
      <JsonLd data={productService(product)} />
      <JsonLd data={faqPage(product.faqs)} />
      <JsonLd data={breadcrumbList(crumbs)} />

      <PageHero
        eyebrow={`PRODUCTS · ${categoryTitle(product.category).toUpperCase()}`}
        title={`${product.name} in ${config.primaryCity}`}
        emphasis={product.name.split(' ').slice(-1)[0]}
        intro={product.shortDescription}
        image={product.image}
        crumbs={crumbs}
        secondary={{ href: '/products', label: 'All products' }}
      />

      <div className="mx-auto grid max-w-page gap-10 px-4 pt-14 sm:px-6 lg:grid-cols-3">
        <article className="lg:col-span-2">{content}</article>
        <aside className="space-y-6">
          {product.image && hasImage(product.image) && (
            <div className="overflow-hidden rounded-site">
              <Img name={product.image} sizes="(min-width: 1024px) 33vw, 100vw" className="h-auto w-full" />
            </div>
          )}
          <div className="rounded-site border border-line bg-surface p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">Pricing</p>
            <p className="mt-2 text-sm text-ink">Pricing is {product.priceNote}.</p>
          </div>
          {service && (
            <div className="rounded-site border border-line bg-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">Part of this service</p>
              <Link href={`/services/${service.slug}`} className="mt-2 block font-heading text-lg font-bold text-primary-dark hover:text-accent">
                {service.name}
              </Link>
              <p className="mt-2 text-sm text-muted">{service.shortDescription}</p>
            </div>
          )}
        </aside>
      </div>

      <section className="mx-auto max-w-page px-4 py-16 sm:px-6">
        <Eyebrow>WHAT IS INCLUDED</Eyebrow>
        <h2 className="mt-3 font-heading text-2xl font-bold text-primary-dark md:text-4xl">Every detail, handled.</h2>
        <Reveal className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {product.features.map((f) => (
              <div key={f.title} className="rounded-site border border-line bg-surface p-6">
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="fill-none stroke-accent stroke-[1.5]">
                  <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="mt-3 font-heading text-lg font-bold text-primary-dark">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <ProcessStepper />

      <FaqAccordion faqs={product.faqs} heading={`${product.name} questions`} />

      {nearest.length > 0 && (
        <section className="mx-auto max-w-page px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-heading text-2xl font-bold text-primary-dark md:text-3xl">
              Other {categoryTitle(product.category).toLowerCase()}
            </h2>
            <Link href="/products" className="text-sm font-semibold text-accent hover:underline">
              View all products &rarr;
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {nearest.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="rounded-site border border-line bg-surface p-6 transition-colors hover:border-accent"
              >
                <h3 className="font-heading text-lg font-bold text-primary-dark">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.shortDescription}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <PromoBand />
      <CtaBand heading={`Need ${product.name.toLowerCase()} in ${config.primaryCity}?`} />
    </>
  )
}
