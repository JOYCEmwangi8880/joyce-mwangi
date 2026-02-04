import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">JM</span>
            </div>
            <h3 className="text-white font-bold text-lg">Joyce Mwangi</h3>
            <p className="text-slate-400 text-sm mt-2">Full-stack developer & digital strategist</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#service" className="text-slate-400 hover:text-cyan-400 transition text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition text-sm">
                  Skills
                </a>
              </li>
              <li>
                {/* <a href="#portfolio" className="text-slate-400 hover:text-cyan-400 transition text-sm">
                  Portfolio
                </a> */}
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm">Web Development</li>
              <li className="text-slate-400 text-sm">Frontend Design</li>
              <li className="text-slate-400 text-sm">Backend Solutions</li>
              <li className="text-slate-400 text-sm">AI Integration</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://github.com/JOYCEmwangi8880" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/joyce-mwangi-470019235" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/joycyie" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
                <Twitter size={20} />
              </a>
              <a href="mailto:joycewanguim2020@gmail.com" className="text-slate-400 hover:text-cyan-400 transition">
                <Mail size={20} />
              </a>
            </div>
            <a href="#contact" className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition">
              Get in touch →
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Joyce Mwangi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition text-xs">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition text-xs">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
