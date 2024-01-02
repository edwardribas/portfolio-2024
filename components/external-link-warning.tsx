import { ChildrenProps } from "@/types/utils"
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer"
import { Button } from "./ui/button"
import Link from "next/link"
import { DialogClose } from "./ui/dialog"

type ExternalLinkWarningProps = {
  title: string
  href: string
  target?: "_self" | "_blank"
} & ChildrenProps

const ExternalLinkWarning = ({
  children, href, title, target = "_self"
}: ExternalLinkWarningProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild aria-label={`Open confirmation dialog to go to ${title}`}>
        {children}
      </DrawerTrigger>

      <DrawerContent className="space-y-6">
        <div className="space-y-3">
          <DrawerTitle className="text-foreground">
            Leaving portfolio
          </DrawerTitle>

          <p className="text-muted-foreground">
            Click on confirm button to go to <Link href={href} target={target} className="text-foreground underline underline-offset-2">{title}</Link>.
          </p>
        </div>

        <div className="flex gap-2.5">
          <DialogClose asChild>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DialogClose>

          <Button asChild variant="filled" className="w-full">
            <Link href={href} target={target}>
              Confirm
            </Link>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default ExternalLinkWarning