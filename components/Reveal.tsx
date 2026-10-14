'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

const REDUCED = '(prefers-reduced-motion: reduce)'

/**
 * Fade-up on first scroll into view. One IntersectionObserver per instance,
 * fires once, then disconnects.
 *
 * `stagger` delays each direct child in turn, for grids. Only opacity and
 * transform animate, so nothing here triggers layout.
 *
 * Under prefers-reduced-motion the content starts visible and no observer is
 * created at all: relying on the CSS kill switch alone would leave elements
 * stuck at opacity 0 if the transition never ran.
 */
export default function Reveal({
  children,
  className = '',
  stagger = false,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  stagger?: boolean
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia?.(REDUCED).matches) {
      setShown(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-revealed={shown ? 'true' : 'false'}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        'transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        stagger ? '[&>*]:transition-[opacity,transform] [&>*]:duration-500 [&>*]:ease-out' : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
