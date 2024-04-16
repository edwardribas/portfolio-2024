import type { LinkProps } from "next/link"
import type { ChildrenProps, OptionalClassProps } from "../utils.types"

export type MenuLinkProps = {
  tooltip: string
  tooltipDirection?: "right" | "left"
  alt: string
} & LinkProps &
  ChildrenProps &
  OptionalClassProps
