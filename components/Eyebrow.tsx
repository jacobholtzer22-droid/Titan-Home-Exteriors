/**
 * Small uppercase letterspaced label above a heading ("WHAT WE DO",
 * "THE TITAN PROCESS"). Mirrors the client's current site.
 */
export default function Eyebrow({ children, className = '' }: { children: string; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.2em] text-accent ${className}`}>{children}</p>
  )
}
