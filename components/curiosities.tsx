'use client'

import useEmblaCarousel from "embla-carousel-react"
import Card from "./card"
import Autoplay from 'embla-carousel-autoplay'

const Curiosities = () => {
  const [ref, api] = useEmblaCarousel({
    loop: true,
    active: true,
    align: "start",
  }, [Autoplay({
    playOnInit: true,
    delay: 2000,
  })])

  return (
    // embla
    <div className="space-y-4">
      <div className="gap-6 overflow-hidden" ref={ref}>
        {/* container */}
        <div className="grid auto-cols-[75%] grid-flow-col gap-6 sm:auto-cols-[40%]">
          <div className="ml-6">
            <Curiosity message="first" />
          </div>
          <div>
            <Curiosity message="June 13, 2022 marks the beginning of my first internship!" />
          </div>
          <div>
            <Curiosity message="June 13, 2022 marks the beginning of my first internship!" />
          </div>
          <div>
            <Curiosity message="June 13, 2022 marks the beginning of my first internship!" />
          </div>
          <div>
            <Curiosity message="last" />
          </div>
        </div>
      </div>
    </div>
  )
}

type CuriosityProps = { message: string }

const Curiosity = ({ message }: CuriosityProps) => (
  <Card className="h-full w-full space-y-[18px]">
    <p className="text-foreground">
      {message}
    </p>

    <p className="text-muted-foreground">
      Curiosities
    </p>
  </Card>
)

export default Curiosities