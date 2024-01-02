import { cn } from "@/lib/utils"
import { ClassChildrenProps } from "@/types/utils"

const Container = ({ className, children }: ClassChildrenProps) => {
  return (
    <main className={cn('mx-auto max-w-[1200px] px-5 pb-52 pt-5 sm:pt-[60px]', className)}>
      {children}
    </main>
  )
}

export default Container