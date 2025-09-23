"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
type project = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: string;
  liveDemo: string;
  Github: string;
  image: string;
};
const projects = [
  {
    title: "Full-Stack Developer",
    company: "Capfun Seraidi Adventure Park",
    period: "Aug 2025 - Present",
    description:
      "Led the end-to-end development of Link full-stack online booking platform for Capfun Seraidi Adventure Park. Delivered Link responsive web and mobile experience with real-time activity availability, secure online payments, and Link smooth booking flow. Deployed and optimized on AWS (S3, Lambda, EC2) to ensure scalability and high availability.",
    technologies: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Chargily API",
      "AWS (S3, Lambda, EC2)",
    ],
    type: "Professional Project",
    liveDemo: "https://capfun-seraidi.vercel.app/",
    image: "/images/projects/capfun.png",
  },
  {
    title: "Adventure Park Booking Platform",
    company: "Forest Adventure Annaba",
    period: "Oct 2024 – June 2024",
    description:
      "Developed Link multi-park booking solution enabling customers to browse activities, reserve slots, and process payments seamlessly. Implemented role-based authentication, admin dashboards, and real-time slot management to streamline operations and improve customer experience.",
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Chargily API",
      "Tailwind CSS",
    ],
    type: "Professional Project",
    liveDemo: "https://forest-adventure-dusky.vercel.app/",
    image: "/images/projects/forest-adventure.png",
  },
  {
    title: "DZLink - Mobile Networking App",
    company: "Technical Test Project",
    period: "Sep 2025",
    description:
      "Built Link mobile-first social networking platform with React Native (Expo) and NestJS. Key features include real-time chat, location-based user discovery, profile customization, and an admin interface for moderation. The backend was designed with Link modular architecture using Prisma and PostgreSQL, ensuring scalability and maintainability.",
    technologies: [
      "React Native (Expo)",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
    ],
    type: "Professional Project",
    Github: "https://github.com/tahadjm/dzlink",
    image: "/images/projects/dzlink.png",
  },
  {
    title: "Ridesharing Platform",
    company: "University of Badji Mokhtar Annaba",
    period: "Mar 2023 – June 2023",
    description:
      "Designed and implemented an academic ridesharing platform that connects university students and staff for shared transportation. Focused on reducing commuting costs and promoting eco-friendly travel through Link simple, intuitive web interface.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    type: "Academic Project",
    image: "/placeholder.jpg",
  },
];

const Projects: React.FC = () => {
  const [activeItem, setActiveItem] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = ["all", "Professional Project", "Academic Project"];

  const handleActiveItem = (filter: string) => setActiveItem(filter);

  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="text-center mb-8 animate-reveal-up">
        <h1 className="text-3xl font-bold">WORKS</h1>
        <h3 className="text-xl">
          MY <span className="text-[hsl(var(--primary))]">PORTFOLIO</span>
        </h3>
      </div>

      {/* Filters */}
      <div className="mb-10">
        <ul className="flex justify-center space-x-6 text-sm uppercase font-medium">
          {filters.map((filter) => (
            <li
              key={filter}
              className={`cursor-pointer pb-1 border-b transition-all duration-300 ease-out ${
                activeItem === filter
                  ? "border-[hsl(var(--primary))] text-[hsl(var(--primary))] scale-105"
                  : "border-transparent hover:text-[hsl(var(--primary))] hover:scale-105"
              }`}
              onClick={() => handleActiveItem(filter)}
            >
              {filter === "all" ? "ALL" : filter}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl space-y-12 w-full">
          {projects
            .filter((proj) =>
              activeItem === "all" ? true : proj.type === activeItem
            )
            .map((proj, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-[#2c2f38] to-[#1e2027] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.02] hover:from-[#353841] hover:to-[#24262e]"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Left section */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                      {proj.title}
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base font-medium">
                      {proj.company} • {proj.period}
                    </p>
                  </div>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
                    {proj.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-black text-gray-300 text-xs sm:text-sm px-3 py-1.5 rounded-full border border-gray-700 group-hover:border-gray-600 group-hover:text-gray-200 transition-all duration-300 ease-out hover:scale-105 hover:bg-gray-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right section (screenshot) */}
                <div className="flex-1 relative overflow-hidden rounded-xl w-full max-w-lg">
                  <div className="relative overflow-hidden rounded-xl w-full max-w-[600px] h-auto sm:h-[320px] md:h-[360px] lg:h-[400px]">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      width={600}
                      height={400}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 600px"
                      className={`rounded-xl shadow-md transition-all duration-700 ease-out object-cover w-full h-full ${
                        hoveredProject === index
                          ? "scale-110 rotate-1"
                          : "scale-100 rotate-0"
                      }`}
                    />
                    {/* Overlay effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl ${
                        hoveredProject === index ? "bg-black/10" : ""
                      }`}
                    />
                  </div>

                  {/* View project button */}
                  {proj.liveDemo && (
                    <Link
                      href={proj.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`absolute top-4 right-4 bg-[hsl(var(--primary))] text-black  text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg font-medium transition-all duration-300 ease-out ${
                        hoveredProject === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
                    >
                      View Project →
                    </Link>
                  )}
                  {proj.Github && (
                    <Link
                      href={proj.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`absolute top-4 right-4 bg-[hsl(var(--primary))] text-black  text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg font-medium transition-all duration-300 ease-out ${
                        hoveredProject === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
                    >
                      Github repo →
                    </Link>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
