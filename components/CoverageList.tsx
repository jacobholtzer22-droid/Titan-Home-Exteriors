import { config } from '@/lib/config'

/**
 * Every town served, grouped by county, as plain text. Renders nothing when
 * config.coverage is empty.
 *
 * Deliberately not links: config.serviceAreas is what gets a page each, and
 * linking every town would build a doorway-page cluster.
 */
export default function CoverageList({ heading = 'Where We Install' }: { heading?: string }) {
  const counties = config.coverage
  if (counties.length === 0) return null
  return (
    <section className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
      <h2 className="font-heading text-3xl font-bold text-primary-dark md:text-4xl">{heading}</h2>
      <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {counties.map((c) => (
          <div key={c.county}>
            <h3 className="font-heading text-lg font-semibold text-primary-dark">{c.county}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{c.towns.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
