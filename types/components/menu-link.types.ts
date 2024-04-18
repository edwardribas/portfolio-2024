import type { LinkProps } from "next/link"
import type { ChildrenProps, OptionalClassProps } from "../utils.types"

export type MenuLinkProps = {
  tooltip: string
  tooltipDirection?: "right" | "left"
  alt: string
  href: string
  target?: "_blank" | "_self"
} & ChildrenProps &
  OptionalClassProps
