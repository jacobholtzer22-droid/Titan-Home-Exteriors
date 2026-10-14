import type { Metadata } from 'next'
import CtaBand from '@/components/CtaBand'
import FaqAccordion from '@/components/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import { config } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import type { Faq } from '@/lib/config-schema'
import { breadcrumbList, faqPage } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { FINANCE_FAQS } from './financing-faqs'

const CONTENT = 'faq.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'FAQs', path: '/faq' },
]

/**
 * Every question on the site, grouped, pulled from config so there is one
 * source of truth. Nothing is retyped here: the service and product answers
 * are the same objects their own pages render, which is also what keeps the
 * single FAQPage block on this page honest.
 */
function groups(): { heading: string; faqs: readonly Faq[] }[] {
  const byService = (slug: string) => config.services.find((s) => s.slug === slug)?.faqs ?? []
  const byCategory = (cat: string) => config.products.filter((p) => p.category === cat).flatMap((p) => p.faqs)
  return [
    { heading: 'General', faqs: config.faqs },
    { heading: 'Windows', faqs: [...byService('window-replacement'), ...byCategory('windows')] },
    { heading: 'Impact and storm', faqs: byService('impact-windows-and-doors') },
    { heading: 'Doors', faqs: [...byService('entry-and-patio-doors'), ...byCategory('entry-doors'), ...byCategory('sliding-glass-doors')] },
    { heading: 'Siding', faqs: [...byService('siding-installation'), ...byCategory('siding')] },
    { heading: 'Financing', faqs: FINANCE_FAQS },
  ]
}

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'other', title: 'Window & Door FAQs', path: '/faq', description: fm.description, image: fm.image }).metadata
}

export default async function FaqPage() {
  const { content } = await loadContent(CONTENT)
  const sections = groups().filter((g) => g.faqs.length > 0)
  // One FAQPage block for the page, de-duplicated by question.
  const seen = new Set<string>()
  const all: Faq[] = []
  for (const g of sections) {
    for (const f of g.faqs) {
      if (seen.has(f.q)) continue
      seen.add(f.q)
      all.push(f)
    }
  }

  return (
    <>
      <JsonLd data={faqPage(all)} />
      <JsonLd data={breadcrumbList(CRUMBS)} />

      <PageHero
        eyebrow="FAQS"
        title="Answers, before you ask"
        emphasis="Answers,"
        intro={`What homeowners across ${config.primaryCity} and the rest of Tampa Bay ask us most.`}
        crumbs={CRUMBS}
        secondary={{ href: '/contact', label: 'Ask us directly' }}
      />

      <div className="mx-auto max-w-page px-4 sm:px-6">
        <article className="max-w-3xl pt-14">{content}</article>
      </div>

      {sections.map((g) => (
        <FaqAccordion key={g.heading} faqs={g.faqs} heading={g.heading} />
      ))}

      <CtaBand heading="Still deciding?" />
    </>
  )
}
