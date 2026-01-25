import Hero from "@/components/hero"
import Feature from "@/components/feature"
import About from "@/components/about"
import Skills from "@/components/skills"
import Service from "@/components/service"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-slate-950 text-slate-100">
        <Hero />
        <Feature />
        <About />
        <Service />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
