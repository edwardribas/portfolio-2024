"use client"

import { outfitSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: cn(
            "toast group-[.toaster]:bg-p-background group-[.toaster]:text-p-foreground border-p-border/60 group p-5 text-sm group-[.toast]:gap-6 group-[.toaster]:rounded-[14px] group-[.toaster]:shadow-lg",
            outfitSans.className
          ),
          description: "group-[.toast]:text-p-muted-foreground",
          content: 'gap-[6px]',
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
