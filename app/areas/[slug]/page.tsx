import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AreaList from '@/components/AreaList'
import BeforeAfter from '@/components/BeforeAfter'
import CoverageList from '@/components/CoverageList'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import ServiceGrid from '@/components/ServiceGrid'
import Link from 'next/link'
import { config, countySlug, getArea } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { breadcrumbList, localBusiness } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

/**
 * One page per service area, listing every service, with content specific to
 * that area. Deliberately NOT a service-by-area matrix: eight services times
 * twelve towns is a doorway-page pattern that gets sites demoted.
 */
export function generateStaticParams() {
  return config.serviceAreas.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const area = getArea(params.slug)
  if (!area) return {}
  const fm = readFrontmatter(`areas/${area.slug}.mdx`)
  return buildMetadata({ kind: 'area', area, path: `/areas/${area.slug}`, description: fm.description, image: fm.image }).metadata
}

export default async function AreaPage({ params }: { params: { slug: string } }) {
  const area = getArea(params.slug)
  if (!area) notFound()
  const { content } = await loadContent(`areas/${area.slug}.mdx`, { area })
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: `${area.name}, ${config.primaryState}`, path: `/areas/${area.slug}` },
  ]

  return (
    <>
      <JsonLd data={localBusiness([area])} />
      <JsonLd data={breadcrumbList(crumbs)} />

      <PageHero
        eyebrow={`SERVICE AREA · ${area.name.toUpperCase()}`}
        title={`${config.primaryService.name} in ${area.name}, ${config.primaryState}`}
        emphasis={area.name}
        intro={area.county ? `Serving ${area.name} and the rest of ${area.county}.` : undefined}
        crumbs={crumbs}
        secondary={{ href: '/areas', label: 'All service areas' }}
      />
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <article className="max-w-3xl pt-10">{content}</article>
      </div>
      {area.county && (
        <section className="mx-auto max-w-page px-4 pb-4 sm:px-6">
          <p className="text-sm text-muted">
            {area.name} sits in{' '}
            <Link href={`/counties/${countySlug(area.county)}`} className="font-medium text-accent hover:underline">
              {area.county}
            </Link>
            . See every town we install in there, or browse{' '}
            <Link href="/areas" className="font-medium text-accent hover:underline">
              all of our service areas
            </Link>
            .
          </p>
        </section>
      )}

      <BeforeAfter heading="Recent window and door work" />
      <ServiceGrid heading={`Services in ${area.name}`} />
      <AreaList heading="Nearby Areas" exclude={area.slug} />
      <CoverageList />
      <CtaBand heading={`Get a quote in ${area.name}`} />
    </>
  )
}
