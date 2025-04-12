
import React from 'react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      category: "Technical Skills",
      skills: [
        { name: "Python", level: 90 },
        { name: "HTML/CSS/JavaScript", level: 85 },
        { name: "Ruby/Ruby on Rails", level: 80 },
        { name: "C Programming", level: 75 },
        { name: "MYSQL", level: 70 },
        { name: "MatLab", level: 85 },
      ]
    },
    {
      category: "Data & Analysis",
      skills: [
        { name: "Microsoft Excel", level: 95 },
        { name: "RStudio", level: 85 },
        { name: "Data Visualization", level: 80 },
        { name: "Statistical Analysis", level: 90 },
        { name: "Google Analytics", level: 75 },
      ]
    },
    {
      category: "Professional Skills",
      skills: [
        { name: "Leadership", level: 95 },
        { name: "Public Speaking", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 95 },
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
