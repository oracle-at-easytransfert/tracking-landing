import type { Screen } from "@/screens"
import { cn } from "@/lib/utils"

type FrameProps = {
  screen: Screen
  className?: string
  /** true pour l'image principale (chargée en priorité, sans lazy loading) */
  priority?: boolean
  sizes?: string
}

/** Cadre de téléphone : bord noir, îlot, coins arrondis, ombre. */
export function PhoneFrame({ screen, className, priority, sizes = "(min-width: 1024px) 300px, 60vw" }: FrameProps) {
  return (
    <div
      className={cn(
        "relative aspect-[600/1347] rounded-[15%/6.7%] bg-zinc-900 p-[3.2%] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-zinc-600",
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[12.5%/5.6%] bg-black">
        <img
          src={screen.src}
          srcSet={screen.srcSet}
          sizes={sizes}
          width={screen.width}
          height={screen.height}
          alt={screen.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="h-full w-full object-cover"
        />
        {/* îlot / caméra */}
        <span aria-hidden className="absolute left-1/2 top-[1.6%] h-[3.2%] w-[30%] -translate-x-1/2 rounded-full bg-zinc-950 ring-1 ring-zinc-800" />
      </div>
      {/* boutons latéraux */}
      <span aria-hidden className="absolute -left-[3px] top-[18%] h-[7%] w-[3px] rounded-l bg-zinc-700" />
      <span aria-hidden className="absolute -right-[3px] top-[24%] h-[11%] w-[3px] rounded-r bg-zinc-700" />
    </div>
  )
}

/** Cadre de navigateur : barre avec pastilles et adresse neutre. */
export function BrowserFrame({ screen, className, priority, sizes = "(min-width: 1024px) 760px, 100vw" }: FrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      <div aria-hidden className="flex items-center gap-3 border-b border-zinc-200 bg-zinc-100 px-3 py-2 sm:px-4 sm:py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57] sm:size-3" />
          <span className="size-2.5 rounded-full bg-[#febc2e] sm:size-3" />
          <span className="size-2.5 rounded-full bg-[#28c840] sm:size-3" />
        </div>
        <div className="mx-auto w-full max-w-xs truncate rounded-md bg-white px-3 py-0.5 text-center text-[11px] text-zinc-500 sm:text-xs">
          Back-office KAYBIC Tracking
        </div>
        <span className="w-10 sm:w-12" />
      </div>
      <img
        src={screen.src}
        srcSet={screen.srcSet}
        sizes={sizes}
        width={screen.width}
        height={screen.height}
        alt={screen.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="block h-auto w-full"
      />
    </div>
  )
}
