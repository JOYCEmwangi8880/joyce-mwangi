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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Skills</h2>
          <p className="text-slate-400">Growing Over Time</p>
        </div>

        <p className="text-center text-slate-400 max-w-3xl mx-auto mb-12">
          I offer a comprehensive suite of services combining digital marketing expertise with advanced web development and AI/ML capabilities. From strategic marketing campaigns to intelligent web platforms and data-driven solutions, I deliver results that drive business growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-wide mb-4">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {skill}
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
