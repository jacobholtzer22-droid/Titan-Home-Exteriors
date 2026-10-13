import { config } from '@/lib/config'
import { getImage } from '@/lib/images'
import Img from './Img'

type Pair = (typeof config.images.beforeAfter)[number]

/**
 * Before and after pairs from config.images.beforeAfter. Renders nothing when
 * there are none.
 *
 * Both halves of a pair share ONE aspect ratio, taken from the "before" shot,
 * and both fill it with object-cover. That is deliberate: the client's befores
 * are phone portraits and the afters are landscape, so anything that preserves
 * both ratios either crops the before (which is the frame the pair exists to
 * show) or letterboxes it, and a pale letterbox reads as a broken image. The
 * after is the frame that can afford a crop, because the viewer already knows
 * what they are looking at by the time they reach it.
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
        {rows.map((pair) => {
          const before = getImage(pair.before)
          const ratio = `${before.width} / ${before.height}`
          return (
            <div key={`${pair.before}-${pair.after}`}>
              <div className="grid gap-3 sm:grid-cols-2">
                {([['Before', pair.before], ['After', pair.after]] as const).map(([label, name]) => (
                  <figure
                    key={name}
                    style={{ aspectRatio: ratio }}
                    className="relative overflow-hidden rounded-site border border-line"
                  >
                    <Img name={name} sizes="(min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover" />
                    <figcaption className="absolute left-0 top-0 bg-primary-dark px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-on-primary">
                      {label}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-3 text-base text-muted">{pair.caption}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
