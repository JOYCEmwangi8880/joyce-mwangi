export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-slate-400">Transforming Ideas into Digital Excellence</p>
        </div>

        {/* About Grid - Image and Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Images */}
          <div className="flex gap-4 relative">
            <div className="flex-1 space-y-4">
              <img
                src="images/img.jpg"
                alt="About 1"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-4 pt-8">
              <img
                src="/images/prof.jpeg"
                alt="About 2"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/images/ai.jpg"
                alt="About 3"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-slate-400 text-base leading-relaxed">
              I blend technology with strategic digital marketing to create impactful solutions. With expertise in full-stack web development, AI, and machine learning, I build responsive applications and data-driven strategies that deliver measurable results.
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              My approach combines modern development practices with marketing excellence to help brands thrive digitally. I focus on transforming ideas into tangible solutions that drive business growth and customer engagement.
            </p>

            <div className="pt-4">
              <a href="#contact" className="text-cyan-400 font-medium hover:text-cyan-300 transition">
                Let's collaborate →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
