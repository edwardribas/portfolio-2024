'use client'

import { ChildrenProps } from "@/types/utils"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command"
import { Slot } from "@radix-ui/react-slot"
import { RefObject, createRef, useEffect, useRef, useState } from "react"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"
import { FolderOpen, FolderTree, Globe, Home, Leaf } from "lucide-react"
import { ScrollArea } from "./ui/scroll-area"

const SearchBox = ({ children }: ChildrenProps) => {
  const inputRef = createRef<HTMLInputElement>()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === '/' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        return setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [open])

  return (
    <Drawer open={open} onOpenChange={e => setOpen(e)}>
      <DrawerTrigger aria-label="Open search menu" asChild onClick={() => setOpen(true)}>
        {children}
      </DrawerTrigger>

      <DrawerContent className="space-y-14">
        <Command className="overflow-x-hidden bg-transparent">
          <ScrollArea className="h-[300px]">
            <CommandGroup heading="Useful links">
              <CommandItem>
                <Globe size={14} /> Github
              </CommandItem>
              <CommandItem>
                <Globe size={14} /> LinkedIn
              </CommandItem>
              <CommandItem>
                <Globe size={14} /> X (Twitter)
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Pages">
              <CommandItem>
                <Home size={14} /> Home
              </CommandItem>
              <CommandItem>
                <FolderTree size={14} /> Projects
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="My projects">
              <CommandItem>
                <FolderOpen size={14} /> Devely
              </CommandItem>
              <CommandItem>
                <FolderOpen size={14} /> Frontside
              </CommandItem>
              <CommandItem>
                <FolderOpen size={14} /> Fylo landing page
              </CommandItem>
            </CommandGroup>
          </ScrollArea>

          <CommandEmpty className="text-muted-foreground mt-[-300px] space-y-3 text-center">
            <Leaf className="mx-auto" />
            <span className="block">
              Your query didn&apos;t return any results.
            </span>
          </CommandEmpty>

          <CommandInput
            autoFocus
            ref={inputRef}
            className="bg-ligher-background border-border text-muted-foreground z-[2] mt-4 rounded-full border px-6 py-7 text-base"
            placeholder="Type a command or search..."
          />
        </Command>
      </DrawerContent>
    </Drawer>
  )
}

export default SearchBox