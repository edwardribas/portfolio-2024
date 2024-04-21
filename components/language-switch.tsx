"use client"

import { useState, useTransition } from "react"
import { Button } from "./ui/button"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { LanguageOption } from "./language-option"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "@/navigation"
import { useParams } from "next/navigation"
import { LanguageSwitchProps } from "@/types/components/language-switch.types"

export const LanguageSwitch = ({ translations }: LanguageSwitchProps) => {
  const { globeAlt, languageSwitchButtonAlt, switchToEnglishAlt, switchToPortugueseAlt } = translations

  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()

  const [isSwitchOpen, setIsSwitchOpen] = useState(false)
  const [pending, startTransition] = useTransition()

  const handleSwitchClick = () => {
    setIsSwitchOpen((prev) => !prev)
  }

  const handleSwitchLanguage = (nextLang: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLang }
      );
    })
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
              disabled={pending}
              active={params.locale === "pt"}
              alt={switchToPortugueseAlt}
              label="PT"
              onClick={() => !pending && handleSwitchLanguage("pt")}
            />

            <LanguageOption
              disabled={pending}
              active={params.locale === "en"}
              alt={switchToEnglishAlt}
              label="EN"
              onClick={() => !pending && handleSwitchLanguage("en")}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={handleSwitchClick}
        aria-label={languageSwitchButtonAlt}
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
          alt={globeAlt}
        />
      </Button>
    </div>
  )
}
