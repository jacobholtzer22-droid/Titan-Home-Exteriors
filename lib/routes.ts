import { config, countySlug } from './config'

/**
 * Every public route on the site, derived from the same config arrays that
 * drive generateStaticParams. sitemap.ts and llms.txt read this, so the
 * sitemap cannot list a route that does not exist or miss one that does.
 */
export const STATIC_ROUTES = [
  '/',
  '/services',
  '/products',
  '/areas',
  '/counties',
  '/warranty',
  '/financing',
  '/faq',
  '/about',
  '/contact',
  '/privacy-policy',
] as const

export function serviceRoutes(): string[] {
  return config.services.map((s) => `/services/${s.slug}`)
}

export function productRoutes(): string[] {
  return config.products.map((p) => `/products/${p.slug}`)
}

export function areaRoutes(): string[] {
  return config.serviceAreas.map((a) => `/areas/${a.slug}`)
}

export function countyRoutes(): string[] {
  return config.coverage.map((c) => `/counties/${countySlug(c.county)}`)
}

export function allRoutes(): string[] {
  return [...STATIC_ROUTES, ...serviceRoutes(), ...productRoutes(), ...areaRoutes(), ...countyRoutes()]
}
