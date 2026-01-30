"use client"

import React from "react"

import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-slate-400">Let's Start A New Project</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Location */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                <MapPin size={32} className="text-slate-950" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Location</h3>
                <p className="text-slate-400">Nairobi, Kenya</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                <Phone size={32} className="text-slate-950" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Phone</h3>
                <a href="tel:+254745913429" className="text-slate-400 hover:text-cyan-400 transition">
                  +254 745 913 429
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                <Mail size={32} className="text-slate-950" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Email</h3>
                <a href="mailto:joycewanguim2020@gmail.com" className="text-slate-400 hover:text-cyan-400 transition">
                  joycewanguim2020@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 animate-slide-in-right">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition"
              />
              <input
                type="text"
                placeholder="Subject "
                className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition"
              />
            </div>

            <textarea
              placeholder="Write your message "
              rows={5}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="px-8 py-3 bg-cyan-500 text-slate-950 font-semibold rounded hover:bg-cyan-400 transition hover:scale-105 animate-bounce-in"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center mt-16">
          <p className="text-slate-500 text-sm">
            © 2026 Joyce Mwangi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
