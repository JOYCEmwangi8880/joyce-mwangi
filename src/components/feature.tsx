export default function Features() {
  const features = [
    {
      title: "Dedication",
      description:
        "Committed to delivering exceptional quality in every project with meticulous attention to detail and best practices.",
    },
    {
      title: "Smart Work",
      description: "Strategic problem-solving approach using efficient methodologies and proven development patterns.",
    },
    {
      title: "Collaboration",
      description:
        "Strong communicator who thrives in team environments and builds meaningful professional partnerships.",
    },
    {
      title: "Technology",
      description: "Passionate learner staying current with cutting-edge technologies and industry trends.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
