'use client'

import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import Link from "next/link"
import { DoorOpen, FolderTree } from "lucide-react"

const Footer = () => {
  const pathname = usePathname()
  const is = (path: string) => pathname === path

  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto max-w-[1200px] px-5 max-md:hidden">
      <div className="bg-background absolute -inset-x-6 -top-8 z-[-1] block h-11 blur-md"/>
      <div className="bg-background border-border flex items-center justify-between border-t pb-8 pt-6">
        <div className="flex gap-4">
          <Button asChild variant={is('/') ? 'filled' : 'outline'}>
            <Link href="/">
              <DoorOpen className="min-w-6" />
              Home
            </Link>
          </Button>

          <Button asChild variant={is('/projects') ? 'filled' : 'outline'}>
            <Link href="/projects">
              <FolderTree className="min-w-6" />
              Projects
            </Link>
          </Button>
        </div>

        <p className="text-muted-foreground">
          {new Date().getFullYear()} © Eduardo Ribas.
        </p>
      </div>
    </div>
  )
}

export default Footer