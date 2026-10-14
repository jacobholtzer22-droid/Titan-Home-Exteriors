'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Counts to `value` over 1.2s the first time it scrolls into view. Honours
 * prefers-reduced-motion by printing the final number immediately.
 */
export default function CountUp({ value, suffix = '', className = '' }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return
    if (typeof window === 'undefined') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setN(value)
      setDone(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return
      io.disconnect()
      setDone(true)
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 1200)
        // ease-out cubic
        setN(Math.round(value * (1 - Math.pow(1 - t, 3))))
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => io.disconnect()
  }, [value, done])

  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  )
}
