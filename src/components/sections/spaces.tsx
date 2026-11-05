import { Check, Monitor, Smartphone } from "lucide-react"

import { SectionHeading } from "@/components/brand"
import { BrowserFrame, PhoneFrame } from "@/components/device-frames"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { spaces } from "@/content"

function Points({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
      {items.map((p) => (
        <li key={p} className={`flex gap-2 text-base ${dark ? "text-zinc-200" : "text-zinc-700"}`}>
          <Check aria-hidden className={`mt-0.5 size-5 shrink-0 ${dark ? "text-brand-on-dark" : "text-brand"}`} />
          {p}
        </li>
      ))}
    </ul>
  )
}

export function Spaces() {
  const { web, mobile } = spaces
  const [main, ...others] = web.shots

  return (
    <section id="espaces" aria-labelledby="espaces-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="espaces-title" eyebrow={spaces.eyebrow} title={spaces.title} />

        <Tabs defaultValue="mobile" className="mt-10">
          <TabsList aria-label="Choisir un espace">
            <TabsTrigger value="mobile">
              <Smartphone aria-hidden />
              {mobile.tab}
            </TabsTrigger>
            <TabsTrigger value="web">
              <Monitor aria-hidden />
              {web.tab}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mobile">
            <div className="rounded-2xl bg-ink px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
              <h3 className="text-2xl font-bold text-white">{mobile.title}</h3>
              <p className="mt-2 text-lg text-zinc-300">{mobile.text}</p>
              <Points items={mobile.points} dark />
              <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 lg:gap-x-8">
                {mobile.shots.map((shot) => (
                  <li key={shot.src}>
                    <figure>
                      <PhoneFrame screen={shot} sizes="(min-width: 768px) 220px, 45vw" className="mx-auto w-full max-w-[230px]" />
                      <figcaption className="mt-4 text-center text-[15px] text-zinc-300">{shot.caption}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="web">
            <div className="rounded-2xl bg-zinc-100 px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
              <h3 className="text-2xl font-bold text-ink">{web.title}</h3>
              <p className="mt-2 text-lg text-zinc-600">{web.text}</p>
              <Points items={web.points} />
              <figure className="mt-10">
                <BrowserFrame screen={main} sizes="(min-width: 1152px) 1040px, 100vw" />
                <figcaption className="mt-3 text-[15px] text-zinc-600">{main.caption}</figcaption>
              </figure>
              <ul className="mt-8 grid gap-8 md:grid-cols-2">
                {others.map((shot) => (
                  <li key={shot.src}>
                    <figure>
                      <BrowserFrame screen={shot} sizes="(min-width: 768px) 520px, 100vw" />
                      <figcaption className="mt-3 text-[15px] text-zinc-600">{shot.caption}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
