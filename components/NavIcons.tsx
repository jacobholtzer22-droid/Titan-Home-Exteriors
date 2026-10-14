/**
 * The nav's icon set. Five line icons, drawn once, 20px, currentColor.
 *
 * Deliberately not an icon library: five glyphs do not justify a dependency,
 * and a library would ship hundreds. Never emoji, which render as someone
 * else's artwork at a size we do not control.
 */
export type NavIconName = 'window' | 'shield' | 'door' | 'siding' | 'pin' | 'arrow'

const PATHS: Record<NavIconName, string> = {
  // Sash window: frame, mullion, sill.
  window: 'M4 3.5h12v13H4zM10 3.5v13M4 10h12M3 16.5h14',
  // Shield, for impact and storm work.
  shield: 'M10 2.5l6 2.5v4.6c0 3.6-2.5 6.6-6 7.4-3.5-.8-6-3.8-6-7.4V5z',
  // Entry door with a handle.
  door: 'M5 2.5h10v15H5zM12.4 10.2v1.1M5 17.5h10',
  // Lap siding courses.
  siding: 'M3 5.5h14M3 9h14M3 12.5h14M3 16h14M3 3.5v13M17 3.5v13',
  // Map pin.
  pin: 'M10 17.5s5.5-5 5.5-9a5.5 5.5 0 10-11 0c0 4 5.5 9 5.5 9zM10 7.6a1.9 1.9 0 110 3.8 1.9 1.9 0 010-3.8z',
  arrow: 'M4 10h9M9.5 6.5L13 10l-3.5 3.5',
}

export default function NavIcon({ name, className = '' }: { name: NavIconName; className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`fill-none stroke-current stroke-[1.4] ${className}`}
    >
      <path d={PATHS[name]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
