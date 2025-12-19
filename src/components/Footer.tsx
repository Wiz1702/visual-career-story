import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold gradient-text mb-1">Wisdom Akanwe</p>
            <p className="text-sm text-muted-foreground">Software Engineer & AI Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/Wiz1702" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-foreground/70 hover:text-foreground transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/wisdom-akanwe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground/70 hover:text-foreground transition-colors" />
            </a>
            <a 
              href="mailto:akanwe1@kenyon.edu"
              className="p-2.5 rounded-lg glass hover:bg-primary/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-foreground/70 hover:text-foreground transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Made with <Heart className="w-4 h-4 text-primary fill-primary" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
