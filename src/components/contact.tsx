"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import {sendEmail} from "@/lib/mail"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")
    const form = e.currentTarget

    try {
      const result = await sendEmail(new FormData(form))

      if (result.success) {
        setMessage("Message sent successfully! I'll get back to you soon.")
        form.reset()
        setTimeout(() => setMessage(""), 5000)
      } else {
        setMessage(result.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setMessage("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
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
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition"
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition"
              />
            </div>

            <textarea
              name="message"
              placeholder="Start writing message here"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition resize-none"
            ></textarea>

            {message && (
              <div className={`p-3 rounded text-sm ${message.includes("successfully") ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"}`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-cyan-500 text-slate-950 font-semibold rounded hover:bg-cyan-400 transition disabled:opacity-50 disabled:cursor-not-allowed w-full"
            >
              {loading ? "Sending..." : "SUBMIT NOW"}
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
