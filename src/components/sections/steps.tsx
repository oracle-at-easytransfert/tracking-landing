import { SectionHeading } from "@/components/brand"
import { steps } from "@/content"

export function Steps() {
  return (
    <section id="fonctionnement" aria-labelledby="fonctionnement-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="fonctionnement-title" eyebrow={steps.eyebrow} title={steps.title} />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.items.map((step) => (
            <li key={step.number} className="relative flex flex-col rounded-xl border bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-lg bg-ink text-white">
                  <step.icon aria-hidden className="size-6" />
                </span>
                <span aria-hidden className="text-4xl font-bold text-zinc-200">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink">
                <span className="sr-only">Étape {Number(step.number)} : </span>
                {step.title}
              </h3>
              <p className="mt-2 text-base text-zinc-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
