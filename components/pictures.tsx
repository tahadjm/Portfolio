"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ZoomIn, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function Pictures() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectGalleries = [
    {
      title: "Capfun Seraidi Booking Platform",
      description:
        "A robust full-stack web application designed for capfun seraidi management. Features include a comprehensive booking system with multi-role authentication (admin, staff, customer), real-time analytics dashboards, and seamless payment processing via ChargilyAPI. Administrators can manage sites schedules, pricing, and availability with advanced time slot controls. The platform supports Arabic localization, secure payment methods (QR codes, bank cards, CIB cards), and provides a modern, responsive UI built with Next.js and TailwindCSS. Over $130K+ in transactions processed, with detailed metrics and user management tools.",
      category: "Full Stack Web Application",
      technologies: [
        "Next.js",
        "Nest.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "ChargilyAPI",
        "TailwindCSS",
      ],
      images: [
        {
          src: "/images/capfun.png",
          alt: "Capfun Annaba hero section showcasing adventure activities",
          title: "Hero Section",
          description:
            "The main hero section that highlights the adventure park’s unique experiences with a bold and engaging design.",
        },
        {
          src: "/images/landing-page.png",
          alt: "Landing page with featured activities and booking options",
          title: "Landing Page",
          description:
            "The landing page introduces visitors to the platform with featured activities, quick navigation, and booking options.",
        },
        {
          src: "/images/about-page.png",
          alt: "About page providing details about the park and its mission",
          title: "About Page",
          description:
            "This page shares the story, mission, and values of the park, helping visitors connect with the brand and its purpose.",
        },
        {
          src: "/images/activity-page-2.png",
          alt: "Activity page showing available courses and time slots",
          title: "Activity Page",
          description:
            "The activity page lists all available courses and adventures, complete with schedules, pricing, and reservation options.",
        },
      ],
      links: {
        live: "https://capfun-seraidi.vercel.app/",
      },
    },
    {
      title: "Adventure Park Booking Platform",
      description:
        "A robust full-stack web application designed for adventure park management. Features include a comprehensive booking system with multi-role authentication (admin, staff, customer), real-time analytics dashboards, and seamless payment processing via ChargilyAPI. Administrators can manage park schedules, pricing, and availability with advanced time slot controls. The platform supports Arabic localization, secure payment methods (QR codes, bank cards, CIB cards), and provides a modern, responsive UI built with Next.js and TailwindCSS. Over $130K+ in transactions processed, with detailed metrics and user management tools.",
      category: "Full Stack Web Application",
      technologies: [
        "Next.js",
        "Nest.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "ChargilyAPI",
        "TailwindCSS",
      ],
      images: [
        {
          src: "/images/dashboard-overview.png",
          alt: "Admin Dashboard Overview",
          title: "Real-Time Analytics Dashboard",
          description:
            "Comprehensive admin dashboard displaying key metrics including user statistics, booking analytics, and revenue tracking with $130K+ processed transactions",
        },
        {
          src: "/images/time-slots-management.png",
          alt: "Time Slots Management Interface",
          title: "Advanced Time Slot Management",
          description:
            "Sophisticated scheduling system allowing administrators to manage park availability, pricing options, and time slots with real-time status tracking",
        },
        {
          src: "/images/payment-integration.png",
          alt: "ChargilyAPI Payment Integration",
          title: "Secure Payment Processing",
          description:
            "Integrated ChargilyAPI payment gateway supporting multiple payment methods including QR codes, bank cards, and CIB cards with Arabic localization",
        },
        {
          src: "/images/HomePage.png",
          alt: "Home Page ",
          title: "Home Page",
          description:
            "Home page that displays all parks in card format, with information about security, about us, and a reusable hero section featuring video content.",
        },
      ],
      links: {
        live: "https://forest-adventure-dusky.vercel.app/",
      },
    },
  ];

  return (
    <section
      id="pictures"
      className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Project Gallery
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visual showcase of my projects with detailed screenshots and
              technical implementations
            </p>
          </div>

          <div className="space-y-16">
            {projectGalleries.map((project, projectIndex) => (
              <div key={projectIndex} className="space-y-8">
                <div className="text-center">
                  <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center gap-4 mb-8">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.live}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {project.images.map((image, imageIndex) => (
                    <Card
                      key={imageIndex}
                      className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-primary/10"
                    >
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  className="backdrop-blur-sm"
                                >
                                  <ZoomIn className="h-4 w-4 mr-2" />
                                  View Full Size
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl w-full">
                                <DialogHeader>
                                  <DialogTitle>{image.title}</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <Image
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-lg"
                                  />
                                  <p className="text-muted-foreground">
                                    {image.description}
                                  </p>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {image.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {image.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
