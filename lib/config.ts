import rawConfig from '@/site.config'
import { deriveConfig, siteConfigSchema, type SiteConfig } from './config-schema'

export { CONTACT_ENDPOINT, HONEYPOT_FIELD } from './config-schema'
export type { Coverage, Faq, Product, Review, Service, ServiceArea, SiteConfig } from './config-schema'

function parseOrThrow(): SiteConfig {
  const result = siteConfigSchema.safeParse(rawConfig)
  if (!result.success) {
    const lines = result.error.issues.map((i) => `  - ${i.path.join('.') || '(root)'}: ${i.message}`)
    throw new Error(`site.config.ts failed validation:\n${lines.join('\n')}`)
  }
  return deriveConfig(result.data)
}

/**
 * The validated, typed config. Parsed once at module load: an invalid
 * site.config.ts throws here and fails `next build` before any page renders.
 */
export const config: SiteConfig = parseOrThrow()

export function getService(slug: string) {
  return config.services.find((s) => s.slug === slug) ?? null
}

export function getArea(slug: string) {
  return config.serviceAreas.find((a) => a.slug === slug) ?? null
}

export function getProduct(slug: string) {
  return config.products.find((p) => p.slug === slug) ?? null
}

/** "Hillsborough County" -> "hillsborough". The county page slug. */
export function countySlug(county: string): string {
  return county
    .replace(/\s*County$/i, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
}

export function getCounty(slug: string) {
  return config.coverage.find((c) => countySlug(c.county) === slug) ?? null
}

/** The county a service-area town sits in, or null. */
export function countyForArea(areaCounty: string | null) {
  if (!areaCounty) return null
  return config.coverage.find((c) => c.county === areaCounty) ?? null
}

/** Minutes-since-midnight "HH:MM" -> "8:00 AM". */
export function formatTime(hhmm: string): string {
  const [h = 0, m = 0] = hhmm.split(':').map(Number)
  const suffix = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return `${hour12}:${String(m).padStart(2, '0')} ${suffix}`
}
