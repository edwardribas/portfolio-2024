'use client'

import { CornerDownLeft, Github, Menu } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"
import SmallMenu from "./small-menu"
import SearchBox from "./search-box"
import ExternalLinkWarning from "./external-link-warning"

const Header = () => {
  return (
    <header className="bg-background before:bg-background fixed inset-x-0 bottom-0 z-10 mx-auto max-w-[1200px] space-y-5 px-6 pb-8 pt-3 before:absolute before:-top-2 before:left-0 before:z-[-5] before:block before:min-h-7 before:w-full before:blur-sm">
      <div className="flex justify-between gap-2">
        <ExternalLinkWarning href="https://github.com/edwardribas" title="Github">
          <Button variant="outline" className="xsm:pr-2.5 max-xsm:px-2 justify-between gap-6 py-2">
            <span className="max-xsm:hidden flex items-center gap-2.5">
              <Github />
              edwardribas
            </span>

            <Image
              src="https://avatars.githubusercontent.com/u/94547625?v=4"
              alt="Avatar of Eduardo Ribas"
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
          </Button>
        </ExternalLinkWarning>

        <SmallMenu>
          <Button variant="outline" className="xsm:w-[62px] xsm:p-0 h-[62px]">
            <Menu />
            <span className="max-xsm:inline hidden">
              Menu
            </span>
          </Button>
        </SmallMenu>
      </div>

      <SearchBox>
        <Button
          scaleWhenActive={false}
          variant="outline"
          className="bg-ligher-background w-full justify-between py-2 pr-2.5"
        >
          <span className="overflow-hidden text-ellipsis">
            Search for projects and commands
          </span>

          <span className="text-foreground bg-border flex h-11 w-11 rounded-full">
            <CornerDownLeft className="m-auto min-w-11"/>
          </span>
        </Button>
      </SearchBox>
    </header>
  )
}

export default Header