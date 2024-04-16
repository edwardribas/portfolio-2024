"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"
import type { MenuLinkProps } from "@/types/components/menu-link.types"

export const MenuLink = ({
  children,
  className,
  tooltip,
  alt,
  tooltipDirection = "right",
  ...props
}: MenuLinkProps) => {
  const pathname = usePathname()
  const selected = pathname === props.href

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0} disableHoverableContent>
        <TooltipTrigger asChild aria-label={alt}>
          <Link
            className={cn(
              " grid size-[60px] place-items-center rounded-[26px] bg-transparent p-[5px] transition-colors duration-300 ease-in-out",
              {
                "bg-p-muted-border": selected,
                "hover:bg-p-muted-border/80": !selected,
              },
              className
            )}
            {...props}
          >
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent sideOffset={12} side={tooltipDirection}>
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
