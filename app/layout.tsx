import "@/styles/globals.css"
import { outfitSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

import type { Metadata } from "next/types"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ProfilePicture } from "@/components/profile-picture"

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
        <ScrollArea className="h-dvh">
          <div className="mx-auto flex w-full max-w-[1382px] justify-between">
            <aside className="border-p-border sticky top-0 flex h-dvh flex-col items-center justify-between border-r px-5 py-[30px]">
              <ProfilePicture size={60} className="border-[5px]" />

              <nav className="flex flex-col gap-6">
                <Link href="/">a</Link>
                <Link href="/library">b</Link>
              </nav>

              <span>icon</span>
            </aside>

            <div>
              <Header />

              <main className="mx-auto flex max-w-[860px] flex-col">
                {children}
              </main>

              <Footer />
            </div>

            <aside className="border-p-border sticky top-0 flex h-dvh flex-col items-center justify-center border-l px-5 py-[30px]">
              <nav className="flex flex-col gap-6">
                <Link href="/">a</Link>
                <Link href="/library">b</Link>
                <Link href="/404">c</Link>
              </nav>
            </aside>
          </div>
        </ScrollArea>
      </body>
    </html>
  )
}
