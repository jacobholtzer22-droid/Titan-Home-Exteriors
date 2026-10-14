import localFont from 'next/font/local'

/**
 * The two typefaces for this site, self-hosted from app/fonts/ through
 * next/font/local. This is the ONE file to edit to change fonts: swap the
 * woff2 files and the two exports, keep the `variable` names.
 *
 * Self-hosted rather than next/font/google on purpose. next/font/google
 * fetches the Google Fonts CSS at BUILD time, so a builder that cannot reach
 * fonts.googleapis.com fails the deploy (it surfaces as "Cannot read
 * properties of null (reading '1')" while next parses a response it never
 * got). The bytes are in the repo, so the build has no network dependency.
 *
 * Fraunces carries REAL italics, which the design depends on: every H1 and
 * most H2s set one word in accent-blue italic (components/Em.tsx). A synthetic
 * oblique would shear the serifs and look wrong at display size, so the italic
 * file is downloaded and declared separately rather than left to the browser.
 *
 *   Fraunces v38, latin, wght 500-700, normal + italic  -> headings
 *   Manrope  v20, latin, wght 400-600                   -> body
 */
export const headingFont = localFont({
  src: [
    { path: './fonts/fraunces-latin-500-700.woff2', weight: '500 700', style: 'normal' },
    { path: './fonts/fraunces-latin-500-700-italic.woff2', weight: '500 700', style: 'italic' },
  ],
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
