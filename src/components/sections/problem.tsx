import { ArrowRight, Target } from "lucide-react"

import { SectionHeading } from "@/components/brand"
import { problem } from "@/content"

export function Problem() {
  return (
    <section id="probleme" aria-labelledby="probleme-title" className="bg-zinc-50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading id="probleme-title" eyebrow={problem.eyebrow} title={problem.title} intro={problem.intro} />
          <div className="mt-8 rounded-xl border-l-4 border-brand bg-white p-6 shadow-sm">
            <p className="flex items-center gap-2 text-base font-semibold text-ink">
              <Target aria-hidden className="size-5 text-brand" />
              {problem.goalTitle}
            </p>
            <p className="mt-2 text-base text-zinc-700">{problem.goal}</p>
          </div>
        </div>

        <ul className="flex flex-col gap-4 self-center">
          {problem.items.map((item) => (
            <li key={item.before} className="rounded-xl border bg-white p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                <span className="sr-only">Avant : </span>
                <s className="decoration-zinc-400">{item.before}</s>
              </p>
              <p className="mt-2 flex gap-3 text-base font-medium text-ink">
                <ArrowRight aria-hidden className="mt-1 size-5 shrink-0 text-brand" />
                <span>
                  <span className="sr-only">Avec KAYBIC Tracking : </span>
                  {item.after}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
