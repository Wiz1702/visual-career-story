
import React from 'react';
import ResumeLayout from '@/components/ResumeLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Involvement from '@/components/Involvement';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <ResumeLayout>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Involvement />
      <Contact />
    </ResumeLayout>
  );
};

export default Index;
