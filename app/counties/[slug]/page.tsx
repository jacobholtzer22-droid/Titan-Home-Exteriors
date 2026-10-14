import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BeforeAfter from '@/components/BeforeAfter'
import CtaBand from '@/components/CtaBand'
import Eyebrow from '@/components/Eyebrow'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import ServiceGrid from '@/components/ServiceGrid'
import { config, countySlug, getCounty } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { breadcrumbList, localBusiness } from '@/lib/schema'
import { countyTitle } from '@/lib/product-titles'
import { buildMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return config.coverage.map((c) => ({ slug: countySlug(c.county) }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const county = getCounty(params.slug)
  if (!county) return {}
  const fm = readFrontmatter(`counties/${params.slug}.mdx`)
  const built = buildMetadata({
    kind: 'other',
    title: county.county,
    path: `/counties/${params.slug}`,
    description: fm.description,
    image: fm.image,
  })
  built.metadata.title = { absolute: countyTitle(county.county) }
  if (built.metadata.openGraph) built.metadata.openGraph.title = countyTitle(county.county)
  if (built.metadata.twitter) built.metadata.twitter.title = countyTitle(county.county)
  return built.metadata
}

export default async function CountyPage({ params }: { params: { slug: string } }) {
  const county = getCounty(params.slug)
  if (!county) notFound()
  const { content } = await loadContent(`counties/${params.slug}.mdx`, { county })
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Counties', path: '/counties' },
    { name: county.county, path: `/counties/${params.slug}` },
  ]
  // Towns that have their own page get a link; the rest render as plain text.
  const areaFor = (town: string) => config.serviceAreas.find((a) => a.name === town)

  return (
    <>
      <JsonLd data={localBusiness(config.serviceAreas, county.county)} />
      <JsonLd data={breadcrumbList(crumbs)} />

      <PageHero
        eyebrow={`SERVICE AREA · ${county.county.toUpperCase()}`}
        title={`Windows and doors in ${county.county}`}
        emphasis="doors"
        intro={`Replacement windows, impact-rated glass, entry doors and sliding glass doors across ${county.county}.`}
        crumbs={crumbs}
        secondary={{ href: '/counties', label: 'All counties' }}
      />

      <div className="mx-auto max-w-page px-4 sm:px-6">
        <article className="max-w-3xl pt-14">{content}</article>
      </div>

      <section className="mx-auto max-w-page px-4 py-12 sm:px-6">
        <Eyebrow>TOWNS WE COVER</Eyebrow>
        <h2 className="mt-3 font-heading text-2xl font-bold text-primary-dark md:text-3xl">
          {county.towns.length} towns across {county.county}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {county.towns.map((t) => {
            const area = areaFor(t)
            return (
              <li key={t} className="text-sm">
                {area ? (
                  <Link href={`/areas/${area.slug}`} className="font-medium text-accent hover:underline">
                    {t}
                  </Link>
                ) : (
                  <span className="text-muted">{t}</span>
                )}
              </li>
            )
          })}
        </ul>
      </section>

      <BeforeAfter heading="Recent window and door work" />
      <ServiceGrid heading={`Services in ${county.county}`} />
      <CtaBand heading={`Get a quote in ${county.county}`} />
    </>
  )
}
