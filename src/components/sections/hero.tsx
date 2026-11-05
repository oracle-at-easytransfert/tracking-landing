import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BrowserFrame, PhoneFrame } from "@/components/device-frames"
import { hero } from "@/content"
import { screens } from "@/screens"

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      {/* trame discrète */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f1f1f2_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f2_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10 lg:pb-24 lg:pt-20">
        <div>
          <Badge>{hero.eyebrow}</Badge>
          <h1 id="hero-title" className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-600">{hero.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight aria-hidden />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {hero.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-[15px] font-medium text-zinc-700">
                <Check aria-hidden className="size-5 text-success" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* visuel : back-office + téléphone du chef d'équipe */}
        <div className="relative pb-16 pt-6 sm:pb-20">
          <BrowserFrame
            screen={screens.webMission}
            priority
            sizes="(min-width: 1024px) 560px, 88vw"
            className="w-[86%]"
          />
          <PhoneFrame
            screen={screens.mobileAccueil}
            priority
            sizes="(min-width: 1024px) 180px, 30vw"
            className="absolute bottom-0 right-0 w-[29%] max-w-[200px] rotate-[4deg] motion-reduce:rotate-0"
          />
        </div>
      </div>
    </section>
  )
}
