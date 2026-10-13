import { config } from '@/lib/config'
import Img from './Img'

/**
 * config.images.gallery on a full-dark section: the homepage's guaranteed
 * change of visual treatment. Nothing renders when the list is empty.
 */
export default function Gallery({ heading = 'Recent Work' }: { heading?: string }) {
  const images = config.images.gallery
  if (images.length === 0) return null
  return (
    <section className="bg-primary-dark text-on-primary">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">{heading}</h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* One ratio for every tile. The feature cell that used to span 2x2
              left the last row half empty and made five different source
              ratios read as a ragged collage. */}
          {images.map((name) => (
            <figure key={name} className="overflow-hidden rounded-site">
              <Img
                name={name}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
