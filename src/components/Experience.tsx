
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
      title: "Software Engineer Intern",
      company: "Expert Learning Systems",
      location: "Dublin, OH",
      period: "May 2025 - Present",
      description: "Developing a scalable web application for 300+ schools in Belize to handle hardware requests, issue logging, and donor engagement, in collaboration with the Government of Belize and a former Apple engineer. Implementing with React for frontend, NodeJS for backend, and phpMyAdmin for database management.",
      skills: ["React", "Node.js", "phpMyAdmin", "Web Development", "Database Management"]
    },
    {
      title: "Data Analytics Intern",
      company: "Ronnie K. Irani Center for the Creation of Economic Wealth",
      location: "Tulsa, OK",
      period: "May 2024 - July 2024",
      description: "Analyzed market data and forecasted engagement strategies for 3,340 Black Tulsans using Excel, Python and R. Identified 21+ potential partners for Circle Cinema through data-driven insights and strategic outreach. Built a scalable business model for enhanced community engagement across 131K+ residents.",
      skills: ["Data Analytics", "Python", "R", "Excel", "Market Analysis", "Strategic Planning"]
    },
    {
      title: "Teaching Assistant - Data Structures and Algorithms",
      company: "Kenyon College",
      location: "Gambier, OH",
      period: "Jan 2024 - Present",
      description: "Led problem set walkthroughs and held sessions for 200+ students, improving understanding & performance. Assisted in restructuring weekly section content and quizzes, resulting in positive course feedback.",
      skills: ["Teaching", "Data Structures", "Algorithms", "Student Mentoring", "Curriculum Development"]
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
