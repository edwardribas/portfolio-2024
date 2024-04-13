import { cn } from "@/lib/utils"
import { DividerProps } from "@/types/components/divider.types"

export const Divider = ({ variant = "solid", className }: DividerProps) => {
  return (
    <hr
      className={cn(
        "h-px w-full border-none",
        variant === "solid" && "bg-p-border",
        variant === "gradient" && "via-p-border from-p-background to-p-background bg-gradient-to-r",
        className
      )}
    />
  )
}

// todo: add remaining variant to this component
