import React, { useState } from "react";
import { ScrollObserver } from "./ScrollObserver";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink: string;
  codeLink: string;
  color: "cyan" | "green" | "pink" | "purple";
  category: "web" | "mobile" | "ml" | "all";
};

const projects: Project[] = [
  {
    title: "Attendance Tracker",
    description: "A web application that allows users to track attendance of students in a class and also calculate the no of classes they can skip per week",
    tags: ["Python", "HTML", "CSS", "JavaScript","Selenium"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    demoLink: "https://attendly-039.onrender.com/",
    codeLink: "https://github.com/Harshith106/Attendly",
    color: "cyan",
    category: "ml",
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio website to showcase my projects and skills",
    tags: ["React", "TypeScript", "Tailwind", "Vercel"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    demoLink: "#",
    codeLink: "#",
    color: "green",
    category: "web",
  },
  {
    title: "Weather Forecast website",
    description: "A website that shows the weather of a city including the temperature, humidity, wind speed, and other weather details for hourly basis, 3 day forecast and 7 day forecast",
    tags: ["React", "Tailwind", "OpenWeatherMap API"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
    demoLink: "https://github.com/Harshith106/ReactWeather",
    codeLink: "https://github.com/Harshith106/ReactWeather",
    color: "pink",
    category: "mobile",
  },
  {
    title: "Data Visualization Tool",
    description: "An interactive tool for exploring and visualizing complex datasets with customizable charts and filters.",
    tags: ["Python", "Pandas", "D3.js", "Flask"],
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    demoLink: "#",
    codeLink: "#",
    color: "purple",
    category: "ml",
  },
  {
    title: "Smart Home Control System",
    description: "An IoT platform for controlling and automating home devices through a web interface or mobile app.",
    tags: ["JavaScript", "Node.js", "MQTT", "React"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    demoLink: "#",
    codeLink: "#",
    color: "cyan",
    category: "web",
  },
  {
    title: "Language Learning Game",
    description: "An educational mobile game that uses gamification to help users learn new languages effectively.",
    tags: ["Unity", "C#", "ML.NET", "Firebase"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    demoLink: "#",
    codeLink: "#",
    color: "green",
    category: "mobile",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-30" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollObserver animation="rotate-in">
          <h2 className="section-heading neon-text-pink text-center">My Projects</h2>
        </ScrollObserver>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 3).map((project, index) => (
            <ScrollObserver key={project.title} animation="zoom-in" delay={index * 0.1} threshold={0.2}>
              <div className={`project-card text-neon-${project.color}`}>
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 min-h-[280px] flex flex-col">
                  <h3 className="text-xl font-orbitron font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/80 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`px-2 py-1 text-xs rounded-full bg-neon-${project.color}/10 border border-neon-${project.color}/30`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={project.demoLink} 
                      className="flex items-center gap-1 hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="flex items-center gap-1 hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </ScrollObserver>
          ))}
          {/* Full-width currently working project card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="project-card bg-gradient-to-r from-neon-cyan/10 via-neon-green/10 to-neon-purple/10 border-2 border-neon-green p-8 rounded-2xl flex flex-col items-center text-center shadow-lg">
              <div className="text-neon-green text-lg font-bold mb-2 animate-pulse">Currently working...</div>
              <h3 className="text-2xl font-orbitron font-bold mb-2 neon-text-cyan">AI Language Learning App</h3>
              <p className="text-lg text-foreground/90 max-w-2xl mx-auto">An app that uses AI to help users learn new languages effectively. It uses a combination of NLP and machine learning to provide personalized learning experiences. Where Ai tracks user mistakes and tailors the lesson plan accordingly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
