import Button from './Button'
import Credentials from './Credentials'
import Em from './Em'
import HeroSlideshow from './HeroSlideshow'
import Img from './Img'
import Phone from './Phone'
import { config } from '@/lib/config'
import { HERO_EYEBROW_OPACITY, HERO_TAGLINE_OPACITY, heroScrimCss } from '@/lib/hero-scrim'
import theme from '@/theme'

/**
 * Homepage hero. Owns the page's single <h1>. Layout comes from
 * theme.heroVariant; every word comes from config.
 *
 * 'full-bleed': the client photograph under a dark scrim with a crossfading
 * slideshow over it, headline and buttons left-aligned in the lower third.
 * 'split': large photo one side, oversized type the other, for photography
 * that cannot carry a full bleed.
 *
 * The first slide is rendered server-side as a plain <Img priority> in both
 * branches, so it stays the LCP element and the frame check 19 measures.
 */

/** The three widest photos, in the order they crossfade. First is images.hero. */
export const HERO_SLIDES = [
  'patio-windows-glass-door-after.jpg',
  'lanai-sliding-glass-doors-after.jpg',
  'side-sliding-window-after.jpg',
]

function Headline({ onDark }: { onDark: boolean }) {
  // "Window Replacement in Tampa, FL" -> "Window <Em>Replacement</Em> in Tampa, FL"
  const name = config.primaryService.name
  const words = name.split(' ')
  const accent = words.length > 1 ? words[words.length - 1] : name
  const lead = words.length > 1 ? words.slice(0, -1).join(' ') : ''
  return (
    <h1
      className={`mt-4 max-w-4xl font-heading text-hero font-bold ${onDark ? '' : 'text-primary-dark'}`}
    >
      {lead && `${lead} `}
      <Em>{accent}</Em> in {config.primaryCity}, {config.primaryState}
    </h1>
  )
}

function Cta({ onDark }: { onDark: boolean }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <Button href="/contact#contact-form">Request a Free Estimate</Button>
      <Button href="/services" variant="secondary" onDark={onDark}>
        Explore Services
      </Button>
    </div>
  )
}

export default function Hero() {
  const hero = config.images.hero
  const slides = HERO_SLIDES.filter((n) => n !== hero)

  if (theme.heroVariant === 'full-bleed' && hero) {
    return (
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-primary-dark text-on-primary">
        <Img name={hero} priority sizes="100vw" className="absolute inset-0 z-0 h-full w-full object-cover" />
        <HeroSlideshow names={[hero, ...slides]} />
        <div aria-hidden="true" className="absolute inset-0 z-[1]" style={{ background: heroScrimCss() }} />
        <div className="relative z-10 mx-auto w-full max-w-page px-4 pb-16 pt-44 sm:px-6 md:pb-24">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ opacity: HERO_EYEBROW_OPACITY }}
          >
            WINDOW &amp; DOOR INSTALLATION &middot; TAMPA BAY, FL
          </p>
          <Headline onDark />
          <p className="mt-6 max-w-2xl text-lg md:text-xl" style={{ opacity: HERO_TAGLINE_OPACITY }}>
            {config.tagline}
          </p>
          <Cta onDark />
          <Credentials className="mt-10" tone="light" />
          <div aria-hidden="true" className="mt-12 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] opacity-70">
            Scroll
            <span className="hero-scroll-line block h-px w-14 bg-current" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative bg-bg pt-28">
      <div className="mx-auto grid max-w-page items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-5 md:py-24">
        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            WINDOW &amp; DOOR INSTALLATION &middot; TAMPA BAY, FL
          </p>
          <Headline onDark={false} />
          <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">{config.tagline}</p>
          <Cta onDark={false} />
          <Credentials className="mt-10" />
          <p className="mt-6 text-sm text-muted">
            or call <Phone className="text-primary-dark" />
          </p>
        </div>
        {hero && (
          <div className="relative overflow-hidden rounded-site shadow-site md:col-span-2">
            <div className="relative aspect-[4/5]">
              <Img name={hero} priority sizes="(min-width: 768px) 40vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
              <HeroSlideshow names={[hero, ...slides]} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
