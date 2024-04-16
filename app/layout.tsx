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
  title: "Portfólio • Eduardo Ribas",
  description: "Bem-vindo ao meu portfólio",
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
        <div className="mx-auto flex w-full max-w-[1382px] justify-center">
          <LeftBar />

          <div className="flex-[2]">
            <Header />

            <main className="mx-auto flex max-w-[980px] flex-col px-[60px]">
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
