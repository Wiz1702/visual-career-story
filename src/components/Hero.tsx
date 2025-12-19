
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center py-20 relative overflow-hidden">
      <div className="floating-shapes">
        <div className="shape w-32 h-32 border border-primary/30 rounded-full"></div>
        <div className="shape w-24 h-24 bg-accent/20 rounded-lg rotate-45"></div>
        <div className="shape w-40 h-40 border-2 border-primary/25 rounded-full"></div>
        <div className="shape w-20 h-20 bg-accent/30 rounded-full"></div>
      </div>
      <div className="relative z-10">
        <p className="text-lg text-primary mb-4">Hello, I'm</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Wisdom Wemoatu Akanwe</h1>
        <p className="text-xl md:text-2xl text-accent mb-4">
          🏆 HackOH/IO 2025 Winner • Software Engineer • AI/ML Enthusiast
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          Founder & President, Kenyon AI & Technology Club (KAIT)
        </p>
        <p className="max-w-2xl text-muted-foreground mb-10">
          Impact-driven Software Engineer focused on scalable web applications and AI integration. 
          Building robust, user-centered applications that deliver measurable value. 
          Currently developing EdTech solutions for 300+ schools in Belize.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get in Touch
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="mt-16 animate-bounce"
          onClick={scrollToNextSection}
          aria-label="Scroll down"
        >
          <ArrowDown />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
