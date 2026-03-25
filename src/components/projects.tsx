import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface Project {
  id: number
  category: string
  title: string
  shortDesc: string
  image: string
  fullDesc: string
  projectType: string
  client: string
  duration: string
  task: string
  tags: string[]
  link?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      category: "Web Design",
      title: "Lexan CPA",
      shortDesc: "Professional accounting and tax services website",
      image: "/images/portfolio-1.jpg",
      fullDesc:
        "A modern, professional website for Lexan CPA featuring comprehensive tax and accounting services. The site includes service descriptions, client resources, and easy contact options for potential clients.",
      projectType: "Web Design",
      client: "Lexan CPA",
      duration: "3 Weeks",
      task: "UI/UX, Frontend Development",
      tags: ["Web Design", "UI/UX", "Frontend"],
      link: "https://lexancpa.com/",
    },
    {
      id: 2,
      category: "Web Design",
      title: "AP-REM",
      shortDesc: "Real estate and property management platform",
      image: "/images/portfolio-2.jpg",
      fullDesc:
        "A comprehensive real estate platform showcasing properties and providing property management solutions. Features property listings, detailed information, and client inquiry system.",
      projectType: "Web Design",
      client: "AP-REM",
      duration: "4 Weeks",
      task: "Full Stack Development",
      tags: ["Web Design", "Real Estate", "Development"],
      link: "https://www.ap-rem.com/",
    },
    {
      id: 3,
      category: "Content Writing",
      title: "Daily Yield Writers",
      shortDesc: "Content creation and writing services",
      image: "/images/portfolio-3.jpg",
      fullDesc:
        "A professional content writing agency website showcasing expertise in SEO-optimized content, blog writing, and copywriting. Features portfolio of work, services offered, and client testimonials.",
      projectType: "Web Design",
      client: "Daily Yield Writers",
      duration: "3 Weeks",
      task: "Web Design, Content Setup",
      tags: ["Content", "Writing", "Web Design"],
      link: "http://dailyyieldwriters.com/",
    },
    {
      id: 4,
      category: "Content Writing",
      title: "Inkwave Writers",
      shortDesc: "Creative writing and literary services",
      image: "/images/portfolio-4.jpg",
      fullDesc:
        "A creative writing platform featuring various literary services including ghost writing, editing, and publishing assistance. Showcases author portfolio and industry expertise.",
      projectType: "Web Design",
      client: "Inkwave Writers",
      duration: "3 Weeks",
      task: "Web Design, Frontend Development",
      tags: ["Writing", "Creative", "Web Design"],
      link: "https://www.inkwavewriters.com/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Completed Projects</h2>
          <p className="text-slate-400">Real-world solutions delivered</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all"
            >
              <div className="relative h-56 bg-slate-700 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.shortDesc}</p>
                <div className="mb-4">
                  <p className="text-xs text-cyan-400 uppercase tracking-wide mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-slate-700 text-cyan-400 px-3 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-2"
                  >
                    View Live <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
