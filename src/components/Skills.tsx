
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "C++", level: 85 },
        { name: "Go", level: 80 },
        { name: "C#/Java", level: 75 },
        { name: "SQL", level: 85 },
        { name: "R", level: 75 },
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "Node.js/Express", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "LangChain", level: 75 },
      ]
    },
    {
      category: "Tools & Databases",
      skills: [
        { name: "Docker/Kubernetes", level: 85 },
        { name: "PostgreSQL/MariaDB", level: 85 },
        { name: "Supabase", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "Jenkins CI/CD", level: 75 },
      ]
    },
    {
      category: "AI/ML",
      skills: [
        { name: "RAG Pipelines", level: 80 },
        { name: "LLM Applications", level: 80 },
        { name: "Embeddings & Vector DBs", level: 75 },
        { name: "Machine Learning", level: 70 },
      ]
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
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center text-primary">Relevant Coursework</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {coursework.map((course, index) => (
              <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
