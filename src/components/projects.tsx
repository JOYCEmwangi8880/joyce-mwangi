import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface Project {
  id: number
  
  title: string
  shortDesc: string
  image: string
  fullDesc: string
 
  link?: string
}

export default function Projects() {
  const projects: Project[] = [
   {
    id: 1,
    title: "CodeOn Africa",
    shortDesc: "Technology and developer community platform",
    image: "/images/logo.jpeg",
    fullDesc:
      "A technology-focused platform aimed at supporting developers and tech enthusiasts across Africa by highlighting initiatives, learning opportunities, and collaboration within the tech ecosystem.",
    link: "https://codeon.africa/",
  },
   {
    id: 2,
    title: "Saro Tours & Travels",
    shortDesc: "Travel and tour agency website",
    image: "/images/saro.jpg",
    fullDesc:
      "A travel agency website designed to showcase tour packages, travel services, and booking information. The platform allows visitors to explore destinations and easily contact the agency for travel planning.",
    link: "https://www.sarotoursandtravels.com/",
  },
   {
    id: 3,
    title: "Atibule",
    shortDesc: "Business and digital services platform",
    image: "/images/atibule.jpg",
    fullDesc:
      "A modern business website developed to present company services and digital solutions. The platform focuses on clear navigation, responsive design, and a professional layout.",
    link: "https://atibule.com/",
  },
   {
    id: 4,
    title: "AP-REM",
    shortDesc: "Real estate and property management platform",
    image: "/images/ap-rem.jpg",
    fullDesc:
      "A comprehensive real estate platform showcasing properties and providing property management solutions. The platform allows users to browse property listings, view detailed information, and send inquiries.",
    link: "https://www.ap-rem.com/",
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
