import { Check } from "lucide-react"

export default function Skills() {
  const skillsData = [
    { category: "Digital Marketing", items: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Email Marketing", "Brand Strategy", "Analytics & Reporting"] },
    { category: "AI & Machine Learning", items: ["Natural Language Processing", "Predictive Analytics", "Data Analysis", "Automation", "AI Integration", "Neural Networks"] },
    { category: "Web Development", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"] },
    { category: "Backend Development", items: ["Node.js", "Express", "Python", "API Design", "RESTful Services"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Firebase", "MySQL", "Data Modeling"] },
    { category: "Tools & Platforms", items: ["Git", "AWS", "Vercel", "Analytics Tools", "Marketing Automation"] },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-slate-400">Continuously learning and evolving</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all">
              <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-wide mb-5">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    <Check size={16} className="text-cyan-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
