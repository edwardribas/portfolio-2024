"use client"

import type { MenuLinkProps } from "@/types/components/menu-link.types"
import { Link, usePathname } from "@/navigation"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

import { tv } from "tailwind-variants"

const item = tv({
  base: "grid size-[60px] place-items-center rounded-[26px] bg-transparent p-[5px] transition-colors duration-300 ease-in-out",
  variants: {
    selected: {
      true: "bg-p-muted-border",
      false: "hover:bg-p-muted-border/80",
    }
  },
})

export const MenuLink = ({
  children,
  className,
  tooltip,
  alt,
  tooltipDirection = "right",
  href,
  target = "_self",
  onClick,
}: MenuLinkProps) => {
  const pathname = usePathname()
  const selected = pathname === href

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0} disableHoverableContent>
        <TooltipTrigger asChild aria-label={alt}>
          {onClick
            ? (
              <button
                onClick={onClick}
                className={item({ selected, className })}
              >
                {children}
              </button>
            )
            : (
              <Link
                className={item({ selected, className })}
                href={href as "/" | "/library"}
                target={target}
              >
                {children}
              </Link>
            )}
        </TooltipTrigger>
        <TooltipContent sideOffset={12} side={tooltipDirection}>
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}