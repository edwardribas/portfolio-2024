"use client"

import { useEffect, useState } from "react"
import { Skeleton } from "./ui/skeleton"

const TIME_UPDATE_SECONDS_COUNTDOWN = 5

export const LocalTime = () => {
  const [localTime, setLocalTime] = useState<string | null>(null)

  useEffect(() => {
    const newTime = new Date().toLocaleTimeString("pt-br", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })

    setLocalTime(newTime)

    const localInterval = setInterval(() => {
      setLocalTime(newTime)
    }, TIME_UPDATE_SECONDS_COUNTDOWN * 1000)

    return () => clearInterval(localInterval)
  }, [])

  return (
    <>
      {localTime === null ? (
        <Skeleton className="h-[20px] w-[32.5px] rounded-full" />
      ) : (
        <p className="text-p-foreground text-sm font-bold">
          {localTime}
        </p>
      )}
    </>
  )
}
