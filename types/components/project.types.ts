import type { Project } from "@/actions/_types"
import type { OptionalClassProps } from "../utils.types"

export type ProjectProps = Omit<Project, "id" | "created_at" | "highlight"> &
  OptionalClassProps & {
    collapseAriaLabel: {
      open: string
      close: string
      arrow: {
        up: string
        down: string
      }
    }
  }
