import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-lg border border-input bg-white px-4 text-base text-ink placeholder:text-zinc-500 transition-colors focus-visible:border-ring disabled:opacity-50 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
