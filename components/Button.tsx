import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * The one button shape on the site: a pill. This is the single deliberate
 * exception to theme.radius, which still governs cards and images; the
 * client's current site uses pill buttons everywhere and that is the look he
 * is paying for.
 *
 * `secondary` is a 1px outline with a trailing arrow, as on the current site.
 * `onDark` flips the outline colour for use over a hero scrim.
 */
export const PILL =
  'inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200 sm:text-base'

export function buttonClass(variant: 'primary' | 'secondary' = 'primary', onDark = false): string {
  if (variant === 'primary') return `${PILL} bg-accent text-on-accent hover:bg-accent-dark`
  return onDark
    ? `${PILL} border border-on-primary/40 text-on-primary hover:border-on-primary`
    : `${PILL} border border-ink/25 text-ink hover:border-ink`
}

export default function Button({
  href,
  children,
  variant = 'primary',
  onDark = false,
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onDark?: boolean
  className?: string
}) {
  const external = href.startsWith('http') || href.startsWith('tel:')
  const cls = `${buttonClass(variant, onDark)} ${className}`
  const inner = (
    <>
      {children}
      {variant === 'secondary' && (
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="fill-none stroke-current stroke-[1.5]">
          <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  )
  if (external) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
}
