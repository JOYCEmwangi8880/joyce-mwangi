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
    link: "https://codeonafrica.com/",

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
  title: "Afriora",
  shortDesc: "Premium real estate and property discovery platform",
  image: "/images/kenya.jpg",
  fullDesc:
    "A comprehensive real estate platform showcasing premium properties across Kenya. Users can browse listings, explore neighborhoods, view detailed property information, and connect directly with agents.",
  link: "https://afriora-k.vercel.app/",
},
{
  id: 5,
  title: "ShareSpot",
  shortDesc: "Peer-to-peer rental platform for everyday items",
  image: "/images/share-spot.jpg",
  fullDesc:
    "A peer-to-peer rental platform that connects people who need items with others who have equipment sitting unused at home. Users can rent cameras, drills, gaming consoles, tents, PA systems, party furniture, and more for a few days while earning from items they already own.",
  link: "https://share-spot.vercel.app/",
},
{
  id: 6,
  title: "Zero to One",
  shortDesc: "Business idea planning and launch management platform",
  image: "/images/ZerotoOne.jpg",
  fullDesc:
    "A focused business planning platform that helps entrepreneurs turn ideas into launched businesses. Users get a personalized roadmap with checklists, budgeting tools, branding guidance, marketing planning, and progress tracking — all in one workspace.",
  link: "https://zero-to-one-swart-nine.vercel.app/",
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
