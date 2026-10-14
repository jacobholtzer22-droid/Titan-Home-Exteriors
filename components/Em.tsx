import type { ReactNode } from 'react'

/**
 * One word of a heading, set in the display face's real italic and the accent.
 * The client's current site does this in every H1 and most H2s, and it is the
 * single strongest signal of that design, so it is a primitive rather than a
 * class repeated by hand.
 *
 * Not a second font: Fraunces ships a true italic (app/fonts.ts loads it), so
 * this is the same family, not a synthetic oblique.
 */
export default function Em({ children }: { children: ReactNode }) {
  return <em className="font-heading italic text-accent">{children}</em>
}
