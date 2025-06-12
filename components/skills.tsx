import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "PHP"],
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["HTML", "CSS", "React", "Vue.js", "Next.js", "TailwindCSS", "Shadcn"],
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Next.js", "Express.js", "tRPC", "REST API", "Prisma", "Mongoose"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "NPM", "VS Code", "Postman"],
    },
  ]

  const databases = ["MongoDB", "PostgreSQL", "MySQL", "SQLite"]
  const languages = [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Advanced" },
    { language: "French", level: "Intermediate" },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-primary/10"
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 group-hover:text-primary transition-colors">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-6 w-6 text-primary" />
                  <span>Databases</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {databases.map((db, index) => (
                    <Badge key={index} variant="outline">
                      {db}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-primary" />
                  <span>Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{lang.language}</span>
                      <Badge variant="secondary">{lang.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
