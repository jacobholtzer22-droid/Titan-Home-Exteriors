import type { Metadata } from 'next'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import PromoBand from '@/components/PromoBand'
import { loadContent, readFrontmatter } from '@/lib/content'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'warranty.mdx'
const TITLE = 'Lifetime Window & Door Warranty'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Warranty', path: '/warranty' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'other', title: TITLE, path: '/warranty', description: fm.description, image: fm.image }).metadata
}

export default async function WarrantyPage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHero
        eyebrow="WARRANTY"
        title="Double Lifetime Limited Warranty"
        emphasis="Lifetime"
        intro="Products, labor, glass and installation workmanship, for as long as you own the home."
        crumbs={CRUMBS}
        secondary={{ href: '/services', label: 'See what we install' }}
      />
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <article className="max-w-3xl pt-10">{content}</article>
      </div>
      <PromoBand />
      <CtaBand />
    </>
  )
}
