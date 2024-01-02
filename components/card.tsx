import { cn } from "@/lib/utils"
import { ClassChildrenProps } from "@/types/utils"

const Card = ({ children, className, }: ClassChildrenProps) => {
  return (
    <div className={cn(
      'border-border rounded-[30px] border p-6',
      className
    )}>
      {children}
    </div>
  )
}

export default Card