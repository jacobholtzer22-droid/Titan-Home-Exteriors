import type { Metadata } from 'next'
import Link from 'next/link'
import CoverageList from '@/components/CoverageList'
import CtaBand from '@/components/CtaBand'
import Eyebrow from '@/components/Eyebrow'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import { config, countySlug } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { breadcrumbList, localBusiness } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'areas.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Service Areas', path: '/areas' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'other', title: 'Service Areas in Tampa Bay', path: '/areas', description: fm.description, image: fm.image }).metadata
}

export default async function AreasIndexPage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={localBusiness()} />
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHero
        eyebrow="SERVICE AREA"
        title={`Where ${config.displayName} installs`}
        emphasis="installs"
        intro="Eight towns with their own page, seven counties, and every town in between."
        crumbs={CRUMBS}
        secondary={{ href: '/counties', label: 'Browse by county' }}
      />
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <article className="max-w-3xl pt-14">{content}</article>
      </div>

      <section className="mx-auto max-w-page px-4 py-12 sm:px-6">
        <Eyebrow>TOWNS</Eyebrow>
        <h2 className="mt-3 font-heading text-2xl font-bold text-primary-dark md:text-4xl">Towns with their own page</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {config.serviceAreas.map((a) => (
            <Link
              key={a.slug}
              href={`/areas/${a.slug}`}
              className="rounded-site border border-line bg-surface p-5 transition-colors hover:border-accent"
            >
              <h3 className="font-heading text-lg font-bold text-primary-dark">
                {a.name}, {config.primaryState}
              </h3>
              {a.county && <p className="mt-1 text-sm text-muted">{a.county}</p>}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 py-12 sm:px-6">
        <Eyebrow>COUNTIES</Eyebrow>
        <h2 className="mt-3 font-heading text-2xl font-bold text-primary-dark md:text-4xl">Counties we cover</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {config.coverage.map((c) => (
            <Link
              key={c.county}
              href={`/counties/${countySlug(c.county)}`}
              className="rounded-site border border-line bg-surface p-5 transition-colors hover:border-accent"
            >
              <h3 className="font-heading text-lg font-bold text-primary-dark">{c.county}</h3>
              <p className="mt-1 text-sm text-muted">{c.towns.length} towns</p>
            </Link>
          ))}
        </div>
      </section>

      <CoverageList />
      <CtaBand />
    </>
  )
}
