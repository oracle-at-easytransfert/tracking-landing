import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Wordmark } from "@/components/brand"
import { hero, nav } from "@/content"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="rounded-md" aria-label="KAYBIC Tracking, retour en haut de page">
          <Wordmark />
        </a>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-[15px] font-medium text-zinc-700 transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="border-t border-zinc-200 bg-white md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-md px-2 text-base font-medium text-zinc-800 hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-2">
              <Button asChild className="w-full">
                <a href={hero.primaryCta.href} onClick={() => setOpen(false)}>
                  {hero.primaryCta.label}
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
