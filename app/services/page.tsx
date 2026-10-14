import type { Metadata } from 'next'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import ServiceGrid from '@/components/ServiceGrid'
import { config } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'services.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'services', path: '/services', description: fm.description, image: fm.image }).metadata
}

export default async function ServicesIndexPage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHero
        eyebrow="SERVICES"
        title={`Window and Door Services in ${config.primaryCity}`}
        emphasis="Services"
        intro="Four services, one crew, with the county permit pulled and the inspection booked on every job."
        crumbs={CRUMBS}
        secondary={{ href: '/products', label: 'Browse products' }}
      />
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <article className="max-w-3xl pt-14">{content}</article>
      </div>
      <ServiceGrid heading="Everything We Offer" />
      <CtaBand />
    </>
  )
}
