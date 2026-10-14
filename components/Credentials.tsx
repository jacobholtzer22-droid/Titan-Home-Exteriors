import { config } from '@/lib/config'

/**
 * Trust line built only from facts that exist. Renders nothing at all when
 * every credential is null, so there is never an empty slot asking to be filled.
 *
 * `tone` rather than a colour class through className: both would land in the
 * same class attribute with equal specificity, so which one won came down to
 * their order in the compiled stylesheet. It lost, and the licence number sat
 * invisible in dark-on-dark over the hero photograph.
 */
export default function Credentials({ className = '', tone = 'dark' }: { className?: string; tone?: 'dark' | 'light' }) {
  const items: string[] = []
  if (config.yearsInBusiness !== null) items.push(`${config.yearsInBusiness} years in business`)
  if (config.insured === true) items.push('Fully insured')
  if (config.licenseNumber) items.push(`License ${config.licenseNumber}`)
  if (items.length === 0) return null
  return (
    <ul
      className={`flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium ${
        tone === 'light' ? 'text-on-primary' : 'text-primary-dark'
      } ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  )
}
