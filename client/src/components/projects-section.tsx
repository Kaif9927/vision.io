import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Window from "./window";

interface ProjectsSectionProps {
  onClose: () => void;
}

const projects = [
  {
    id: 1,
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    category: "web",
    technologies: ["React", "Node.js", "Socket.io"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    category: "web",
    technologies: ["React", "Express", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Weather App",
    description: "Mobile weather application with location-based forecasts and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    category: "mobile",
    technologies: ["React Native", "APIs", "Redux"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const categories = ["all", "web", "mobile", "ai"];

export default function ProjectsSection({ onClose }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  return (
    <Window title="Projects - Portfolio" onClose={onClose} className="max-w-7xl">
      <div className="p-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 lg:mb-0">Featured Projects</h2>
          
          {/* Project Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeFilter === category
                    ? "bg-accent-blue text-white"
                    : "bg-slate-700 hover:bg-slate-600 text-slate-300"
                }`}
                onClick={() => setActiveFilter(category)}
                data-testid={`filter-${category}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="project-card bg-slate-800 rounded-lg border border-slate-600 overflow-hidden hover:border-accent-blue transition-colors duration-300 group"
              data-testid={`project-${project.id}`}
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-accent-blue bg-opacity-20 text-accent-blue px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.demoUrl}
                    className="text-accent-blue hover:text-blue-400 transition-colors duration-200 flex items-center space-x-1"
                    data-testid={`demo-${project.id}`}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="text-slate-400 hover:text-slate-300 transition-colors duration-200 flex items-center space-x-1"
                    data-testid={`github-${project.id}`}
                  >
                    <Github size={16} />
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}
