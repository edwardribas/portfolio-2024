"use client"

import { useEffect, useState } from "react"

export const CurrentYear = () => {
  const [year, setYear] = useState(2024)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return <>{year}</>
}
