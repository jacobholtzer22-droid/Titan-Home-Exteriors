import type { Metadata } from 'next'
import BeforeAfter from '@/components/BeforeAfter'
import CtaBand from '@/components/CtaBand'
import Em from '@/components/Em'
import Eyebrow from '@/components/Eyebrow'
import FaqAccordion from '@/components/FaqAccordion'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import JsonLd from '@/components/JsonLd'
import ProcessStepper from '@/components/ProcessStepper'
import PromoBand from '@/components/PromoBand'
import Reveal from '@/components/Reveal'
import Reviews from '@/components/Reviews'
import ServiceAreaSection from '@/components/ServiceAreaSection'
import ServiceCards from '@/components/ServiceCards'
import TitanPromise from '@/components/TitanPromise'
import WhyTitan from '@/components/WhyTitan'
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

      <section className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <Eyebrow>TITAN HOME EXTERIORS</Eyebrow>
              <h2 className="mt-4 font-heading text-3xl font-bold text-primary-dark md:text-5xl">
                New windows and doors, installed by the people who <Em>answer the phone.</Em>
              </h2>
            </div>
            <article className="max-w-xl">{content}</article>
          </div>
        </Reveal>
      </section>

      <ServiceCards />
      <ProcessStepper />
      <WhyTitan />
      <BeforeAfter />
      <ServiceAreaSection />
      <PromoBand />
      <Gallery />
      <Reviews />
      <FaqAccordion faqs={config.faqs} />
      <TitanPromise />
      <CtaBand />
    </>
  )
}
