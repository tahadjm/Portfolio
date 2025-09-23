import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center justify-between">
            <div className="flex flex-col h-full items-start justify-between py-4">
              <p className=" text-lg text-muted-foreground mb-6  ">
                I'm a passionate Full Stack Developer and Computer Science student at the University of Badji Mokhtar
                Annaba. With a strong foundation in modern web/mobile technologies, I specialize in creating scalable and
                user-friendly applications.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My experience includes developing comprehensive booking systems, ridesharing platforms, and various SaaS Platforms, and mobile applications using cutting-edge technologies like Next.js, TypeScript, and MongoDB.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="backdrop-blur-sm bg-card/50 border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Education</h3>
                      <p className="text-sm text-muted-foreground">Bachelor's in Computer Science</p>
                      <p className="text-sm text-muted-foreground">University of Badji Mokhtar Annaba</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50 border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-sm text-muted-foreground">Annaba, Seraïdi 23015</p>
                      <p className="text-sm text-muted-foreground">Algeria</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50 border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Graduation</h3>
                      <p className="text-sm text-muted-foreground">June 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
