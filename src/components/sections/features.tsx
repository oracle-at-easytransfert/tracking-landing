import { SectionHeading } from "@/components/brand"
import { features } from "@/content"

export function Features() {
  return (
    <section id="fonctionnalites" aria-labelledby="fonctionnalites-title" className="bg-zinc-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="fonctionnalites-title"
          eyebrow={features.eyebrow}
          title={features.title}
          intro={features.intro}
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((f) => (
            <li key={f.title} className="flex gap-4 rounded-xl border bg-white p-5 transition-colors hover:border-zinc-300">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-brand">
                <f.icon aria-hidden className="size-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">{f.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-zinc-600">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
