import Link from 'next/link'
import Button from './Button'
import Em from './Em'
import Eyebrow from './Eyebrow'
import { config, countySlug } from '@/lib/config'

/**
 * Where we work: the eight town pages and the seven county pages as links,
 * beside a keyless Google Maps embed of the office. The embed is a plain
 * maps.google.com iframe, lazy, so it costs nothing until it scrolls in and
 * needs no API key to maintain.
 */
export default function ServiceAreaSection() {
  const address = config.address
  const q = address ? `${address.street}, ${address.city}, ${address.state} ${address.zip}` : config.primaryCity
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=10&output=embed`

  return (
    <section className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>SERVICE AREA</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-primary-dark md:text-5xl">
            Proudly serving homeowners across <Em>Florida</Em>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink">
            We install across seven counties from our office in {config.primaryCity}. If your town is on this list, we can
            quote it. If it is not, call and ask rather than guessing.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
            {config.serviceAreas.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="text-sm text-ink hover:text-accent">
                {a.name}, {config.primaryState}
              </Link>
            ))}
            {config.coverage.map((c) => (
              <Link key={c.county} href={`/counties/${countySlug(c.county)}`} className="text-sm text-muted hover:text-accent">
                {c.county}
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/areas" variant="secondary">
              Check availability in your town
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-site border border-line">
          <iframe
            src={mapSrc}
            title={`Map of ${config.displayName} in ${config.primaryCity}, ${config.primaryState}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[22rem] w-full border-0"
          />
        </div>
      </div>
    </section>
  )
}
