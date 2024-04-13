import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

import type { ButtonProps } from "@/types/components/button.types"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button"

    return (
      <Component
        className={cn(
          "ring-offset-background bg-p-background focus-visible:ring-ring text-p-foreground border-p-border inline-flex items-center justify-center gap-3.5 whitespace-nowrap rounded-full border px-7 py-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
