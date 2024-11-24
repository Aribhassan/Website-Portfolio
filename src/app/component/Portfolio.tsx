"use client";

import { useState, useEffect } from "react";

const projects = [
  {
    title: "Resume Builder",
    description: "Build your resume to stand out and get hired.",
    technologies: ["HTML", "Tailwing", "TypeScript", "NEXT.js"],
    githubLink: "https://github.com/Aribhassan/User-Friendly-Resume-Builder.git",
    liveDemo: "https://user-friendly-resume-builder.vercel.app/",
    image: "/icons/project1.png",
  },
  {
    title: "Pak Wheels",
    description: "A modern platform for buying and selling cars.",
    technologies: ["NEXT.js", "TypeScript", "TAILWINDCSS"],
    githubLink: "https://github.com/Aribhassan/nextjs-assignment-3.git",
    liveDemo: null,
    image: "/icons/a.png",
  },
  {
    title: "Music Academy Project",
    description: "Streamlining student data for efficient academic management.",
    technologies: ["NEXT.js", "TypeScript", "Tailwind"],
    githubLink: "https://github.com/Aribhassan/Cli_Typescript_Projects/tree/main/07_Student%20Management%20System",
    liveDemo: null,
    image: "/icons/d.png",
  },
  {
    title: "Countdown Timer",
    description: "A sleek timer app for enhanced productivity.",
    technologies: ["NEXT.js", "TypeScript", "Tailwind"],
    githubLink: "#",
    liveDemo: null,
    image: "/icons/1.png",
  },
  {
    title: "E-commerce Site",
    description: "E-commerce site",
    technologies: ["NEXT.js", "TypeScript", "Tailwind"],
    githubLink: "#",
    liveDemo: null,
    image: "#",
  },
  {
    title: "Blog Site",
    description: "Blog Site",
    technologies: ["NEXT.js", "TypeScript", "Tailwind"],
    githubLink: "#",
    liveDemo: null,
    image: "#",
  },
];

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set mobile view if screen width is less than 768px
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine projects to display
  const visibleProjects = isMobile && !showMore ? projects.slice(0, 3) : projects;

  return (
    <section
      id="Portfolio"
      className="py-16 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12">
          My <span className="text-orange-500">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 shadow-lg rounded-xl overflow-hidden group transform transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-orange-500 text-white py-1 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    className="text-sm font-semibold text-white hover:text-orange-500"
                  >
                    GitHub
                  </a>
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      className="text-sm font-semibold text-white hover:text-orange-500"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-gray-500">
                      No Live Demo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button for Mobile */}
        {isMobile && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-orange-600 transition duration-300"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
