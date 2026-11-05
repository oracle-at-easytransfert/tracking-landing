import { SectionHeading } from "@/components/brand"
import { security } from "@/content"

export function Security() {
  return (
    <section id="securite" aria-labelledby="securite-title" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="securite-title" eyebrow={security.eyebrow} title={security.title} dark />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {security.items.map((item) => (
            <li key={item.title} className="rounded-xl border border-zinc-800 bg-ink-soft p-6">
              <item.icon aria-hidden className="size-7 text-brand-on-dark" />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-zinc-300">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
