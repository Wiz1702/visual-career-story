
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
      title: "Software Engineer (Fellowship)",
      company: "Headstarter AI",
      location: "Remote",
      period: "July 2024 - March 2025",
      description: "Built 5+ AI apps and APIs using NextJS, OpenAI, StripeAPI with 98% accuracy as seen by 1000 users. Developed projects from design to deployment leading + engineering fellows using MVC design patterns. Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and Microservice patterns.",
      skills: ["NextJS", "OpenAI", "StripeAPI", "Agile", "CI/CD", "Git", "MVC"]
    },
    {
      title: "Business Consulting/ Data Analytics Intern",
      company: "Ronnie K. Irani Center for the Creation of Economic Wealth",
      location: "Tulsa, Oklahoma",
      period: "May - July 2024",
      description: "Analyzed a market of 131,000 Blacks and Hispanics in the Kendall Whittier district. Forecasted a potential market of 3,340 Black Tulsans to deliver data-driven insights for targeted outreach. Introduced key programs and identified 21+ potential partners for Circle Cinema (Client). Created a scalable business/financial model to target the market guided by former Mckinsey consultants.",
      skills: ["Data Analytics", "Market Analysis", "Excel", "RStudio", "Financial Modeling"]
    },
    {
      title: "Software (Frontend) Developer",
      company: "E-Commerce Website Development",
      location: "Gambier, Ohio",
      period: "January - May 2024",
      description: "Designed and implemented the frontend of an e-commerce website. Embedded designs into the application and ensured the functionality of various design elements. Collaborated with my team on integrating product listings, user authentication, and order management features. Awarded Best Project of the Semester for outstanding performance and innovation.",
      skills: ["Ruby on Rails", "HTML", "CSS", "JavaScript", "UI/UX Design"]
    },
    {
      title: "Project Lead",
      company: "Kenyon College Focal Vocabulary Dictionary",
      location: "Gambier, Ohio",
      period: "December 2023 - March 2024",
      description: "Designed and created an online dictionary to streamline access to essential college-specific terminology. Served as a resource for 200+ faculty and 800+ students, and facilitated a smoother transition for future freshmen into campus life.",
      skills: ["HTML", "CSS", "JavaScript", "GitHub", "AWS"]
    },
    {
      title: "Summer Intern and Junior Supervisor",
      company: "PowerCom Africa",
      location: "Accra, Ghana",
      period: "June - August 2021",
      description: "Collaborated with the engineering team to develop smart electronic meters in Accra. Performed tests on 50 prototypes to ensure compliance with industry standards and regulations. Conducted 30+ maintenance checks and firmware updates to ensure optimal functionality.",
      skills: ["Hardware Testing", "Firmware Updates", "Quality Assurance"]
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
