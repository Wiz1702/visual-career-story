import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, MapPin, Briefcase, Mail, Linkedin, Phone, Trophy, GraduationCap } from 'lucide-react';

const About = () => {
  const infoCards = [
    { icon: User, label: 'Name', value: 'Wisdom Wemoatu Akanwe' },
    { icon: MapPin, label: 'Location', value: 'Gambier, Ohio' },
    { icon: Mail, label: 'Email', value: 'akanwe1@kenyon.edu' },
    { icon: Phone, label: 'Phone', value: '740-358-3649' },
    { icon: Briefcase, label: 'Focus', value: 'Software Development, AI/ML, Product Management' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Wisdom Wemoatu Akanwe' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
          
          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {infoCards.map((item, index) => (
              <Card key={index} className="glass card-hover border-border/30">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-foreground font-medium truncate">{item.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Bio */}
          <Card className="glass border-border/30 mb-8">
            <CardContent className="p-8">
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I'm a <span className="text-foreground font-medium">Junior at Kenyon College</span> studying 
                  Computer Science with a passion for impact-driven software engineering, AI/ML (RAG pipelines, 
                  LLM apps), and community building.
                </p>
                <p>
                  As a Software Engineer focused on <span className="text-primary">scalable web applications</span> and 
                  <span className="text-primary"> AI integration</span>, I drive digital transformation through full-stack 
                  development and cloud infrastructure implementation. My approach combines technical expertise with 
                  cross-functional collaboration to create robust, user-centered applications.
                </p>
                <p>
                  I also lead <span className="text-foreground font-medium">product management</span> for student and community tools—prioritizing features, running user discovery, and shipping iterations that balance feasibility with impact.
                </p>
                <p>
                  In <span className="text-accent font-medium">Spring 2026</span>, I will be studying Machine Learning 
                  in Sweden, expanding my global research and applied AI systems expertise.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Awards */}
          <Card className="gradient-border glass border-0">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 shrink-0">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Awards & Recognition</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span><span className="text-accent font-medium">HackOH/IO 2025 Winner</span> — Most Original & Impactful Project</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Wendell D. Lindstrom Prize for Excellence in Math & Stats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
