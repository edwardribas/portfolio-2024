"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import { Divider } from "./divider"
import type { ProjectProps } from "@/types/components/project.types"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

export const Project = ({
  description,
  image,
  title,
  year,
  className,
}: ProjectProps) => {
  const [isDescriptionCollapsed, setIsDescriptionCollapsed] = useState(true)

  return (
    <article
      onClick={() => setIsDescriptionCollapsed((old) => !old)}
      aria-label={
        isDescriptionCollapsed
          ? "Abrir descrição do projeto"
          : "Fechar descrição do projeto"
      }
      className={cn(
        "bg-p-project-background hover:bg-p-project-background/60 active:bg-p-project-background flex cursor-pointer select-none break-inside-avoid flex-col items-center justify-between space-y-5 rounded-[40px] px-[35px] py-[30px] transition-colors duration-300 ease-in-out",
        className
      )}
    >
      <header className="flex w-full items-center justify-between gap-3">
        <h3 className="font-medium">{title}</h3>

        <div className="flex items-center gap-3">
          <h4 className="text-p-muted-foreground text-[15px]">Desde {year}</h4>

          <Image
            src="/icons/solar-round-alt-arrow-down-broken.svg"
            width={24}
            height={24}
            className={cn(
              "rotate-0 transition-all duration-300 ease-in-out",
              isDescriptionCollapsed && "rotate-180"
            )}
            alt={
              isDescriptionCollapsed
                ? "Seta virada para baixo"
                : "Seta virada para cima"
            }
          />
        </div>
      </header>

      <AnimatePresence>
        <motion.div
          variants={{
            initial: { height: 0, marginTop: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1, marginTop: 20 },
          }}
          initial="initial"
          exit={{ height: 0 }}
          className="overflow-hidden"
          transition={{ duration: 0.25 }}
          animate={isDescriptionCollapsed ? "initial" : "animate"}
          aria-hidden={isDescriptionCollapsed}
        >
          <p
            className={cn(
              "text-muted-foreground w-full overflow-y-hidden leading-[24px] opacity-100 transition-all duration-300 ease-in-out"
            )}
          >
            {description}
          </p>
        </motion.div>
      </AnimatePresence>

      <Divider />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title}
        width={347}
        height={195}
        className="max-h-[350px] w-full rounded-[38px] object-cover"
      />
    </article>
  )
}

// todo: translate elements in this page
// todo: change img to Image
// also verify if it's worth to put the container as another component
// columns-2 gap-6 space-y-6
