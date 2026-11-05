import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-32 w-full rounded-lg border border-input bg-white px-4 py-3 text-base text-ink placeholder:text-zinc-500 transition-colors focus-visible:border-ring disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
