'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import NavIcon, { type NavIconName } from './NavIcons'

/**
 * The parts a nav panel is built from: the dark surface with its caret, and
 * the row. Split out of Header.tsx so the header file stays about behaviour
 * (hover intent, focus, keyboard) rather than markup.
 *
 * `shown` drives the open/close transition. The panel stays mounted through
 * the 120ms close so the exit animation can actually run; Header owns that
 * timing.
 */

export function Panel({
  shown,
  reduced,
  wide = false,
  children,
  className = '',
}: {
  shown: boolean
  reduced: boolean
  /**
   * A mega panel is wider than the gap between its trigger and the edge of the
   * screen, so it cannot be centred on the trigger: at 1440 the Products panel
   * centred on its button started at x = -51 and lost its first column. Wide
   * panels are therefore fixed and centred on the VIEWPORT, which lines them
   * up with the page container. The caret still sits over the trigger, because
   * Caret is rendered by the trigger, not by the panel.
   */
  wide?: boolean
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        'z-50',
        wide ? 'fixed left-1/2 top-[4.9rem] -translate-x-1/2' : 'absolute left-1/2 top-full -translate-x-1/2 pt-3',
        // Nothing here changes layout: the panel is taken out of flow and the
        // trigger keeps its size whether it is open or closed.
        reduced ? '' : 'transition-[opacity,transform] ease-out',
        reduced ? '' : shown ? 'duration-[180ms]' : 'duration-[120ms]',
        shown
          ? wide
            ? 'translate-y-0 opacity-100'
            : 'translate-y-0 opacity-100'
          : wide
            ? 'pointer-events-none -translate-y-2 opacity-0'
            : 'pointer-events-none -translate-y-2 opacity-0',
        className,
      ].join(' ')}
    >
      <div className="rounded-site border border-white/10 bg-primary-dark p-4 shadow-site">{children}</div>
    </div>
  )
}

/**
 * The little diamond that ties a panel to the button that opened it. Rendered
 * by the trigger so it is correct even when the panel itself is centred on the
 * viewport rather than on the trigger.
 */
export function Caret({ shown, reduced }: { shown: boolean; reduced: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={[
        'absolute left-1/2 top-full z-[51] mt-[7px] h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-white/10 bg-primary-dark',
        reduced ? '' : 'transition-opacity',
        reduced ? '' : shown ? 'duration-[180ms]' : 'duration-[120ms]',
        shown ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
    />
  )
}

export function PanelEyebrow({ children }: { children: string }) {
  return <p className="px-3 pb-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent">{children}</p>
}

/**
 * One row: icon, label, one-line description, arrow on hover.
 *
 * The description is truncated to a single line rather than wrapped, so a long
 * shortDescription cannot make one column taller than its neighbours.
 */
export function PanelRow({
  href,
  icon,
  label,
  description,
  index,
  shown,
  reduced,
  onNavigate,
}: {
  href: string
  icon: NavIconName
  label: string
  description?: string
  index: number
  shown: boolean
  reduced: boolean
  onNavigate: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      data-nav-row=""
      style={reduced ? undefined : { transitionDelay: shown ? `${index * 30}ms` : '0ms' }}
      className={[
        // min-w-0 is load-bearing: a grid item defaults to min-width:auto, so
        // without it the row grows to fit its description and `truncate` never
        // clips. The text then runs straight out of the panel.
        'group flex min-w-0 items-start gap-3 rounded-site px-3 py-2.5',
        'transition-[background-color,opacity,transform] duration-150',
        reduced ? '' : shown ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0',
        'hover:bg-white/[0.06] focus-visible:bg-white/[0.06]',
      ].join(' ')}
    >
      <NavIcon name={icon} className="mt-0.5 shrink-0 text-accent" />
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1 text-sm font-semibold text-on-primary transition-colors group-hover:text-accent group-focus-visible:text-accent">
          {label}
          <NavIcon
            name="arrow"
            className="h-3.5 w-3.5 -translate-x-1 text-accent opacity-0 transition-[opacity,transform] duration-150 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
          />
        </span>
        {description && (
          <span className="mt-0.5 block truncate text-xs text-on-primary opacity-60">{description}</span>
        )}
      </span>
    </Link>
  )
}
