import { ClassProps } from "@/types/utils"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "./ui/drawer"
import { Button } from "./ui/button"

type HighlightCardProps = {
  title: string
  img: string
  icon: LucideIcon
  alt: string
  description: string
} & ClassProps

const HighlightCard = ({ icon: Icon, img, alt, title, className, description }: HighlightCardProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "xxsm:py-2 xxsm:pr-2.5 space-x-8 px-5 py-4",
            className
          )}
        >
          <div className="inline-flex items-center gap-2.5">
            <Image
              src={img}
              alt={alt}
              width={30}
              height={30}
              className="select-none rounded-full object-cover"
            />

            <p className="text-foreground max-xxsm:text-ellipsis max-xxsm:overflow-hidden">
              {title}
            </p>
          </div>

          <span className="border-border max-xxsm:hidden text-foreground flex h-11 w-11 min-w-11 select-none rounded-full border">
            <Icon className="m-auto" size={18} />
          </span>
        </Button>
      </DrawerTrigger>

      <DrawerContent className="space-y-3">
        <DrawerTitle className="text-foreground">
          {title}
        </DrawerTitle>

        <DrawerDescription className="text-muted-foreground text-base">
            {description}
        </DrawerDescription>
      </DrawerContent>
    </Drawer>
  )
}

export default HighlightCard