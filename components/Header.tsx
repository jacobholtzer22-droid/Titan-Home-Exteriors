'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { config, countySlug } from '@/lib/config'
import { getImage, hasImage } from '@/lib/images'
import { PRODUCT_CATEGORIES } from '@/lib/product-categories'
import theme from '@/theme'
import NavIcon, { type NavIconName } from './NavIcons'
import { Caret, Panel, PanelEyebrow, PanelRow } from './NavPanel'

/**
 * Floating pill nav, mirroring the client's current site: a rounded dark bar
 * sitting below the top edge over the hero, solidifying on scroll, with
 * animated menu panels for Services, Products and Areas.
 *
 * Everything in a panel comes from config. The only strings typed here are
 * nav labels and the two panel call-to-action lines.
 *
 * Open/close: `menu` is the logical state; `mounted` keeps a closing panel in
 * the DOM for the 120ms exit so the animation can run. Hover opens after a
 * 120ms intent delay so crossing the bar does not strobe panels open.
 */

const INTENT_MS = 120
const CLOSE_MS = 120

const CATEGORY_ICON: Record<string, NavIconName> = {
  windows: 'window',
  'sliding-glass-doors': 'door',
  'entry-doors': 'door',
  siding: 'siding',
}

/** Service slug -> icon. Falls back to a window for anything new. */
function serviceIcon(slug: string): NavIconName {
  if (slug.includes('impact')) return 'shield'
  if (slug.includes('door')) return 'door'
  if (slug.includes('siding')) return 'siding'
  return 'window'
}

const FLAT_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/warranty', label: 'Warranty' },
  { href: '/financing', label: 'Financing' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
]
const MENUS = ['Services', 'Products', 'Areas'] as const
type MenuName = (typeof MENUS)[number]

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
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState<MenuName | null>(null)
  const [mounted, setMounted] = useState<MenuName | null>(null)
  const [shown, setShown] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const [section, setSection] = useState<MenuName | null>(null)
  const intent = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setReduced(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false)
    const onScroll = () => setSolid(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mount on open, unmount after the exit transition on close.
  useEffect(() => {
    if (closer.current) clearTimeout(closer.current)
    if (menu) {
      setMounted(menu)
      const id = requestAnimationFrame(() => setShown(true))
      return () => cancelAnimationFrame(id)
    }
    setShown(false)
    closer.current = setTimeout(() => setMounted(null), reduced ? 0 : CLOSE_MS)
    return undefined
  }, [menu, reduced])

  const close = useCallback(() => {
    if (intent.current) clearTimeout(intent.current)
    setMenu(null)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      close()
      setDrawer(false)
    }
    const onDown = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) close()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDown)
    }
  }, [close])

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawer])

  const hoverOpen = (name: MenuName) => {
    if (intent.current) clearTimeout(intent.current)
    intent.current = setTimeout(() => setMenu(name), INTENT_MS)
  }
  const hoverLeave = () => {
    if (intent.current) clearTimeout(intent.current)
    intent.current = setTimeout(() => setMenu(null), INTENT_MS)
  }

  /** Arrow keys walk the rows of the open panel; Escape is handled globally. */
  const onPanelKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    const rows = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('[data-nav-row]'))
    if (rows.length === 0) return
    e.preventDefault()
    const i = rows.indexOf(document.activeElement as HTMLElement)
    const next = e.key === 'ArrowDown' ? (i + 1) % rows.length : (i - 1 + rows.length) % rows.length
    rows[next === -1 ? 0 : next]?.focus()
  }

  /** Tabbing out of the whole group closes it. */
  const onBlurCapture = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) close()
  }

  const productsImage = hasImage('bronze-sliding-glass-door-patio.jpg') ? getImage('bronze-sliding-glass-door-patio.jpg') : null

  const trigger = (name: MenuName, href: string) => (
    <button
      type="button"
      aria-expanded={menu === name}
      aria-haspopup="true"
      onClick={() => setMenu(menu === name ? null : name)}
      className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-on-primary opacity-80 transition-opacity hover:opacity-100"
    >
      {name}
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        aria-hidden="true"
        className={[
          'mt-0.5 fill-none stroke-current stroke-[1.5]',
          reduced ? '' : 'transition-transform duration-200',
          menu === name ? 'rotate-180' : 'rotate-0',
        ].join(' ')}
      >
        <path d="M2 4l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )

  return (
    <header ref={navRef} className="pointer-events-none fixed inset-x-0 top-0 z-50">
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
            <Link href="/" className="rounded-full px-3 py-1.5 text-sm font-medium text-on-primary opacity-80 transition-opacity hover:opacity-100">
              Home
            </Link>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => hoverOpen('Services')}
              onMouseLeave={hoverLeave}
              onBlurCapture={onBlurCapture}
              onKeyDown={onPanelKeyDown}
            >
              {trigger('Services', '/services')}
              {mounted === 'Services' && <Caret shown={shown} reduced={reduced} />}
              {mounted === 'Services' && (
                <Panel shown={shown} reduced={reduced} className="w-[30rem]">
                  <div className="grid gap-0.5">
                    {config.services.map((s, i) => (
                      <PanelRow
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        icon={serviceIcon(s.slug)}
                        label={s.name}
                        description={s.shortDescription}
                        index={i}
                        shown={shown}
                        reduced={reduced}
                        onNavigate={close}
                      />
                    ))}
                  </div>
                  <div className="mt-2 border-t border-white/10 pt-2">
                    <PanelRow
                      href="/services"
                      icon="arrow"
                      label="All services"
                      index={config.services.length}
                      shown={shown}
                      reduced={reduced}
                      onNavigate={close}
                    />
                  </div>
                </Panel>
              )}
            </div>

            {/* PRODUCTS */}
            <div
              className="relative"
              onMouseEnter={() => hoverOpen('Products')}
              onMouseLeave={hoverLeave}
              onBlurCapture={onBlurCapture}
              onKeyDown={onPanelKeyDown}
            >
              {trigger('Products', '/products')}
              {mounted === 'Products' && <Caret shown={shown} reduced={reduced} />}
              {mounted === 'Products' && (
                <Panel shown={shown} reduced={reduced} wide className="w-[min(72rem,calc(100vw-2rem))]">
                  <div className="grid gap-4 lg:grid-cols-[repeat(4,minmax(0,1fr))_14rem]">
                    {PRODUCT_CATEGORIES.map((cat, col) => (
                      <div key={cat.key} className="min-w-0">
                        <PanelEyebrow>{cat.title}</PanelEyebrow>
                        <div className="grid gap-0.5">
                          {config.products
                            .filter((p) => p.category === cat.key)
                            .map((p, i) => (
                              <PanelRow
                                key={p.slug}
                                href={`/products/${p.slug}`}
                                icon={CATEGORY_ICON[cat.key] ?? 'window'}
                                label={p.name}
                                description={p.shortDescription}
                                index={col + i}
                                shown={shown}
                                reduced={reduced}
                                onNavigate={close}
                              />
                            ))}
                        </div>
                      </div>
                    ))}

                    <Link
                      href="/products"
                      onClick={close}
                      data-nav-row=""
                      className="group relative hidden overflow-hidden rounded-site lg:block"
                    >
                      {productsImage && (
                        <img
                          src={productsImage.src}
                          srcSet={productsImage.srcSet}
                          sizes="14rem"
                          alt={productsImage.alt}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
                        />
                      )}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(180deg, rgb(0 0 0 / 0.15) 35%, rgb(0 0 0 / 0.85) 100%)' }}
                      />
                      <span className="relative flex h-full min-h-[14rem] flex-col justify-end p-4">
                        <span className="flex items-center gap-1 font-heading text-base font-bold text-on-primary">
                          All products
                          <NavIcon
                            name="arrow"
                            className="h-4 w-4 -translate-x-1 opacity-0 transition-[opacity,transform] duration-150 group-hover:translate-x-0 group-hover:opacity-100"
                          />
                        </span>
                        <span className="mt-1 block text-xs text-on-primary opacity-70">Sixteen products, four categories</span>
                      </span>
                    </Link>
                  </div>
                </Panel>
              )}
            </div>

            {/* AREAS */}
            <div
              className="relative"
              onMouseEnter={() => hoverOpen('Areas')}
              onMouseLeave={hoverLeave}
              onBlurCapture={onBlurCapture}
              onKeyDown={onPanelKeyDown}
            >
              {trigger('Areas', '/areas')}
              {mounted === 'Areas' && <Caret shown={shown} reduced={reduced} />}
              {mounted === 'Areas' && (
                <Panel shown={shown} reduced={reduced} className="w-[40rem]">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="min-w-0">
                      <PanelEyebrow>Counties</PanelEyebrow>
                      <div className="grid gap-0.5">
                        {config.coverage.map((c, i) => (
                          <PanelRow
                            key={c.county}
                            href={`/counties/${countySlug(c.county)}`}
                            icon="pin"
                            label={c.county}
                            description={`${c.towns.length} towns we install in`}
                            index={i}
                            shown={shown}
                            reduced={reduced}
                            onNavigate={close}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <PanelEyebrow>Towns</PanelEyebrow>
                      <div className="grid gap-0.5">
                        {config.serviceAreas.map((a, i) => (
                          <PanelRow
                            key={a.slug}
                            href={`/areas/${a.slug}`}
                            icon="pin"
                            label={`${a.name}, ${config.primaryState}`}
                            description={a.county ?? undefined}
                            index={i}
                            shown={shown}
                            reduced={reduced}
                            onNavigate={close}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 border-t border-white/10 pt-2">
                    <PanelRow
                      href="/areas"
                      icon="arrow"
                      label="Check availability in your town"
                      index={config.coverage.length}
                      shown={shown}
                      reduced={reduced}
                      onNavigate={close}
                    />
                  </div>
                </Panel>
              )}
            </div>

            {FLAT_LINKS.filter((l) => l.href !== '/').map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-on-primary opacity-80 transition-opacity hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
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

          <nav aria-label="Main mobile" className="px-4 pb-28 pt-8 sm:px-6">
            <Link href="/" onClick={() => setDrawer(false)} className="block font-heading text-2xl font-bold">
              Home
            </Link>

            {MENUS.map((name) => {
              const open = section === name
              return (
                <div key={name} className="mt-5 border-t border-white/10 pt-5">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setSection(open ? null : name)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="font-heading text-2xl font-bold">{name}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className={[
                        'shrink-0 fill-none stroke-accent stroke-[1.6]',
                        reduced ? '' : 'transition-transform duration-200',
                        open ? 'rotate-180' : 'rotate-0',
                      ].join(' ')}
                    >
                      <path d="M3.5 6l4.5 4.5L12.5 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* 0fr -> 1fr animates height without measuring it. */}
                  <div
                    className={reduced ? 'grid' : 'grid transition-[grid-template-rows] duration-200 ease-out'}
                    style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4">
                        {name === 'Services' && (
                          <ul className="space-y-1">
                            {config.services.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/services/${s.slug}`}
                                  onClick={() => setDrawer(false)}
                                  className="flex items-start gap-3 rounded-site px-2 py-2 hover:bg-white/[0.06]"
                                >
                                  <NavIcon name={serviceIcon(s.slug)} className="mt-0.5 shrink-0 text-accent" />
                                  <span className="min-w-0">
                                    <span className="block text-sm font-semibold">{s.name}</span>
                                    <span className="mt-0.5 block truncate text-xs opacity-60">{s.shortDescription}</span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {name === 'Products' &&
                          PRODUCT_CATEGORIES.map((cat) => (
                            <div key={cat.key} className="mb-4">
                              <p className="px-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent">{cat.title}</p>
                              <ul className="mt-1 space-y-1">
                                {config.products
                                  .filter((p) => p.category === cat.key)
                                  .map((p) => (
                                    <li key={p.slug}>
                                      <Link
                                        href={`/products/${p.slug}`}
                                        onClick={() => setDrawer(false)}
                                        className="flex items-center gap-3 rounded-site px-2 py-1.5 hover:bg-white/[0.06]"
                                      >
                                        <NavIcon name={CATEGORY_ICON[cat.key] ?? 'window'} className="shrink-0 text-accent" />
                                        <span className="truncate text-sm">{p.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          ))}

                        {name === 'Areas' && (
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <p className="px-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent">Counties</p>
                              <ul className="mt-1 space-y-1">
                                {config.coverage.map((c) => (
                                  <li key={c.county}>
                                    <Link
                                      href={`/counties/${countySlug(c.county)}`}
                                      onClick={() => setDrawer(false)}
                                      className="flex items-center gap-3 rounded-site px-2 py-1.5 hover:bg-white/[0.06]"
                                    >
                                      <NavIcon name="pin" className="shrink-0 text-accent" />
                                      <span className="truncate text-sm">{c.county}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="px-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent">Towns</p>
                              <ul className="mt-1 space-y-1">
                                {config.serviceAreas.map((a) => (
                                  <li key={a.slug}>
                                    <Link
                                      href={`/areas/${a.slug}`}
                                      onClick={() => setDrawer(false)}
                                      className="flex items-center gap-3 rounded-site px-2 py-1.5 hover:bg-white/[0.06]"
                                    >
                                      <NavIcon name="pin" className="shrink-0 text-accent" />
                                      <span className="truncate text-sm">
                                        {a.name}, {config.primaryState}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        <Link
                          href={name === 'Services' ? '/services' : name === 'Products' ? '/products' : '/areas'}
                          onClick={() => setDrawer(false)}
                          className="mt-2 inline-flex items-center gap-1 px-2 text-sm font-semibold text-accent"
                        >
                          All {name.toLowerCase()}
                          <NavIcon name="arrow" className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            <ul className="mt-5 space-y-5 border-t border-white/10 pt-5">
              {FLAT_LINKS.filter((l) => l.href !== '/').map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setDrawer(false)} className="font-heading text-2xl font-bold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
