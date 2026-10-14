import type { Metadata } from 'next'
import Link from 'next/link'
import CoverageList from '@/components/CoverageList'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import { config, countySlug } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'counties.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Counties', path: '/counties' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'other', title: 'Counties We Serve', path: '/counties', description: fm.description, image: fm.image }).metadata
}

export default async function CountiesIndexPage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHero
        eyebrow="SERVICE AREA"
        title="Seven counties across Tampa Bay and Orlando"
        emphasis="Seven"
        intro={`Window and door installation from our office in ${config.primaryCity}, across Tampa Bay and into Orlando.`}
        crumbs={CRUMBS}
        secondary={{ href: '/areas', label: 'Browse by town' }}
      />
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <article className="max-w-3xl pt-14">{content}</article>
      </div>

      <section className="mx-auto max-w-page px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.coverage.map((c) => (
            <Link
              key={c.county}
              href={`/counties/${countySlug(c.county)}`}
              className="rounded-site border border-line bg-surface p-6 transition-colors hover:border-accent"
            >
              <h2 className="font-heading text-xl font-bold text-primary-dark">{c.county}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {c.towns.slice(0, 4).join(', ')}
                {c.towns.length > 4 ? ` and ${c.towns.length - 4} more` : ''}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CoverageList />
      <CtaBand />
    </>
  )
}
