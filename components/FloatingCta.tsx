'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

/**
 * Bottom-right floating pill, desktop only. MobileCallBar already owns the
 * bottom of the screen on phones, so this is hidden below md to avoid two
 * stacked calls to action.
 */
export default function FloatingCta() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Link
      href="/contact#contact-form"
      aria-hidden={!shown}
      tabIndex={shown ? 0 : -1}
      className={[
        'fixed bottom-6 right-6 z-40 hidden rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent shadow-site transition-[opacity,transform] duration-300 hover:bg-accent-dark md:block',
        shown ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      ].join(' ')}
    >
      Free Estimate
    </Link>
  )
}
