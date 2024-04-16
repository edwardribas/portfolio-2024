"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { LanguageOption } from "./language-option"
import { cn } from "@/lib/utils"

export const LanguageSwitch = () => {
  const [isSwitchOpen, setIsSwitchOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState("pt")

  const handleSwitchClick = () => {
    setIsSwitchOpen((prev) => !prev)
  }

  return (
    <div className="bg-p-background relative flex flex-col">
      <AnimatePresence>
        {isSwitchOpen && (
          <motion.div
            initial={{ filter: "blur(4px)", opacity: 0, y: 10, zIndex: -1 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: -15, zIndex: 1 }}
            exit={{ filter: "blur(4px)", opacity: 0, y: 10, zIndex: -1 }}
            className="border-p-border absolute bottom-full flex w-[60px] flex-col gap-1 rounded-[26px] border p-2"
          >
            <LanguageOption
              active={selectedLang === "pt"}
              alt="Alterar idioma para português"
              label="PT"
              onClick={() => setSelectedLang("pt")}
            />
            <LanguageOption
              active={selectedLang === "en"}
              alt="Alterar idioma para inglês"
              label="EN"
              onClick={() => setSelectedLang("en")}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={handleSwitchClick}
        aria-selected={isSwitchOpen}
        className={cn(
          "border-p-border grid size-[60px] place-items-center rounded-[26px] bg-transparent p-[5px] transition-colors duration-300 ease-in-out",
          { "bg-p-border": isSwitchOpen, "hover:bg-p-border/40": !isSwitchOpen }
        )}
      >
        <Image
          src="/icons/solar-globe-duotone.svg"
          width={24}
          height={24}
          className="size-6"
          alt="Simbolo de um globo"
        />
      </Button>
    </div>
  )
}

// todo: translate this page
