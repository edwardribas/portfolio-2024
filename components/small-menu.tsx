'use client'

import { ChildrenProps } from "@/types/utils"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"
import { Button } from "./ui/button"
import { DoorOpen, FolderTree, Globe, SunMoon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SmallMenu = ({ children }: ChildrenProps) => {
  const pathname = usePathname()
  const is = (path: string) => pathname === path

  return (
    <Drawer>
      <DrawerTrigger aria-label="Open navigation menu" asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent className="space-y-14">
        <div className="flex flex-col gap-4">
          <Button asChild variant={is('/') ? 'filled' : 'outline'} className="justify-start">
            <Link href="/">
              <DoorOpen className="min-w-6" />
              Home
            </Link>
          </Button>

          <Button asChild variant={is('/projects') ? 'filled' : 'outline'} className="justify-start">
            <Link href="/projects">
              <FolderTree className="min-w-6" />
              Projects
            </Link>
          </Button>
        </div>

        <div className="flex w-full space-x-2.5">
          <LanguageMenu>
            <Button className="xsm:justify-start w-full" variant="outline">
              <Globe className="min-w-6" />
              <span className="max-xsm:hidden">
                English
              </span>
            </Button>
          </LanguageMenu>

          <Button className="xsm:justify-start w-full" variant="outline">
            <SunMoon className="min-w-6" />
            <span className="max-xsm:hidden">
              Dark mode
            </span>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

const LanguageMenu = ({ children }: ChildrenProps) => {
  return (
    <Drawer nested>
      <DrawerTrigger aria-label="Open language menu" asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent className="space-y-14">
        <div className="flex w-full space-x-2.5 p-6 pt-10">
          <Button aria-label="Choose Portuguese" className="xsm:justify-start w-full" variant="outline">
            <Image
              src="/country-br.svg"
              alt="Flag of Brazil"
              width={30}
              height={30}
              className="h-7 w-7 rounded-[20px] object-cover"
            />

            <span className="max-xsm:hidden">
              Portuguese
            </span>
          </Button>

          <Button aria-label="Choose English" className="xsm:justify-start w-full" variant="outline">
            <Image
              src="/country-us.svg"
              alt="Flag of the United States"
              width={30}
              height={30}
              className="h-7 w-7 rounded-[20px] object-cover"
            />

            <span className="max-xsm:hidden">
              English
            </span>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default SmallMenu