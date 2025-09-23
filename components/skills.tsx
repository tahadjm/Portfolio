"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Wrench, TrendingUp } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["TypeScript", "JavaScript", "Python", "PHP"],
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "Next.js", "TailwindCSS", "Vue.js", "Nuxt.js"],
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Next.js API", "Express.js", "Nest.js", "REST API", "GraphQL"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "AWS", "CI/CD"],
    },
  ];

  const databases = ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"];

  const languages = [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Advanced" },
    { language: "French", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-secondary rounded-full mb-6">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technical skills and expertise across various technologies and
              platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group card-hover border border-border"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-secondary">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover border border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">Databases</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {databases.map((db, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {db}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-foreground">
                        {lang.language}
                      </span>
                    </div>
                    <Badge variant="secondary" className="font-medium">
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
