import type { ChildrenProps, OptionalClassProps } from "../utils.types"

export type MenuLinkProps = {
  tooltip: string
  tooltipDirection?: "right" | "left"
  alt: string
} & ChildrenProps &
  OptionalClassProps &
  ConditionalMenuLinkProps

type ConditionalMenuLinkProps =
  | {
      href: string
      onClick?: never
      target?: "_blank" | "_self"
    }
  | {
      href?: never
      target?: never
      onClick: () => void
    }
