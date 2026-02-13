"use client"

import React, { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" })

  if (!visible) return null

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleClick}
      className="fixed right-6 bottom-6 z-50 bg-cyan-500 text-slate-950 p-3 rounded-full shadow-lg hover:bg-cyan-400 transition"
    >
      <ArrowUp size={18} />
    </button>
  )
}
