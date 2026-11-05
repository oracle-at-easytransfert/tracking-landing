import { cn } from "@/lib/utils"

/** Logo officiel suivi de la marque texte. */
export function Wordmark({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img src="/icon-dark.png" alt="" aria-hidden width={36} height={36} className="size-9 shrink-0 rounded-lg" />
      <span className={cn("text-lg font-bold tracking-tight", dark ? "text-white" : "text-ink")}>
        KAYBIC <span className={dark ? "font-medium text-zinc-300" : "font-medium text-zinc-600"}>Tracking</span>
      </span>
    </span>
  )
}

type HeadingProps = {
  eyebrow: string
  title: string
  intro?: string
  id: string
  dark?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, intro, id, dark, className }: HeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className={cn("text-sm font-semibold uppercase tracking-[0.14em]", dark ? "text-brand-on-dark" : "text-brand")}>
        {eyebrow}
      </p>
      <h2 id={id} className={cn("mt-3 text-3xl font-bold sm:text-4xl", dark ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {intro && <p className={cn("mt-4 text-lg", dark ? "text-zinc-300" : "text-muted-foreground")}>{intro}</p>}
    </div>
  )
}
