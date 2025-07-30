import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { AIShowcase } from "@/components/demos/ai-showcase"
import { AutomationShowcase } from "@/components/demos/automation-showcase"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <AIShowcase />
      <AutomationShowcase />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
