import { cn } from "@/lib/utils"
import { ClassChildrenProps } from "@/types/utils"

const Container = ({ className, children }: ClassChildrenProps) => {
  return (
    <main className={cn('animate-in slide-in-from-bottom-5 fade-in-20 mx-auto max-w-[1200px] px-5 pb-52 pt-5 duration-500 ease-in-out sm:pt-[60px] md:py-20 md:pb-[calc(128px+80px)] ', className)}>
      {children}
    </main>
  )
}

export default Container