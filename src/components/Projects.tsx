
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Kenyon College Focal Vocabulary Dictionary",
      description: "An online dictionary to streamline access to essential college-specific terminology, serving as a resource for 200+ faculty and 800+ students.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "AWS", "GitHub"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "E-Commerce Website",
      description: "Full-stack e-commerce platform with product listings, user authentication, and order management features. Awarded Best Project of the Semester.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["Ruby on Rails", "HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "2D Game (Personal Project)",
      description: "A popular personal project game with over 500+ players. Demonstrates programming skills and creativity in game development.",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["Game Development", "JavaScript", "HTML5 Canvas", "CSS"],
      liveUrl: "#",
      repoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t flex justify-between py-3">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            <Github className="mr-2" size={18} />
            <span>View more projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
