import Link from 'next/link'
import Button from './Button'
import Em from './Em'
import Img from './Img'
import { config } from '@/lib/config'
import { pageHeroScrimCss } from '@/lib/hero-scrim'
import { hasImage } from '@/lib/images'
import type { Crumb } from '@/lib/schema'

/**
 * The interior-page hero: a shorter full-bleed photo with the same scrim as
 * the homepage, breadcrumbs, an eyebrow, the serif H1 and two pill buttons.
 * Replaces the old PageHeader everywhere, because the nav now floats over the
 * top of the page and needs something dark to sit on.
 *
 * Copy sits in the bottom third, which is where the scrim is darkest.
 */
export default function PageHero({
  eyebrow,
  title,
  emphasis,
  intro,
  image,
  crumbs,
  primary = { href: '/contact#contact-form', label: 'Request a Free Estimate' },
  secondary,
}: {
  eyebrow: string
  title: string
  /** The one word of the title set in accent italic. Must appear in `title`. */
  emphasis?: string
  intro?: string
  image?: string | null
  crumbs?: readonly Crumb[]
  primary?: { href: string; label: string }
  secondary?: { href: string; label: string }
}) {
  const name = image && hasImage(image) ? image : config.images.hero
  const parts = emphasis && title.includes(emphasis) ? title.split(emphasis) : null

  return (
    <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-primary-dark text-on-primary">
      {name && <Img name={name} priority sizes="100vw" className="absolute inset-0 z-0 h-full w-full object-cover" />}
      <div aria-hidden="true" className="absolute inset-0 z-[1]" style={{ background: pageHeroScrimCss().vertical }} />
      <div aria-hidden="true" className="absolute inset-0 z-[1]" style={{ background: pageHeroScrimCss().horizontal }} />
      <div className="relative z-10 mx-auto w-full max-w-page px-4 pb-14 pt-32 sm:px-6 md:pb-20 md:pt-40">
        {crumbs && crumbs.length > 1 && (
          <nav aria-label="Breadcrumb" className="mb-4 text-xs opacity-75">
            <ol className="flex flex-wrap gap-2">
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex gap-2">
                  {i < crumbs.length - 1 ? (
                    <Link href={c.path} className="hover:underline">
                      {c.name}
                    </Link>
                  ) : (
                    <span aria-current="page">{c.name}</span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-[1.05] md:text-6xl">
          {parts ? (
            <>
              {parts[0]}
              <Em>{emphasis}</Em>
              {parts.slice(1).join(emphasis)}
            </>
          ) : (
            title
          )}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-lg opacity-90">{intro}</p>}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={primary.href}>{primary.label}</Button>
          {secondary && (
            <Button href={secondary.href} variant="secondary" onDark>
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
