import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Adventure Park Booking Platform",
      company: "Forest Adventure Annaba",
      period: "Oct 2024 – June 2024",
      description:
        "Engineered a comprehensive booking system for adventure parks featuring multi-role authentication, real-time availability management, integrated payment processing, and administrative dashboards.",
      achievements: [
        "Reduced manual booking processes by 80%",
        "Built 150+ responsive UI components",
        "Developed 50+ RESTful API endpoints",
        "Implemented secure payment integration",
        "Created intuitive admin tools for operational efficiency",
      ],
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "ChargilyAPI", "Tailwind CSS"],
      type: "Professional Project",
    },
    {
      title: "Ridesharing Platform",
      company: "University of Badji Mokhtar Annaba",
      period: "Mar 2023 – June 2023",
      description:
        "Developed a web platform to facilitate ridesharing between users, focusing on reducing transportation costs and environmental impact.",
      achievements: [
        "Implemented MVC architecture",
        "Built trip search engine",
        "Created user profiles for drivers and passengers",
        "Developed trip management system",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      type: "Academic Project",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50 border-primary/10"
              >
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Users className="h-4 w-4" />
                        {project.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.period}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit bg-primary/10 border-primary/20">
                    {project.type}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
