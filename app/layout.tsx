import "@/styles/globals.css"
import { outfitSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import type { Metadata } from "next/types"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LeftBar } from "@/components/leftbar"
import { RightBar } from "@/components/rightbar"

// todo: translate metadata

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
        <div className="mx-auto flex w-full max-w-[1382px] justify-between">
          <LeftBar />

          <div>
            <Header />

            <main className="mx-auto flex max-w-[860px] flex-col">
              {children}
            </main>

            <Footer />
          </div>

          <RightBar />
        </div>
      </body>
    </html>
  )
}

// todo: adjust layout
