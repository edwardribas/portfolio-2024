import { About } from "@/sections/home/about"
import { Curriculum } from "@/sections/home/curriculum"
import { Hero } from "@/sections/home/hero"
import type { Metadata } from "next/types"

// todo: translate metadata

export const metadata: Metadata = {
  title: "Home • I'm Edward",
  description: "Be welcome to my portfolio.",
}

const Home = () => {
  return (
    <div className="space-y-[110px]">
      <Hero />
      <Curriculum />
      <About />
    </div>
  )
}

export default Home
