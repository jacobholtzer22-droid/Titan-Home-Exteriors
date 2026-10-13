import type { Metadata } from 'next'
import AreaList from '@/components/AreaList'
import BeforeAfter from '@/components/BeforeAfter'
import CtaBand from '@/components/CtaBand'
import FaqAccordion from '@/components/FaqAccordion'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import JsonLd from '@/components/JsonLd'
import PromoBand from '@/components/PromoBand'
import Reviews from '@/components/Reviews'
import ServiceGrid from '@/components/ServiceGrid'
import { config } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { faqPage, localBusiness, organization, website } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'home.mdx'

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'home', path: '/', description: fm.description, image: fm.image }).metadata
}

export default async function HomePage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={localBusiness()} />
      <JsonLd data={organization()} />
      <JsonLd data={website()} />
      <JsonLd data={faqPage(config.faqs)} />

      <Hero />
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <article className="max-w-3xl pt-16">{content}</article>
      </div>
      <BeforeAfter />
      <ServiceGrid />
      <PromoBand />
      <Gallery />
      <Reviews />
      <AreaList />
      <FaqAccordion faqs={config.faqs} />
      <CtaBand />
    </>
  )
}
