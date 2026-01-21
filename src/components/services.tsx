export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Building responsive, high-performance web applications using modern frameworks and best practices.",
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description:
        "Creating robust server-side solutions with scalable architecture and efficient database management.",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with React Native for iOS and Android.",
    },
    {
      icon: "🔧",
      title: "System Design",
      description: "Architecting scalable systems that balance performance, maintainability, and user experience.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">What I Offer</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to transform your ideas into reality
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
