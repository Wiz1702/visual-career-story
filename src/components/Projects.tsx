
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Trophy } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Pchz - AI Startup Pitch Platform",
      description: "Built a TikTok-style video-pitch platform enabling founders to share startup pitches and investors/recruiters to discover. Features AI-powered summarization, semantic search, and content insights using Gemini embeddings and pgvector. Full-stack architecture with Supabase Storage for seamless video upload.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["Next.js", "FastAPI", "Supabase", "pgvector", "Gemini AI"],
      award: "🏆 HackOH/IO 2025 Winner - Most Original & Impactful Project",
      repoUrl: "https://github.com/Wiz1702"
    },
    {
      title: "Belize School Labs Platform",
      description: "National system for managing school labs and computer donations for 300+ schools in Belize. Features role-based authentication, hardware request management, issue logging, and donor engagement portal.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["React", "Node.js", "phpMyAdmin", "Jenkins"],
      repoUrl: "https://github.com/Wiz1702"
    },
    {
      title: "KenCode - Integrated Development Environment",
      description: "Led a team of 7 to build a student-focused IDE enabling secure, real-time Python & C++ code execution in sandboxed environments. Architected containerized backend with Docker for isolation, designed modern UI reducing load times by 40%.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["Docker", "Drizzle", "Next.js", "JavaScript"],
      repoUrl: "https://github.com/Bubballoo3/kenCode.git"
    },
    {
      title: "KVSS - AI Course Planning System",
      description: "AI-guided course planning system for students at Kenyon College. Leverages RAG pipelines and LLM applications to provide personalized academic guidance and course recommendations.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["Python", "LangChain", "RAG", "Vector DB"],
      repoUrl: "https://github.com/Wiz1702"
    },
    {
      title: "Ken-Comm E-Commerce Website",
      description: "Developed a responsive frontend interface for an e-commerce website used by 100+ simulated users for course testing. Collaborated on integrating product listings and user authentication. Awarded Best Project of the Semester.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["JavaScript", "Node.js", "Ruby on Rails"],
      repoUrl: "https://github.com/NickJNelson03/E-commerceWebsite.git"
    },
    {
      title: "Kenyon Focal Vocabulary Dictionary",
      description: "Web-based dictionary to simplify campus terminology, supporting 1,000+ students and faculty. Hosted on AWS with version control via GitHub for accessibility and security.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "AWS"],
      repoUrl: "https://github.com/Wiz1702/KenyonFocal.git"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className={`overflow-hidden flex flex-col h-full ${project.award ? 'ring-2 ring-primary' : ''}`}>
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {project.award && (
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                    <Trophy size={12} />
                    <span>Winner</span>
                  </div>
                )}
              </div>
              <CardContent className="pt-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                {project.award && (
                  <p className="text-sm text-primary font-medium mb-2">{project.award}</p>
                )}
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-border flex justify-between py-3">
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
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
            href="https://github.com/Wiz1702" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            <Github className="mr-2" size={18} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
