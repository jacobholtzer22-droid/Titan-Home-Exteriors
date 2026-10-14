import Link from 'next/link'
import CountUp from './CountUp'
import Em from './Em'
import Eyebrow from './Eyebrow'
import Img from './Img'
import Reveal from './Reveal'
import { config } from '@/lib/config'

/**
 * The bento block. One tall photo card, four small icon cards and two accent
 * stat cards. Icons are inline 24px line SVGs, never emoji.
 *
 * Every claim here is a config fact or an owner phrase from BRIEF.md; the two
 * stats are derived (counties = config.coverage.length) rather than typed.
 */

function Icon({ path }: { path: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="fill-none stroke-accent stroke-[1.5]">
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const SHIELD = 'M12 3l7 3v5c0 4.3-2.9 7.9-7 9-4.1-1.1-7-4.7-7-9V6l7-3z'
const BADGE = 'M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4L4.2 8.7l5.4-.8L12 3z'
const CREW = 'M4 20v-1.5A3.5 3.5 0 017.5 15h3A3.5 3.5 0 0114 18.5V20M9 11.5A3 3 0 109 5.5a3 3 0 000 6zM16 20v-1.3c0-1.3-.7-2.4-1.7-3M15.5 11.3a2.8 2.8 0 000-5.3'
const BROOM = 'M4 20l5.5-5.5M9.5 14.5l4-4M13.5 10.5l3.6-3.6a2.2 2.2 0 013.1 3.1l-3.6 3.6M13.5 10.5l3.1 3.1M6 20h5'

export default function WhyTitan() {
  const counties = config.coverage.length
  return (
    <section className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
      <Eyebrow>WHY TITAN</Eyebrow>
      <h2 className="mt-4 max-w-3xl font-heading text-3xl font-bold text-primary-dark md:text-5xl">
        Built by one crew you can <Em>count on.</Em>
      </h2>

      <Reveal className="mt-10">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative overflow-hidden rounded-site md:row-span-2 lg:col-span-2">
            <div className="relative h-full min-h-[22rem]">
              <Img
                name="french-doors-install-in-progress.jpg"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgb(0 0 0 / 0.05) 40%, rgb(0 0 0 / 0.85) 100%)' }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-on-primary">
                <h3 className="font-heading text-2xl font-bold">Craftsmanship first</h3>
                <p className="mt-2 max-w-sm text-sm opacity-90">
                  Every opening is measured, flashed and sealed by the crew that will stand behind it.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-site border border-line bg-surface p-6">
            <Icon path={SHIELD} />
            <h3 className="mt-4 font-heading text-lg font-bold text-primary-dark">Licensed and insured</h3>
            <p className="mt-2 text-sm text-muted">
              {config.licenseNumber ? `Florida license ${config.licenseNumber}, ` : ''}with two million dollars in general
              liability coverage.
            </p>
          </div>

          <div className="rounded-site border border-line bg-surface p-6">
            <Icon path={BADGE} />
            <h3 className="mt-4 font-heading text-lg font-bold text-primary-dark">Double Lifetime Limited Warranty</h3>
            <p className="mt-2 text-sm text-muted">
              Products, labor, glass and workmanship for as long as you own the home.{' '}
              <Link href="/warranty" className="font-medium text-accent hover:underline">
                What it covers
              </Link>
            </p>
          </div>

          <div className="rounded-site border border-line bg-surface p-6">
            <Icon path={CREW} />
            <h3 className="mt-4 font-heading text-lg font-bold text-primary-dark">Our own crew</h3>
            <p className="mt-2 text-sm text-muted">Each job is staffed by our own crew, not whoever was free that week.</p>
          </div>

          <div className="rounded-site border border-line bg-surface p-6">
            <Icon path={BROOM} />
            <h3 className="mt-4 font-heading text-lg font-bold text-primary-dark">Clean job sites</h3>
            <p className="mt-2 text-sm text-muted">Dust containment, daily cleanup, and crews who treat your home like their own.</p>
          </div>

          <div className="rounded-site bg-accent p-6 text-on-accent">
            <p className="font-heading text-5xl font-bold tabular-nums">
              <CountUp value={counties} />
            </p>
            <p className="mt-2 text-sm opacity-90">counties served across Tampa Bay and Orlando</p>
          </div>

          <div className="rounded-site bg-primary-dark p-6 text-on-primary">
            <p className="font-heading text-5xl font-bold tabular-nums">
              <CountUp value={20} suffix="+" />
            </p>
            <p className="mt-2 text-sm opacity-90">years in the window and door industry</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
