import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Involvement from '@/components/Involvement';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionWrapper from '@/components/SectionWrapper';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      
      <NavBar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
        
        <SectionWrapper delay={0.1}>
          <About />
        </SectionWrapper>
        
        <SectionWrapper delay={0.1}>
          <Experience />
        </SectionWrapper>
        
        <SectionWrapper delay={0.1}>
          <Skills />
        </SectionWrapper>
        
        <SectionWrapper delay={0.1}>
          <Education />
        </SectionWrapper>
        
        <SectionWrapper delay={0.1}>
          <Projects />
        </SectionWrapper>
        
        <SectionWrapper delay={0.1}>
          <Involvement />
        </SectionWrapper>
        
        <SectionWrapper delay={0.1}>
          <Contact />
        </SectionWrapper>
        
        <Footer />
      </motion.main>
    </div>
  );
};

export default Index;
