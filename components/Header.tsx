'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { config } from '@/lib/config'
import theme from '@/theme'

/**
 * Floating pill nav, mirroring the client's current site: a rounded dark bar
 * sitting 16px below the top edge over the hero, solidifying on scroll, with
 * hover/click dropdowns for Services, Products and Areas.
 *
 * Client component because it owns scroll state, the open dropdown and the
 * mobile drawer. Every label and href is derived from config; no business
 * fact is typed here.
 */

interface NavChild {
  href: string
  label: string
}
interface NavItem {
  href: string
  label: string
  groups?: { title: string; items: NavChild[] }[]
}

const PRODUCT_CATEGORIES: { key: string; title: string }[] = [
  { key: 'windows', title: 'Windows' },
  { key: 'sliding-glass-doors', title: 'Sliding Glass Doors' },
  { key: 'entry-doors', title: 'Entry Doors' },
  { key: 'siding', title: 'Siding' },
]

function buildNav(): NavItem[] {
  return [
    { href: '/', label: 'Home' },
    {
      href: '/services',
      label: 'Services',
      groups: [
        { title: 'Services', items: config.services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })) },
      ],
    },
    {
      href: '/products',
      label: 'Products',
      groups: PRODUCT_CATEGORIES.map((c) => ({
        title: c.title,
        items: config.products
          .filter((p) => p.category === c.key)
          .map((p) => ({ href: `/products/${p.slug}`, label: p.name })),
      })).filter((g) => g.items.length > 0),
    },
    {
      href: '/areas',
      label: 'Areas',
      groups: [
        {
          title: 'Counties we serve',
          items: config.coverage.map((c) => ({ href: `/counties/${countySlug(c.county)}`, label: c.county })),
        },
        { title: 'Cities we serve', items: config.serviceAreas.map((a) => ({ href: `/areas/${a.slug}`, label: `${a.name}, ${config.primaryState}` })) },
      ],
    },
    { href: '/warranty', label: 'Warranty' },
    { href: '/financing', label: 'Financing' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQs' },
    { href: '/contact', label: 'Contact' },
  ]
}

/** "Hillsborough County" -> "hillsborough". Mirrors lib/config.countySlug. */
function countySlug(county: string): string {
  return county.replace(/\s*County$/i, '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function BrandMark() {
  if (theme.logo) return <img src={theme.logo.src} alt={theme.logo.alt} className="h-9 w-auto" />
  const space = config.displayName.indexOf(' ')
  const first = space === -1 ? config.displayName : config.displayName.slice(0, space)
  const rest = space === -1 ? '' : config.displayName.slice(space + 1)
  return (
    <span className="block leading-none">
      <span className="block font-heading text-lg font-bold tracking-[0.25em] text-accent">{first.toUpperCase()}</span>
      {rest && <span className="mt-0.5 block text-[0.55rem] tracking-[0.3em] text-on-primary opacity-80">{rest.toUpperCase()}</span>}
    </span>
  )
}

export default function Header() {
  const NAV = buildNav()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  const [drawer, setDrawer] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(null)
        setDrawer(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawer])

  const hoverOpen = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(label)
  }
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(null), 120)
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto max-w-page px-4 pt-4 sm:px-6">
        <div
          className={[
            'flex items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-colors duration-300 sm:px-5',
            solid ? 'border-white/10 bg-primary-dark shadow-site' : 'border-white/10 bg-primary-dark/80 backdrop-blur',
          ].join(' ')}
        >
          <Link href="/" aria-label={config.displayName} className="shrink-0">
            <BrandMark />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              item.groups ? (
                <div key={item.href} className="relative" onMouseEnter={() => hoverOpen(item.label)} onMouseLeave={hoverClose}>
                  <button
                    type="button"
                    aria-expanded={open === item.label}
                    aria-haspopup="true"
                    onClick={() => setOpen(open === item.label ? null : item.label)}
                    className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-on-primary opacity-80 transition-opacity hover:opacity-100"
                  >
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="mt-0.5 fill-none stroke-current stroke-[1.5]">
                      <path d="M2 4l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {open === item.label && (
                    <div className="absolute left-1/2 top-full z-50 w-max max-w-[44rem] -translate-x-1/2 pt-3">
                      <div className="grid gap-6 rounded-site border border-line bg-surface p-6 shadow-site sm:grid-cols-2">
                        {item.groups.map((g) => (
                          <div key={g.title}>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{g.title}</p>
                            <ul className="mt-3 space-y-1.5">
                              {g.items.map((c) => (
                                <li key={c.href}>
                                  <Link href={c.href} onClick={() => setOpen(null)} className="block text-sm text-ink hover:text-accent">
                                    {c.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="sm:col-span-2">
                          <Link href={item.href} onClick={() => setOpen(null)} className="text-sm font-semibold text-accent hover:underline">
                            All {item.label} &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-on-primary opacity-80 transition-opacity hover:opacity-100"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={`tel:${config.phone}`}
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-dark"
            >
              Call Now
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={drawer}
              onClick={() => setDrawer(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-on-primary lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="stroke-current stroke-[1.6]">
                <path d="M2 5h14M2 9h14M2 13h14" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {drawer && (
        <div className="pointer-events-auto fixed inset-0 z-50 overflow-y-auto bg-primary-dark text-on-primary lg:hidden">
          <div className="flex items-center justify-between px-4 pt-6 sm:px-6">
            <BrandMark />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setDrawer(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="stroke-current stroke-[1.6]">
                <path d="M4 4l10 10M14 4L4 14" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav aria-label="Main mobile" className="px-4 pb-24 pt-8 sm:px-6">
            <ul className="space-y-5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setDrawer(false)} className="font-heading text-2xl font-bold">
                    {item.label}
                  </Link>
                  {item.groups?.map((g) => (
                    <div key={g.title} className="mt-3 pl-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{g.title}</p>
                      <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5">
                        {g.items.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} onClick={() => setDrawer(false)} className="block text-sm opacity-80">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
