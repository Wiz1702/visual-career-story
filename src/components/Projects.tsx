import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Trophy, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Pchz - AI Startup Pitch Platform",
      description: "Built a TikTok-style video-pitch platform enabling founders to share startup pitches and investors/recruiters to discover. Features AI-powered summarization, semantic search, and content insights using Gemini embeddings and pgvector.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["Next.js", "FastAPI", "Supabase", "pgvector", "Gemini AI"],
      award: "HackOH/IO 2025 Winner - Most Original & Impactful Project",
      repoUrl: "https://github.com/Wiz1702",
      featured: true
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
      description: "Led a team of 7 to build a student-focused IDE enabling secure, real-time Python & C++ code execution in sandboxed environments. Architected containerized backend with Docker for isolation.",
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
      description: "Developed a responsive frontend interface for an e-commerce website used by 100+ simulated users. Awarded Best Project of the Semester.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["JavaScript", "Node.js", "Ruby on Rails"],
      repoUrl: "https://github.com/NickJNelson03/E-commerceWebsite.git"
    },
    {
      title: "Kenyon Focal Vocabulary Dictionary",
      description: "Web-based dictionary to simplify campus terminology, supporting 1,000+ students and faculty. Hosted on AWS with version control via GitHub.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&h=350&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "AWS"],
      repoUrl: "https://github.com/Wiz1702/KenyonFocal.git"
    }
  ];

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <Card className="glass border-border/30 overflow-hidden mb-12 max-w-5xl mx-auto gradient-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/90 text-accent-foreground text-sm font-medium">
                  <Trophy className="w-4 h-4" />
                  <span>Winner</span>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">{featuredProject.title}</h3>
                <p className="text-accent text-sm font-medium mb-4">{featuredProject.award}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech, i) => (
                    <Badge key={i} className="bg-primary/10 text-primary border-0">{tech}</Badge>
                  ))}
                </div>
                <a 
                  href={featuredProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </CardContent>
            </div>
          </Card>
        )}
        
        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {otherProjects.map((project, index) => (
            <Card key={index} className="glass card-hover border-border/30 overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-border/50 text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                  <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View All Link */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Wiz1702" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-primary/10 transition-all duration-300 text-foreground font-medium group"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
