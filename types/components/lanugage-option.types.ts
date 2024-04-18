import type { OptionalClassProps } from "../utils.types"

export type LanguageOptionsProps = {
  label: string
  alt: string
  active: boolean
  disabled?: boolean
  onClick: () => void
} & OptionalClassProps
