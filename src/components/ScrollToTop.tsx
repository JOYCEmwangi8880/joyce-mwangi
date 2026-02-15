"use client"

import React, { useEffect, useState } from "react"
import { ArrowUp, ArrowDown } from "lucide-react"

export default function ScrollToTop() {
  const [showUp, setShowUp] = useState(false)
  const [showDown, setShowDown] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const check = () => {
      const scY = window.scrollY
      const innerH = window.innerHeight
      const docH = document.documentElement.scrollHeight
      setShowUp(scY > 300)
      setShowDown(innerH + scY < docH - 100)
    }

    check()
    window.addEventListener("scroll", check)
    window.addEventListener("resize", check)
    return () => {
      window.removeEventListener("scroll", check)
      window.removeEventListener("resize", check)
    }
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })

  if (!showUp && !showDown) return null

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      {showDown && (
        <button
          aria-label="Scroll to bottom"
          onClick={scrollToBottom}
          className="bg-cyan-500 text-slate-950 p-3 rounded-full shadow-lg hover:bg-cyan-400 transition"
        >
          <ArrowDown size={18} />
        </button>
      )}

      {showUp && (
        <button
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="bg-cyan-500 text-slate-950 p-3 rounded-full shadow-lg hover:bg-cyan-400 transition"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  )
}
