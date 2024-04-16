import { cn } from "@/lib/utils"
import type { PageAnimationProps } from "@/types/components/page-animation.types"

export const PageAnimation = ({ children, className }: PageAnimationProps) => {
  return <div className={cn('slide-in-from-bottom-3 animate-in fade-in-15 duration-300', className)}>{children}</div>
}
