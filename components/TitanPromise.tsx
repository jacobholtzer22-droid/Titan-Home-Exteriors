import Em from './Em'
import Eyebrow from './Eyebrow'

/**
 * The owner's own four sentences, in his order, on a quiet band. Verbatim from
 * BRIEF.md: this is the one place on the site where the words are his rather
 * than ours, so do not rewrite them.
 */
export default function TitanPromise() {
  return (
    <section className="border-y border-line bg-primary-soft">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-20">
        <Eyebrow>THE TITAN PROMISE</Eyebrow>
        <h2 className="mt-4 max-w-4xl font-heading text-2xl font-bold leading-snug text-primary-dark md:text-4xl">
          Treat every home like it&rsquo;s your own. Show up on time. Return the phone call. Seal it right the{' '}
          <Em>first time.</Em>
        </h2>
        <p className="mt-5 max-w-2xl text-base text-ink">
          We focus on three services, windows, siding, and doors, so every project gets our full attention. Each job is
          staffed by our own crew.
        </p>
      </div>
    </section>
  )
}
