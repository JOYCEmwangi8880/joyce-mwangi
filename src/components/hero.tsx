"use client"

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, Twitter, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const words = ["Software & App Development", "AI Innovator", "Robotics & Automation (basic)", "Digital Marketer", "AI & Machine Learning", "IT & Tech Innovations", "Data-driven Marketing Strategies"];
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    let timeout;

    if (charIndex < words[wordIndex].length) {
      timeout = setTimeout(() => {
        setCurrentWord((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setCurrentWord("");
        setCharIndex(0);
        setWordIndex((wordIndex + 1) % words.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  return (
    <section className="min-h-screen flex items-center px-4 pt-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="mb-8">
              <p className="text-cyan-400 text-sm uppercase tracking-wide font-medium mb-4">
                Hello   I'm
              </p>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
                Joyce Mwangi
              </h1>
              
              <p className="text-slate-400 text-base leading-relaxed">
                Crafting solutions at the intersection of technology and strategy
                <br></br>:{" "}
                <span className="text-cyan-400 font-semibold">{currentWord}</span>
                <span className="text-cyan-400 animate-blink">|</span>
              </p>
            </div>

             {/* <p className="text-slate-400 text-base leading-relaxed">
      I create practical digital solutions by combining technology, creativity, and strategy.
    </p>

    <p className="text-slate-400 mb-8 leading-relaxed">
      My work focuses on building reliable, user-centered products that solve real problems.
    </p> */}

            <div className="flex gap-4 mb-8">
              <a
                  href="mailto:joyce04mwangi@gmail.com"
                  className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition"
                >
                  Get in touch →
                </a>

              {/* <a
                href="https://docs.google.com/document/d/11TIeK6owGQXtHVsnltIbXQ7Wdpv4hOQp/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-cyan-500 text-cyan-400 font-medium rounded hover:bg-cyan-500/10 transition"
              >
                Download CV
              </a> */}
            </div>

            {/* Social Links - Mobile Visible */}
            <div className="flex gap-6 md:hidden">
              <a href="https://github.com/JOYCEmwangi8880" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/joyce-mwangi-470019235" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/joycyie" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400">
                <Twitter size={20} />
              </a>
              <a href="mailto:joycewanguim2020@gmail.com" className="text-slate-400 hover:text-cyan-400">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Image with Social Links */}
          <div className="flex gap-12 items-center justify-center">
            {/* Image and CV Circle */}
            <div className="relative w-full max-w-md">
              <div className="aspect-square rounded-lg overflow-hidden ">
                <img
                  src="/images/profile.png"
                  alt="Joyce Mwangi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CV Download Circle */}
              <a
                href="https://docs.google.com/document/d/11TIeK6owGQXtHVsnltIbXQ7Wdpv4hOQp/edit?usp=sharing&ouid=105950731606047004479&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-cyan-500 shadow-xl flex items-center justify-center hover:shadow-2xl transition group cursor-pointer"
                style={{ animation: 'spin 10s linear infinite' }}
              >
                <div className="absolute inset-0 rounded-full flex items-center justify-center">
                  <svg 
                    className="absolute w-full h-full" 
                    viewBox="0 0 120 120"
                    style={{ animation: 'spin 10s linear infinite reverse' }}
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                        fill="none"
                      />
                    </defs>
                    <text 
                      fontSize="10" 
                      fill="white" 
                      fontWeight="bold" 
                      letterSpacing="2"
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        DOWNLOAD MY CV • DOWNLOAD MY CV •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <Download size={36} className="text-slate-950 z-10 group-hover:scale-110 transition" />
              </a>
            </div>

            {/* Social Links Desktop - Vertical on the right */}
            <div className="hidden md:flex flex-col gap-8">
              <a href="https://github.com/JOYCEmwangi8880" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/joyce-mwangi-470019235" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/joycyie" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
                <Twitter size={24} />
              </a>
              <a href="mailto:joycewanguim2020@gmail.com" className="text-slate-400 hover:text-cyan-400 transition">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
