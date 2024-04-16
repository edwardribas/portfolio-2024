import type { LanguageOptionsProps } from "@/types/components/lanugage-option.types"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export const LanguageOption = ({
  active,
  alt,
  label,
  className,
  onClick,
}: LanguageOptionsProps) => {
  return (
    <Button
      aria-label={alt}
      disabled={active}
      aria-disabled={active}
      onClick={onClick}
      className={cn(
        "text-p-foreground size-[44px] select-none self-center rounded-[18px] border-none px-0 text-xs font-semibold leading-[normal] transition-all duration-300",
        className,
        {
          "bg-p-border !text-p-foreground": active,
        }
      )}
    >
      {label}
    </Button>
  )
}
