import Link from 'next/link'
import Em from './Em'
import Eyebrow from './Eyebrow'
import Img from './Img'
import Reveal from './Reveal'
import { config } from '@/lib/config'
import { hasImage } from '@/lib/images'

/**
 * The homepage service row: four photo cards with a large faint numeral, the
 * way the client's current site presents its services. A service with no
 * photo renders as a solid tile rather than borrowing an unrelated one.
 *
 * Homepage only. Inner pages keep components/ServiceGrid.tsx.
 */
export default function ServiceCards() {
  const services = config.services
  if (services.length === 0) return null
  return (
    <section className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>WHAT WE DO</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-primary-dark md:text-5xl">
            Every service, one accountable <Em>crew.</Em>
          </h2>
        </div>
        <Link href="/services" className="text-sm font-semibold text-accent hover:underline">
          Explore all services &rarr;
        </Link>
      </div>

      <Reveal className="mt-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative block overflow-hidden rounded-site bg-primary-dark"
            >
              <div className="relative aspect-[3/4]">
                {s.image && hasImage(s.image) ? (
                  <Img
                    name={s.image}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                  />
                ) : (
                  <div aria-hidden="true" className="absolute inset-0 bg-primary" />
                )}
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgb(0 0 0 / 0.1) 30%, rgb(0 0 0 / 0.82) 100%)' }}
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-3 right-4 font-heading text-5xl font-bold tabular-nums text-on-primary opacity-25"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4 text-on-primary">
                  <h3 className="font-heading text-lg font-bold leading-tight md:text-xl">{s.name}</h3>
                  <p className="mt-1 max-w-[18ch] text-xs leading-snug opacity-85">{s.shortDescription.split('.')[0]}.</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
