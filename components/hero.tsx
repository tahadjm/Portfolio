"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Djemili Taha
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Abdelwadoud
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"></div>
          </div>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full Stack Developer & Computer Science Student
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Passionate about creating innovative web applications with modern technologies. Specializing in Next.js,
            TypeScript, and full-stack development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="w-full sm:w-auto">
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="w-full sm:w-auto">
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:taha-abdelwadoud.djemili@univ-annaba.dz" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/tahadjm/" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://dz.linkedin.com/in/taha-djemili-595540308" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>

          <Button variant="ghost" size="icon" onClick={() => scrollToSection("about")} className="animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
