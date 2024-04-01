import type { Metadata } from "next"
import "@/styles/globals.css"
import { outfitSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "I'm Edward",
  description: "Be welcome to my portfolio.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "bg-p-background text-p-foreground h-full min-h-dvh",
          outfitSans.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
