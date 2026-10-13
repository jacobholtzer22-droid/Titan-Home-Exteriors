import { config } from '@/lib/config'
import Img from './Img'

type Pair = (typeof config.images.beforeAfter)[number]

/**
 * Before and after pairs from config.images.beforeAfter. Renders nothing when
 * there are none.
 *
 * A service page passes `pairs` to show only the jobs relevant to it; the
 * homepage passes nothing and shows all of them. Labels are text, never icons.
 */
export default function BeforeAfter({ pairs, heading = 'Before and After' }: { pairs?: Pair[]; heading?: string }) {
  const rows = pairs ?? config.images.beforeAfter
  if (rows.length === 0) return null
  return (
    <section className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
      <h2 className="font-heading text-3xl font-bold text-primary-dark md:text-4xl">{heading}</h2>
      <div className="mt-10 space-y-12">
        {rows.map((pair) => (
          <div key={`${pair.before}-${pair.after}`}>
            <div className="grid gap-3 sm:grid-cols-2">
              {([['Before', pair.before], ['After', pair.after]] as const).map(([label, name]) => (
                <figure key={name} className="relative overflow-hidden rounded-site border border-line">
                  <Img name={name} sizes="(min-width: 640px) 50vw, 100vw" className="aspect-[4/3] h-auto w-full object-cover" />
                  <figcaption className="absolute left-0 top-0 bg-primary-dark px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-on-primary">
                    {label}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-3 text-base text-muted">{pair.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
