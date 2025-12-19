import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, Briefcase } from 'lucide-react';

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
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary -translate-x-1/2 hidden md:block ring-4 ring-background" />
                
                <Card className="glass card-hover border-border/30 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className={`flex flex-col gap-3 mb-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <div className={`flex flex-wrap gap-3 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-2 mb-5 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 ${index % 2 === 0 ? 'md:order-last' : ''}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.skills.map((skill, i) => (
                        <Badge 
                          key={i} 
                          className="bg-primary/10 text-primary border-0 hover:bg-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
