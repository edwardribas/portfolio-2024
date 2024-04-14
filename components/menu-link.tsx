"use client"

import { cn } from "@/lib/utils"
import { ChildrenProps, OptionalClassProps } from "@/types/utils.types"
import type { LinkProps } from "next/link"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

type MenuLink = {
  tooltip: string
  tooltipDirection?: "right" | "left"
  alt: string
} & LinkProps &
  ChildrenProps &
  OptionalClassProps

export const MenuLink = ({
  children,
  className,
  tooltip,
  alt,
  tooltipDirection = "right",
  ...props
}: MenuLink) => {
  const pathname = usePathname()
  const selected = pathname === props.href

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0} disableHoverableContent>
        <TooltipTrigger asChild aria-label={alt}>
          <Link
            className={cn(
              "hover:bg-p-muted-border grid size-[60px] place-items-center rounded-[26px] bg-transparent p-[5px] transition-colors duration-300 ease-in-out",
              selected && "bg-p-muted-border",
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
