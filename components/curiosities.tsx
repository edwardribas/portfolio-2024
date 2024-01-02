'use client'

import useEmblaCarousel from "embla-carousel-react"
import Card from "./card"
import Autoplay from 'embla-carousel-autoplay'
import { ClassProps } from "@/types/utils"
import { cn } from "@/lib/utils"

const Curiosities = ({ className }: ClassProps) => {
  return (
    <div className={cn(className)}>
      <DesktopCarousel className='max-lg:hidden' />
      <MobileCarousel className='lg:hidden' />
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

const MobileCarousel = ({ className }: ClassProps) => {
  const [ref] = useEmblaCarousel({
    loop: true,
    active: true,
    align: "center",
  }, [Autoplay({
    playOnInit: true,
    delay: 2000,
  })])

  return (
    <div className={className}>
      <div className="gap-6 overflow-hidden" ref={ref}>
        <div className="grid auto-cols-[75%] grid-flow-col gap-6 sm:auto-cols-[40%]">
          <div>
            <div className="h-full pl-6">
              <Curiosity message="first" />
            </div>
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

const DesktopCarousel = ({ className }: ClassProps) => {
  const [ref] = useEmblaCarousel({
    loop: true,
    active: true,
    align: "start",
    axis: "y",
  }, [Autoplay({
    playOnInit: true,
    delay: 2000,
  })])

  return (
    <div className={className}>
      <div className="gap-6 overflow-hidden" ref={ref}>
        <div className="grid h-[542px] auto-cols-fr grid-flow-row gap-6">
          <div>
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
            <div className="pb-6">
              <Curiosity message="last" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curiosities