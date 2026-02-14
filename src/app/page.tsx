import Hero from "@/components/hero"
// import Features from "@/components/features"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Skills from "@/components/skills"
import Service from "@/components/service"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/ScrollToTop"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-slate-950 text-slate-100">
        <Hero />
        {/* <Features /> */}
        <About />
        <Service />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
