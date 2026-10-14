'use client'

import { useState } from 'react'
import Eyebrow from './Eyebrow'
import Em from './Em'
import { config } from '@/lib/config'

/**
 * The job, stage by stage, on a full-dark band. A row of pills selects the
 * stage; the detail card and the grid below follow.
 *
 * Every word comes from config.process. No library: one piece of state, real
 * buttons, arrow keys to move between stages.
 */
export default function ProcessStepper({ heading = 'How a project actually runs.' }: { heading?: string }) {
  const stages = config.process
  const [active, setActive] = useState(0)
  if (stages.length === 0) return null
  const stage = stages[active]
  if (!stage) return null

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') setActive((i) => (i + 1) % stages.length)
    if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + stages.length) % stages.length)
  }

  const words = heading.split(' ')
  const last = words[words.length - 1] ?? ''

  return (
    <section className="bg-primary-dark text-on-primary">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
        <Eyebrow>THE TITAN PROCESS</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-heading text-3xl font-bold md:text-5xl">
          {words.slice(0, -1).join(' ')} <Em>{last}</Em>
        </h2>

        <div role="tablist" aria-label="Project stages" onKeyDown={onKey} className="mt-10 flex flex-wrap gap-2">
          {stages.map((s, i) => (
            <button
              key={s.name}
              role="tab"
              type="button"
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className={[
                'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
                i === active ? 'bg-accent text-on-accent' : 'border border-white/20 text-on-primary opacity-80 hover:opacity-100',
              ].join(' ')}
            >
              <span className="tabular-nums opacity-70">{String(i + 1).padStart(2, '0')}</span> {s.name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-10 rounded-site border border-white/10 bg-white/[0.03] p-6 md:grid-cols-5 md:p-10">
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Stage {String(active + 1).padStart(2, '0')} of {String(stages.length).padStart(2, '0')}
            </p>
            <h3 className="mt-3 font-heading text-2xl font-bold md:text-3xl">{stage.name}</h3>
            <p className="mt-4 text-base leading-relaxed opacity-90">{stage.detail}</p>
          </div>
          <ul className="space-y-3 md:col-span-2">
            {stage.checklist.map((item) => (
              <li key={item} className="flex gap-3 text-sm opacity-90">
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="mt-0.5 shrink-0 fill-none stroke-accent stroke-[1.8]">
                  <path d="M3 8.5l3.2 3.2L13 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-6">
          {stages.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Stage ${i + 1}: ${s.name}`}
              className={[
                'rounded-site border p-4 text-left transition-colors duration-200',
                i === active ? 'border-accent bg-white/[0.04]' : 'border-white/10 hover:border-white/25',
              ].join(' ')}
            >
              <span className="block font-heading text-sm font-bold tabular-nums text-accent">{String(i + 1).padStart(2, '0')}</span>
              <span className="mt-1 block text-sm opacity-90">{s.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
