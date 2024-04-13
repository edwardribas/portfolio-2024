import { Divider } from "@/components/divider"
import { Introduction } from "@/sections/library/introduction"
import { Projects } from "@/sections/library/projects"
import type { Metadata } from "next/types"

// todo: translate metadata

export const metadata: Metadata = {
  title: "Library • I'm Edward",
  description: "Be welcome to my portfolio.",
}

const Library = () => {
  return (
    <div className="space-y-20">
      <Introduction />
      <Divider />
      <Projects />
    </div>
  )
}

export default Library
