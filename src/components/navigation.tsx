"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <img
      src="/images/logo.png"
      alt="Joyce logo"
      className="w-full h-full object-cover"
    />
            </div>
            {/* <span className="text-xl font-bold text-white hidden sm:inline">Joyce</span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-slate-400 hover:text-cyan-400 transition text-sm">
              About
            </a>
            <a href="#service" className="text-slate-400 hover:text-cyan-400 transition text-sm">
              Service
            </a>
            <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition text-sm">
              Skills
            </a>
            <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition text-sm">
              Contact
            </a>
          </div>

          {/* Download CV & Mobile Menu  */}
          <div className="flex items-center gap-4">
             <a
    href="https://docs.google.com/document/d/11TIeK6owGQXtHVsnltIbXQ7Wdpv4hOQp/edit?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden sm:flex items-center gap-2 px-4 py-2 bg-cyan-500 text-slate-950 font-semibold rounded text-sm hover:bg-cyan-400 transition"
  >
    <Download size={16} />
    View RESUME
  </a>

  <button
    className="md:hidden text-slate-400 hover:text-white"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800 space-y-3">
            <a
              href="#about"
              className="block py-2 text-slate-400 hover:text-cyan-400 text-sm"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#service"
              className="block py-2 text-slate-400 hover:text-cyan-400 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Service
            </a>
            <a
              href="#skills"
              className="block py-2 text-slate-400 hover:text-cyan-400 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block py-2 text-slate-400 hover:text-cyan-400 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
