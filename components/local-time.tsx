"use client"

import { useEffect, useState } from "react"

const TIME_UPDATE_SECONDS_COUNTDOWN = 5

export const LocalTime = () => {
  const [localTime, setLocalTime] = useState("00:00 AM")

  useEffect(() => {
    const newTime = new Date().toLocaleTimeString("pt-br", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })

    setLocalTime(newTime)

    const localInterval = setInterval(() => {
      setLocalTime(newTime)
    }, TIME_UPDATE_SECONDS_COUNTDOWN * 1000)

    return () => clearInterval(localInterval)
  }, [])

  return (
    <>{localTime}</>
  )
}
