import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Wrench, Brain, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      category: "Languages",
      color: "primary",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Go", "C#", "Java", "SQL", "R"]
    },
    {
      icon: Wrench,
      category: "Frameworks & Libraries",
      color: "accent",
      skills: ["React", "Next.js", "Node.js", "Express", "FastAPI", "LangChain", "Echo"]
    },
    {
      icon: Database,
      category: "Tools & Databases",
      color: "primary",
      skills: ["Docker", "Kubernetes", "PostgreSQL", "MariaDB", "MongoDB", "Supabase", "Git", "Jenkins CI/CD"]
    },
    {
      icon: Brain,
      category: "AI/ML",
      color: "accent",
      skills: ["RAG Pipelines", "LLM Applications", "Embeddings", "Vector DBs", "Machine Learning"]
    }
  ];

  const coursework = [
    "Object Oriented Programming I & II",
    "Data Structures & Algorithms",
    "Advanced Modelling",
    "Linear Algebra",
    "Discrete Mathematics",
    "Applied Probability & Statistics",
    "Organization of Programming Languages",
    "AI & Machine Learning (Spring 2026)"
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass card-hover border-border/30 overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-3 rounded-xl ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-5 h-5 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary/80 text-foreground/90 border border-border/30 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coursework */}
        <Card className="glass border-border/30 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Relevant Coursework</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {coursework.map((course, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="py-2 px-4 text-sm border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  {course}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
