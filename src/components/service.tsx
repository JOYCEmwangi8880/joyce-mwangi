import { Code, Palette, Database, TrendingUp, Zap, Layers } from "lucide-react"

export default function Service() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and high-performance web applications using modern frameworks and best practices.",
    },
    {
      icon: Palette,
      title: "Frontend Development",
      description: "Creating stunning user interfaces with React and Next.js, focusing on performance and accessibility.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Designing robust server-side solutions with scalable architecture and efficient database management.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Developing comprehensive strategies including SEO, content marketing, and data-driven optimization.",
    },
    {
      icon: Zap,
      title: "AI & Machine Learning",
      description: "Implementing intelligent solutions to automate processes and drive actionable business insights.",
    },
    {
      icon: Layers,
      title: "System Design",
      description: "Architecting scalable systems that balance performance, maintainability, and deliver results.",
    },
  ]

  return (
    <section id="service" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h2>
          <p className="text-slate-400">What I Offer</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all group"
              >
                <Icon className="text-cyan-400 mb-4 group-hover:scale-110 transition" size={28} />
                <h3 className="text-white font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
