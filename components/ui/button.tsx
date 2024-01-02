import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export type ButtonProps = {
  asChild?: boolean
  scaleWhenActive?: boolean
  variant?: "filled" | "outline"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  className, asChild, variant = 'filled', scaleWhenActive = true, ...props
}, ref) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(
        "inline-flex select-none items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-transparent px-[22px] py-5 text-base font-medium ring-offset-white transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
        scaleWhenActive && "active:scale-[.995]",
        variant === 'filled' && 'bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/70',
        variant === 'outline' && 'text-muted-foreground border-border hover:bg-border/20 active:bg-border/40 bg-transparent',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}
)

Button.displayName = "Button"

export { Button }
