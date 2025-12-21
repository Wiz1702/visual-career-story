import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Trophy, Sparkles } from 'lucide-react';

const Hero = () => {
  const profileImage = "/profile.jpg"; // place your headshot at public/profile.jpg
  const [imageSrc, setImageSrc] = useState(profileImage);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] floating" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] floating-delay-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pulse-glow" />
        
        {/* Floating Shapes */}
        <div className="absolute top-[15%] left-[10%] w-20 h-20 border border-primary/30 rounded-2xl rotate-12 floating opacity-40" />
        <div className="absolute top-[20%] right-[15%] w-16 h-16 bg-accent/20 rounded-full floating-delay-1 opacity-50" />
        <div className="absolute bottom-[25%] left-[20%] w-24 h-24 border border-accent/25 rounded-full floating-delay-2 opacity-30" />
        <div className="absolute bottom-[20%] right-[10%] w-14 h-14 bg-primary/15 rounded-lg rotate-45 floating-delay-3 opacity-40" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <div className="animate-in-delay-1 mx-auto mb-8 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl glass">
          <img
            src={imageSrc}
            alt="Portrait of Wisdom Akanwe"
            className="w-full h-full object-cover"
            onError={() => setImageSrc('/placeholder.svg')}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/20 mix-blend-multiply" />
        </div>

        {/* Badge */}
        <div className="animate-in inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <Trophy className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-foreground/90">HackOH/IO 2025 Winner</span>
          <Sparkles className="w-4 h-4 text-primary" />
        </div>

        {/* Name */}
        <h1 className="animate-in-delay-1 text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">Hi, I'm </span>
          <span className="gradient-text">Wisdom Akanwe</span>
        </h1>

        {/* Title */}
        <p className="animate-in-delay-2 text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          Software Engineer • AI/ML Enthusiast • Builder
        </p>

        {/* Subtitle */}
        <p className="animate-in-delay-2 text-base md:text-lg text-primary/80 mb-8">
          Founder & President, Kenyon AI & Technology Club (KAIT)
        </p>

        {/* Description */}
        <p className="animate-in-delay-3 max-w-2xl mx-auto text-muted-foreground mb-10 text-base md:text-lg leading-relaxed">
          Building impactful software that scales.
        </p>

        {/* CTA Buttons */}
        <div className="animate-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8"
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
            <Mail className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 px-8"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
            <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* Social Links */}
        <div className="animate-in-delay-4 flex items-center justify-center gap-4">
          <a 
            href="https://github.com/Wiz1702" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary/10 transition-all duration-300 hover:scale-110 glow"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-foreground/80" />
          </a>
          <a 
            href="https://linkedin.com/in/wisdom-akanwe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary/10 transition-all duration-300 hover:scale-110 glow"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-foreground/80" />
          </a>
          <a 
            href="mailto:akanwe1@kenyon.edu"
            className="p-3 rounded-full glass hover:bg-primary/10 transition-all duration-300 hover:scale-110 glow"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-foreground/80" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full glass animate-bounce cursor-pointer hover:bg-primary/10 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
