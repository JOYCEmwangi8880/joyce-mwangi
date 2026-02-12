import { Lightbulb, Pencil, Code, CheckCircle, Rocket } from "lucide-react"

export default function Portfolio() {
  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Understanding your goals, target audience, and project requirements to build a solid foundation.",
      icon: Lightbulb,
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Creating wireframes, prototypes, and detailed plans before any code is written.",
      icon: Pencil,
    },
    {
      step: "03",
      title: "Development",
      description: "Building clean, scalable, and performant solutions using modern technologies.",
      icon: Code,
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Thorough testing, performance optimization, and ensuring quality across all devices.",
      icon: CheckCircle,
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Deployment, monitoring, and ongoing support to ensure success and growth.",
      icon: Rocket,
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How I Work</h2>
          <p className="text-slate-400">A proven process to deliver exceptional results</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {process.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all group relative"
              >
                {/* Step Number */}
                <div className="text-cyan-400 font-bold text-3xl opacity-20 mb-4">{item.step}</div>

                {/* Icon */}
                <Icon className="text-cyan-400 mb-4 group-hover:scale-110 transition" size={32} />

                {/* Title */}
                <h3 className="text-white font-bold mb-3 text-lg">{item.title}</h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>

                {/* Connector Line (hidden on last item) */}
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="px-8 py-3 bg-cyan-500 text-slate-950 font-semibold rounded hover:bg-cyan-400 transition inline-block"
          >
            Ready to Start? Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}