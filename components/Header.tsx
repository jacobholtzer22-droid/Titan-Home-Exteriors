import Link from 'next/link'
import { config } from '@/lib/config'
import theme from '@/theme'
import Phone from './Phone'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/warranty', label: 'Warranty' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

/**
 * The brand mark. `theme.logo` wins when it is set; otherwise the display name
 * renders as a two-line wordmark, first word over the rest, which is the shape
 * most trade logos already use. The name is never typed here: it is split from
 * config.displayName, so this component carries no business fact.
 */
// Note: text-on-primary/80 emits no CSS here. The palette resolves to
// var(--c-*) values, which Tailwind cannot apply an alpha modifier to (see the
// comment in tailwind.config.ts), so dimming is done with opacity-80, the same
// way components/Footer.tsx does it.
function BrandMark() {
  if (theme.logo) {
    return <img src={theme.logo.src} alt={theme.logo.alt} className="h-10 w-auto" />
  }
  const space = config.displayName.indexOf(' ')
  const first = space === -1 ? config.displayName : config.displayName.slice(0, space)
  const rest = space === -1 ? '' : config.displayName.slice(space + 1)
  return (
    <span className="block leading-none">
      <span className="block font-heading text-xl font-bold tracking-[0.25em] text-accent">{first.toUpperCase()}</span>
      {rest && <span className="mt-1 block text-[0.65rem] tracking-[0.3em] text-on-primary opacity-80">{rest.toUpperCase()}</span>}
    </span>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-primary-dark text-on-primary">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" aria-label={config.displayName}>
          <BrandMark />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-on-primary opacity-80 hover:opacity-100">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Phone className="hidden text-sm text-on-primary sm:inline" />
          <Link
            href="/contact"
            className="rounded-site bg-accent px-4 py-2 text-sm font-semibold text-on-accent hover:bg-accent-dark"
          >
            Free Estimate
          </Link>
        </div>
      </div>
      <nav aria-label="Main mobile" className="flex justify-center gap-5 border-t border-white/10 px-4 py-2 md:hidden">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm font-medium text-on-primary opacity-80 hover:opacity-100">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
