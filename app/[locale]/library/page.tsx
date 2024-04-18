import { Divider } from "@/components/divider"
import { PageAnimation } from "@/components/page-animation"
import { Introduction } from "@/sections/library/introduction"
import { Projects } from "@/sections/library/projects"
import type { Metadata } from "next/types"

// todo: translate metadata

export const metadata: Metadata = {
  title: "Biblioteca • Eduardo Ribas",
  description: "Bem-vindo ao meu portfólio",
}

const Library = () => {
  return (
    <PageAnimation className="space-y-20">
      <Introduction />
      <Divider variant="gradient" />
      <Projects />
    </PageAnimation>
  )
}

export default Library
