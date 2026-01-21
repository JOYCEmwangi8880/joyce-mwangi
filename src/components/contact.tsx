"use client"

import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-slate-400">Let's Start A New Project</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 text-center hover:border-cyan-500 transition">
            <Mail size={40} className="text-cyan-400 mx-auto mb-4" />
            <h3 className="text-white font-bold mb-2">Email</h3>
            <a href="mailto:joycewanguim2020@gmail.com" className="text-slate-400 hover:text-cyan-400 transition">
              joycewanguim2020@gmail.com
            </a>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 text-center hover:border-cyan-500 transition">
            <Phone size={40} className="text-cyan-400 mx-auto mb-4" />
            <h3 className="text-white font-bold mb-2">Phone</h3>
            <a href="tel:+254745913429" className="text-slate-400 hover:text-cyan-400 transition">
              +254 745 913 429
            </a>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 text-center hover:border-cyan-500 transition">
            <MapPin size={40} className="text-cyan-400 mx-auto mb-4" />
            <h3 className="text-white font-bold mb-2">Location</h3>
            <p className="text-slate-400">Nairobi, Kenya</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-12 mb-16">
  <a
    href="https://github.com/JOYCEmwangi8880"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-cyan-400 transition"
    aria-label="GitHub"
  >
    <Github size={28} />
  </a>

  <a
    href="https://www.linkedin.com/in/joyce-mwangi-470019235"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-cyan-400 transition"
    aria-label="LinkedIn"
  >
    <Linkedin size={28} />
  </a>

  <a
    href="https://x.com/joycyie"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-cyan-400 transition"
    aria-label="Twitter / X"
  >
    <Twitter size={28} />
  </a>

  <a
    href="https://discord.com/users/joycie8151"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-cyan-400 transition"
    aria-label="Discord"
  >
    <MessageCircle size={28} />
  </a>

  <a
    href="mailto:joycewanguim2020@gmail.com"
    className="text-slate-400 hover:text-cyan-400 transition"
    aria-label="Email"
  >
    <Mail size={28} />
  </a>
</div>

        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © 2025 Joyce Mwangi. All rights reserved. Full-Stack Developer.
          </p>
        </div>
      </div>
    </section>
  )
}
