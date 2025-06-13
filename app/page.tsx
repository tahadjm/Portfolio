import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Pictures } from "@/components/pictures"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Resume } from "@/components/resume"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Pictures />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
