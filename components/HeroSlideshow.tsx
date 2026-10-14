'use client'

import { useEffect, useState } from 'react'
import { getImage } from '@/lib/images'

/**
 * Crossfading hero slideshow. The FIRST slide is rendered by the server in
 * components/Hero.tsx and stays in the DOM underneath: it is the LCP element,
 * the preloaded image, and the frame verify check 19 measures the hero copy
 * against. This component only layers slides 2..n over it, so with JS off or
 * before hydration the hero is still a complete, correct image.
 *
 * Does nothing at all under prefers-reduced-motion.
 */
export default function HeroSlideshow({ names, intervalMs = 6000 }: { names: string[]; intervalMs?: number }) {
  const [index, setIndex] = useState(0)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    if (names.length < 2) return
    setEnabled(true)
    const id = setInterval(() => setIndex((i) => (i + 1) % names.length), intervalMs)
    return () => clearInterval(id)
  }, [names.length, intervalMs])

  if (!enabled) return null

  return (
    <>
      {names.map((name, i) => {
        const img = getImage(name)
        return (
          <img
            key={name}
            src={img.src}
            srcSet={img.srcSet}
            sizes="100vw"
            alt=""
            aria-hidden="true"
            decoding="async"
            loading={i === 0 ? 'eager' : 'lazy'}
            className="absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        )
      })}
    </>
  )
}
