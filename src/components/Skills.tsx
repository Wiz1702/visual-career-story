
import React from 'react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "R", level: 85 },
      ]
    },
    {
      category: "Technologies & Frameworks",
      skills: [
        { name: "Next.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "TypeScript", level: 80 },
        { name: "React", level: 85 },
        { name: "SQL", level: 75 },
        { name: "Git/GitHub", level: 90 },
      ]
    },
    {
      category: "Tools & Databases",
      skills: [
        { name: "Drizzle ORM", level: 70 },
        { name: "MariaDB", level: 70 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "phpMyAdmin", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
