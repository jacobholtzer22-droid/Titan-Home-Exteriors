import localFont from 'next/font/local'

/**
 * The two typefaces for this site, self-hosted from app/fonts/ through
 * next/font/local. This is the ONE file to edit to change fonts: swap the
 * woff2 files and the two exports, keep the `variable` names.
 *
 * Self-hosted rather than next/font/google on purpose. next/font/google
 * fetches the Google Fonts CSS at BUILD time, so a build machine that cannot
 * reach fonts.googleapis.com fails the whole deploy (it surfaces as
 * "Cannot read properties of null (reading '1')" while next parses a response
 * it never got). The bytes are in the repo now, so the build has no network
 * dependency and the fonts cannot change under us.
 *
 * Both files are the latin subset of the family's VARIABLE font, taken from
 * Google Fonts, so one file covers the whole weight range declared below.
 * Google serves the same woff2 for each requested weight of these families.
 *
 *   Sora    v17, latin, wght 600-700  -> headings
 *   Manrope v20, latin, wght 400-600  -> body
 *
 * The display face must have character. Never Inter, system-ui, or Arial for
 * headings. See AGENT.md Phase 2 for the pairings per direction.
 */
export const headingFont = localFont({
  src: './fonts/sora-latin-600-700.woff2',
  weight: '600 700',
  style: 'normal',
  variable: '--font-heading',
  display: 'swap',
})

export const bodyFont = localFont({
  src: './fonts/manrope-latin-400-600.woff2',
  weight: '400 600',
  style: 'normal',
  variable: '--font-body',
  display: 'swap',
})
