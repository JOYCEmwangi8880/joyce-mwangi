"use client"

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, Twitter, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  // Typewriter animation
  const words = ["Software & App Development", "AI Innovator", "Robotics & Automation (basic)", "Digital Marketer", "AI & Machine Learning", "IT & Tech Innovations", "Data-driven Marketing Strategies", ];
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100; // ms per letter
    let timeout;

    if (charIndex < words[wordIndex].length) {
      timeout = setTimeout(() => {
        setCurrentWord((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else {
      // Pause before next word
      timeout = setTimeout(() => {
        setCurrentWord("");
        setCharIndex(0);
        setWordIndex((wordIndex + 1) % words.length);
      }, 2000); // 2s pause after full word
    }

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <p className="text-cyan-400 text-sm uppercase tracking-widest font-medium mb-6">
              Hello I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Joyce
              <br />
              Mwangi
            </h1>
            {/* Typewriter animation */}
            <p className="text-lg md:text-xl text-slate-300 font-light h-8">
             I’m passionate and results-driven, skilled in:{" "}
              <span className="text-cyan-400 font-semibold">{currentWord}</span>
              <span className="text-cyan-400 font-semibold animate-blink">|</span>
            </p>
          </div>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Crafting digital solutions that blend technology and strategy to drive real business impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="mailto:joycewanguim2020@gmail.com">
            <button className="px-8 py-3 bg-cyan-500 text-slate-950 font-semibold rounded hover:bg-cyan-400 transition">
               Say Hello
             </button>
            </a>

            <a
              href="https://docs.google.com/document/d/11TIeK6owGQXtHVsnltIbXQ7Wdpv4hOQp/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded hover:bg-cyan-500/10 transition flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>

        {/* Right Hero Image with Social Links on Right Margin */}
        <div className="relative flex items-center justify-end gap-12">
          <div className="relative flex-1 max-w-lg">
            {/* Main Image */}
 <div className="aspect-square rounded-lg overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl w-full animate-fade-scale-rotate">
  <img
    src="/images/profile.jpeg"
    alt="profile"
    className="w-full h-full object-cover"
  />
</div>

            {/* Small Accent Image */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-lg overflow-hidden bg-slate-800 border border-slate-700 shadow-lg">
              <img
                src="/images/ai.jpg"
                alt="Accent"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Social Links Right Margin */}
          <div className="flex flex-col gap-8 hidden md:flex">
            <a
              href="https://github.com/JOYCEmwangi8880"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/joyce-mwangi-470019235"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://x.com/joycyie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
              aria-label="Twitter / X"
            >
              <Twitter size={24} />
            </a>

            <a
              href="https://discord.com/users/joycie8151"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
              aria-label="Discord"
            >
              <MessageCircle size={24} />
            </a>

            <a
              href="mailto:joycewanguim2020@gmail.com"
              className="text-slate-400 hover:text-cyan-400 transition"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
