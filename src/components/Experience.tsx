
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Job Title",
      company: "Company Name",
      location: "Location",
      period: "Month Year - Present",
      description: "Describe your responsibilities, achievements, and the skills you utilized in this position. Use concrete examples and metrics when possible to demonstrate your impact.",
      skills: ["Skill 1", "Skill 2", "Skill 3"]
    },
    {
      title: "Previous Job Title",
      company: "Previous Company Name",
      location: "Location",
      period: "Month Year - Month Year",
      description: "Describe your responsibilities, achievements, and the skills you utilized in this position. Focus on transferable skills and accomplishments that are relevant to your target roles.",
      skills: ["Skill 1", "Skill 4", "Skill 5"]
    },
    {
      title: "Earlier Job Title",
      company: "Earlier Company Name",
      location: "Location",
      period: "Month Year - Month Year",
      description: "For earlier positions, keep descriptions briefer while still highlighting notable achievements and skills gained.",
      skills: ["Skill 2", "Skill 6", "Skill 7"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((job, index) => (
            <Card key={index} className="relative overflow-hidden border-l-4 border-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      {job.company} • {job.location}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-gray-500 md:text-right whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
