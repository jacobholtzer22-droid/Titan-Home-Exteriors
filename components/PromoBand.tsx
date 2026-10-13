import Link from 'next/link'
import { config } from '@/lib/config'

/**
 * The standing offer, from config.offer. Renders nothing when that is null.
 *
 * This is the one component allowed to show a price, because config is the one
 * place a price may be authored (verify check 7 scans content/ for bare
 * figures). No icon, no emoji, no gradient: it is a band of type and one button.
 */
export default function PromoBand({ href = '/contact' }: { href?: string }) {
  const offer = config.offer
  if (!offer) return null
  return (
    <section className="border-y border-line bg-primary-soft">
      <div className="mx-auto flex max-w-page flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:py-16">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-primary-dark md:text-3xl">{offer.headline}</h2>
          <p className="mt-3 text-base leading-relaxed text-ink">{offer.detail}</p>
          {offer.finePrint && <p className="mt-2 text-sm text-muted">{offer.finePrint}</p>}
        </div>
        <Link
          href={href}
          className="rounded-site bg-accent px-6 py-3.5 text-base font-semibold text-on-accent hover:bg-accent-dark"
        >
          Claim This Offer
        </Link>
      </div>
    </section>
  )
}
