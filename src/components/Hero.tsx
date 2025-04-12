
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
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center py-20">
      <p className="text-lg text-gray-600 mb-4">Hello, I'm</p>
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Wisdom Wemoatu Akanwe</h1>
      <p className="text-2xl md:text-3xl text-gray-700 mb-8">
        Mathematics & Statistics Student | Data Science Enthusiast
      </p>
      <p className="max-w-xl text-gray-600 mb-10">
        A dedicated and versatile student with a passion for software development, data analytics, and problem-solving. Currently pursuing a degree in Mathematics & Statistics with a focus on Data Science at Kenyon College.
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
    </section>
  );
};

export default Hero;
