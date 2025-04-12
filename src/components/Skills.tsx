
import React from 'react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      category: "Technical Skills",
      skills: [
        { name: "Skill 1", level: 90 },
        { name: "Skill 2", level: 85 },
        { name: "Skill 3", level: 75 },
        { name: "Skill 4", level: 80 },
      ]
    },
    {
      category: "Professional Skills",
      skills: [
        { name: "Skill 5", level: 95 },
        { name: "Skill 6", level: 85 },
        { name: "Skill 7", level: 80 },
        { name: "Skill 8", level: 90 },
      ]
    },
    {
      category: "Languages",
      skills: [
        { name: "Language 1", level: 100 },
        { name: "Language 2", level: 75 },
        { name: "Language 3", level: 60 },
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
