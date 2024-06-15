"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import { Divider } from "./divider"
import type { ProjectProps } from "@/types/components/project.types"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

export const Project = ({
  description,
  created_year,
  demo_url,
  image_url,
  repository_url,
  title,
  className,
  collapseAriaLabel
}: ProjectProps) => {
  const [isDescriptionCollapsed, setIsDescriptionCollapsed] = useState(true)

  const buttonProps = {
    tabIndex: isDescriptionCollapsed ? -1 : 0,
    role: isDescriptionCollapsed ? "generic" : "button",
  }

  return (
    <div
      className={cn(
        "bg-p-project-background flex h-max min-w-[300px] flex-1 flex-col items-center justify-between space-y-8 rounded-b-[40px] rounded-t-[30px] p-[30px] text-left transition-colors duration-300 ease-in-out",
        className
      )}
    >
      <header className="flex w-full items-center justify-between gap-3">
        <h1 className="font-medium">{title}</h1>

        <button
          className="flex items-center gap-3"
          onClick={() => setIsDescriptionCollapsed((old) => !old)}
          aria-label={isDescriptionCollapsed
            ? collapseAriaLabel.open
            : collapseAriaLabel.close
          }
        >
          <p className="text-p-muted-foreground text-[15px]">Desde {created_year}</p>

          <Image
            src="/icons/solar-round-alt-arrow-down-broken.svg"
            width={24}
            height={24}
            className={cn(
              "size-6 rotate-0 transition-all duration-300 ease-in-out",
              isDescriptionCollapsed && "rotate-180"
            )}
            alt={
              isDescriptionCollapsed
                ? collapseAriaLabel.arrow.down
                : collapseAriaLabel.arrow.up
            }
          />
        </button>
      </header>

      <AnimatePresence>
        <motion.div
          variants={{
            initial: { height: 0, marginTop: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1, marginTop: 20 },
          }}
          initial="initial"
          exit={{ height: 0 }}
          className="flex w-full overflow-hidden"
          transition={{ duration: 0.6, type: 'spring', bounce: 0.35 }}
          animate={isDescriptionCollapsed ? "initial" : "animate"}
          aria-hidden={isDescriptionCollapsed}
        >
          <div className="flex flex-col gap-3 overflow-y-hidden">
            <p
              className={cn(
                "text-muted-foreground w-full text-left leading-[24px] opacity-100 transition-all duration-300 ease-in-out"
              )}
            >
              {description}
            </p>

            {(repository_url || demo_url) && (
              <div className="flex flex-wrap items-center gap-2">
                {repository_url && (
                  <Button asChild className="bg-p-project-background select-none">
                    <Link href={repository_url} target="_blank" {...buttonProps}>
                      Github
                    </Link>
                  </Button>
                )}

                {demo_url && (
                  <Button asChild className="bg-p-project-background select-none">
                    <Link href={demo_url} target="_blank" {...buttonProps}>
                      Demo
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <Divider />

      <Image
        src={image_url}
        alt={title}
        width={347}
        height={195}
        className="max-h-[250px] w-full rounded-[30px] object-cover"
      />
    </div>
  )
}
