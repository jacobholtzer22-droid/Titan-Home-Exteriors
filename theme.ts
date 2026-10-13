/**
 * Visual theme. This is the one file (with app/fonts.ts) where the agent has
 * real freedom: pick a direction, a palette, and a hero layout so two client
 * sites do not look like the same site with different words. No business facts
 * belong here.
 *
 * Rules the palette must satisfy (AGENT.md Phase 2c): one dark neutral, one
 * warm or cool off-white, exactly one accent used on under 5% of any page. No
 * pure #000000 or #FFFFFF. `onPrimary` sits on `primary`, `onAccent` on
 * `accent`, `ink` on `bg` and `surface`. One radius and one shadow for the
 * whole site; components read them as CSS variables and nothing else.
 */
export type HeroVariant = 'full-bleed' | 'split'

export interface Theme {
  palette: {
    /** The dark neutral. Also the full-dark section background. */
    primary: string
    primaryDark: string
    primarySoft: string
    /** The single accent. Buttons, the call bar, small marks. Under 5% of any page. */
    accent: string
    accentDark: string
    /** The off-white page ground. */
    bg: string
    surface: string
    /** Body text. Never pure black. */
    ink: string
    muted: string
    line: string
    onPrimary: string
    onAccent: string
  }
  /**
   * 'full-bleed': client photo behind a dark scrim, headline and phone CTA
   * left-aligned in the lower third. Needs a photo that can carry it.
   * 'split': large photo one side, oversized type the other. For weaker photos.
   */
  heroVariant: HeroVariant
  /** The ONE corner radius for the site, in rem. 0 for hard edges. */
  radius: number
  /** The ONE shadow for the site, as a CSS box-shadow value. 'none' is valid. */
  shadow: string
  /**
   * The client's logo, or null to render a text wordmark instead.
   *
   * `src` is a path under /public (the file is NOT processed by the image
   * pipeline: a logo is line art, not a photograph, and must not be re-encoded
   * to WebP at photo widths). components/Header.tsx reads this and nothing
   * else does, so dropping a logo in later is a one-line config change.
   */
  logo: { src: string; alt: string } | null
}

// Trade professional: the near-black and electric blue of the client's own logo,
// so the logo drops onto the dark header without a clash. One accent, no
// gradient anywhere (the logo has one; the site does not). Hard edges.
const theme: Theme = {
  palette: {
    primary: '#0E1116',
    primaryDark: '#080A0D',
    primarySoft: '#E8EEF6',
    accent: '#1B5FD6',
    accentDark: '#15489F',
    bg: '#F4F6F9',
    surface: '#FBFCFD',
    ink: '#14181F',
    muted: '#5B6573',
    line: '#D9DEE6',
    onPrimary: '#F4F6F9',
    onAccent: '#F7FAFF',
  },
  // 'split': the strongest photo is a 768px-wide portrait and the rest were
  // shot off a monitor. A full bleed would enlarge their flaws.
  heroVariant: 'split',
  radius: 0.25,
  shadow: '0 1px 2px rgb(8 10 13 / 0.10)',
  logo: null,
}

export default theme
