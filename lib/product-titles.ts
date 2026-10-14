import { config } from './config'
import { TITLE_MAX } from '@/scripts/verify-limits'

/**
 * Product and county titles, with the city dropped rather than the business
 * name when a long product name would push the rendered title past the 60
 * character limit check 13 enforces. "Black Frame Sliding Glass Doors" is the
 * one that needs it today; the rule is here so the next long name is handled
 * without anyone noticing it broke.
 */
export function productTitle(name: string): string {
  const withCity = `${name} in ${config.primaryCity} | ${config.displayName}`
  if (withCity.length <= TITLE_MAX) return withCity
  return `${name} | ${config.displayName}`
}

export function countyTitle(county: string): string {
  const full = `${county} Windows & Doors | ${config.displayName}`
  if (full.length <= TITLE_MAX) return full
  return `${county} Windows | ${config.displayName}`
}
