import Card from "@/components/card"
import Container from "@/components/container"
import Curiosities from "@/components/curiosities"
import HighlightCard from "@/components/highlight-card"
import { Info } from "lucide-react"
import Image from "next/image"

const Home = () => {
  return (
    <Container className="max-lg:space-y-10 lg:grid lg:grid-cols-8 lg:space-x-8">
      <Card className="space-y-[18px] lg:col-span-5">
        <div className="inline-flex items-center gap-2.5">
          <Image
            src="https://avatars.githubusercontent.com/u/94547625?v=4"
            alt="Avatar of Eduardo Ribas"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />

          <p className="text-muted-foreground">
            A little bit about me
          </p>
        </div>

        <div className="text-foreground/70 [&:not(:has(p:hover))&>p:first-of-type]:text-foreground [&>p:hover]:text-foreground group space-y-7 [&>p]:leading-[156%] [&>p]:transition-colors [&>p]:duration-300 [&>p]:ease-in-out">
          <p>
            Hello, I&apos;m Eduardo Ribas, a web application developer who constantly seeks modern and efficient solutions. My passion lies in utilizing innovative technologies like NextJS and Tailwind CSS to craft engaging and functional user experiences.
          </p>

          <p>
            I firmly believe that success in this field is intricately tied to effective communication and collaboration. That&apos;s why I deeply value teamwork, always striving to integrate ideas and efforts to achieve exceptional outcomes.
          </p>

          <p>
            My aim is to go beyond mere development and offer solutions that blend attractive design with an intuitive user experience. I&apos;m committed to creating products that not only function but also captivate users, making their journey memorable.
          </p>
        </div>

        <HighlightCard
          alt="Tecnologia Única's Logo"
          img="/highlight-unica.png"
          title="Web Developer"
          description="Since June 2023, I work as a Web Developer in Tecnologia Única. I deal everyday with different challenges and I always give my best to deliver the best solution to the final consumer."
          icon={Info}
        />
      </Card>

      <Curiosities className="lg:col-span-3" />
    </Container>
  )
}

export default Home