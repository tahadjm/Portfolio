"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Eye } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function Resume() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Resume</h2>

          <Card className="backdrop-blur-sm bg-card/50 border-primary/10 shadow-2xl hover:shadow-primary/5 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-semibold">My Resume</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Download my resume to learn more about my education, experience, and skills. The PDF format ensures
                    the document retains its formatting and is easily printable.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Full educational background</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Detailed work experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Technical skills and proficiencies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Languages and personal interests</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <Button size="lg" className="min-w-[200px]" asChild>
                    <a href="/resume.pdf" download="Djemili_Taha_Resume.pdf">
                      <Download className="mr-2 h-5 w-5" />
                      Download PDF
                    </a>
                  </Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="lg" className="min-w-[200px]">
                        <Eye className="mr-2 h-5 w-5" />
                        Preview Resume
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full max-h-[90vh]">
                      <DialogHeader>
                        <DialogTitle>Resume Preview</DialogTitle>
                      </DialogHeader>
                      <div className="overflow-auto h-full">
                        <iframe src="/resume.pdf" className="w-full h-[70vh]" title="Resume Preview" />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
