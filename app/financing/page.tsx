import type { Metadata } from 'next'
import CtaBand from '@/components/CtaBand'
import Eyebrow from '@/components/Eyebrow'
import FaqAccordion from '@/components/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { config } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { breadcrumbList, faqPage } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { FINANCE_FAQS as FAQS } from '../faq/financing-faqs'
import { FINANCE_DISCLAIMER } from './disclaimer'

const CONTENT = 'financing.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Financing', path: '/financing' },
]


const STEPS = [
  {
    title: 'Check your rate',
    detail:
      'Checking your rate with Momnt is a soft pull, so it does not affect your credit score. Most decisions come back the same day.',
  },
  {
    title: 'Pick a plan',
    detail:
      'Zero percent promotional offers are available to qualified buyers for a limited term. Standard rates apply after the promotional period, and there is no prepayment penalty.',
  },
  {
    title: 'Schedule the install',
    detail:
      'Once you are approved we book the measurement visit and the job runs exactly as it would have otherwise, through the same six stages.',
  },
]


export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({
    kind: 'other',
    title: `Window & Door Financing in ${config.primaryCity}`,
    path: '/financing',
    description: fm.description,
    image: fm.image,
  }).metadata
}

export default async function FinancingPage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={faqPage(FAQS)} />
      <JsonLd data={breadcrumbList(CRUMBS)} />

      <PageHero
        eyebrow="FINANCING"
        title="Pay for the work over time"
        emphasis="over time"
        intro="Zero percent promotional offers for qualified buyers, through a licensed consumer lending platform."
        crumbs={CRUMBS}
        secondary={{ href: '/services', label: 'See what we install' }}
      />

      <div className="mx-auto max-w-page px-4 sm:px-6">
        <article className="max-w-3xl pt-14">{content}</article>
        <p className="mt-6 max-w-3xl rounded-site border border-line bg-surface p-5 text-sm text-muted">
          {FINANCE_DISCLAIMER}
        </p>
      </div>

      <section className="mx-auto max-w-page px-4 py-16 sm:px-6">
        <Eyebrow>HOW IT WORKS</Eyebrow>
        <h2 className="mt-3 font-heading text-2xl font-bold text-primary-dark md:text-4xl">Three steps, no paperwork pile.</h2>
        <Reveal className="mt-8">
          <div className="grid gap-4 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.title} className="rounded-site border border-line bg-surface p-6">
                <span className="font-heading text-sm font-bold tabular-nums text-accent">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-heading text-lg font-bold text-primary-dark">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <FaqAccordion faqs={FAQS} heading="Financing questions" />

      <section className="mx-auto max-w-page px-4 pb-16 sm:px-6">
        <p className="max-w-3xl text-sm text-muted">{FINANCE_DISCLAIMER}</p>
      </section>

      <CtaBand heading="Ready to price the work?" />
    </>
  )
}
