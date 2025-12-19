
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Expert Learning Systems",
      location: "Dublin, OH",
      period: "May 2025 - Present",
      description: [
        "Developing a scalable web application for 300+ schools in Belize to streamline hardware requests, issue logging, and donor engagement",
        "Implementing React for frontend and Node.js for backend, with phpMyAdmin for database management",
        "Partnering with the Government of Belize and staff level engineers to modernize national education technology infrastructure",
        "Introduced role-based authentication and access control, improving security for administrators, teachers, and donors",
        "Created automated testing scripts and integrated Jenkins CI/CD pipelines, reducing deployment errors"
      ],
      skills: ["React", "Node.js", "phpMyAdmin", "Jenkins", "CI/CD"]
    },
    {
      title: "Data Analytics Intern",
      company: "Ronnie K. Irani Center for the Creation of Economic Wealth",
      location: "Tulsa, OK",
      period: "May 2024 - July 2024",
      description: [
        "Built a REST API in Go with Echo web framework, leveraging Postgres for data storage and SQLC for type-safe code, reducing query errors by 30%",
        "Integrated Judge0 API for real-time code execution, processing 500+ submissions daily with <1s response time",
        "Deployed application using Docker and Kubernetes, ensuring scalability and reliability in production",
        "Implemented gRPC communication between microservices, reducing inter-service latency by 40%",
        "Developed microservices architecture, cutting feature rollout time by 25%"
      ],
      skills: ["Go", "PostgreSQL", "Docker", "Kubernetes", "gRPC", "REST API"]
    },
    {
      title: "Teaching Assistant - Data Structures & Algorithms",
      company: "Kenyon College",
      location: "Gambier, OH",
      period: "January 2024 - Present",
      description: [
        "Led weekly problem set walkthroughs and review sessions for 200+ students in core computer science course",
        "Collaborated with professors to redesign weekly content and assessments",
        "Introduced interactive review strategies (live coding demos, collaborative problem-solving) increasing participation by 30%"
      ],
      skills: ["Python", "C++", "Teaching", "Algorithms", "Data Structures"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building size={14} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">{skill}</Badge>
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
