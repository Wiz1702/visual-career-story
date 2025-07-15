
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website (Ken-Comm)",
      description: "Developed a responsive frontend interface for an e-commerce website used by 100+ simulated users for course testing on Kenyon Campus. Collaborated with team on integrating product listings and user authentication features. Awarded Best Project of the Semester for outstanding performance and innovation.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["JavaScript", "Node.js", "Ruby on Rails"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Integrated Development Environment (KenCode)",
      description: "Led a team of 7 to build a student-focused IDE to enable secure, real-time Python & C++ code execution in isolated environments. Designed the UI with Next.js and JavaScript, ensuring smooth frontend-backend integration.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["Docker", "Drizzle", "Next.js", "JavaScript"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Kenyon College Focal Vocabulary Dictionary",
      description: "Developed a web-based dictionary to simplify campus terminology, supporting 1,000+ students and faculty. Built using HTML, CSS, JavaScript; hosted on AWS and version-controlled via GitHub to ensure accessibility and security.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "AWS"],
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
