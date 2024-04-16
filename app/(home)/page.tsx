import { PageAnimation } from "@/components/page-animation"
import { About } from "@/sections/home/about"
import { Curriculum } from "@/sections/home/curriculum"
import { Hero } from "@/sections/home/hero"
import type { Metadata } from "next/types"

// todo: translate metadata

export const metadata: Metadata = {
  title: "Início • Eduardo Ribas",
  description: "Bem-vindo ao meu portfólio",
}

const Home = () => {
  return (
    <PageAnimation className="space-y-[110px]">
      <Hero />
      <Curriculum />
      <About />
    </PageAnimation>
  )
}

export default Home
