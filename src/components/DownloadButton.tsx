
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DownloadButton = () => {
  // Function to generate resume content
  const generateResumeContent = () => {
    const content = `WISDOM WEMOATU AKANWE
akanwe1@kenyon.edu | 740-358-3649 | Linked-In Profile

Education

Undergrad: Kenyon College                                                                                        Expected Graduation: 2027

Major: Mathematics & Statistics (Data Science)  Minor: Computer Science 
Relevant Coursework: Data Structures and Algorithms, Python Programming, C++, Advanced Modelling, Research Methods, Applied Logic, Digital Systems, Classical Physics, AI & Machine Learning, Web Development (Codepath), Software Development
Professional Experience/Projects

Kenyon College Focal Vocabulary Dictionary                                    December 2023 - March 2024
Project  Lead                                                                                                                Gambier, Ohio                                       
Designed and created an online dictionary to streamline access to essential college-specific terminology
Served as a resource for 200+ faculty and 800+ students, and facilitated a smoother transition for future freshmen into campus life
Skills used: HTML, CSS, and JavaScript for coding; GitHub for version control; and hosted on an AWS virtual server to enhance both accessibility and security

E-Commerce Website Development                                                                       January - May 2024   
 Software (Frontend) Developer                                                                                   Gambier, Ohio             
Designed and implemented the frontend of an e-commerce website
Embedded designs into the application and ensured the functionality of various design elements
Collaborated with my team on integrating product listings, user authentication, and order management features.
Awarded Best Project of the Semester for outstanding performance and innovation
Skills used: Ruby on Rails, HTML, CSS, and JavaScript
Ronnie K. Irani Center for the Creation of Economic Wealth                          May - July 2024  
 
Business Consulting/ Data Analytics Intern                                                              Tulsa, Oklahoma
Analyzed a market of 131,000 Blacks and Hispanics in the Kendall Whittier district
Forecasted a potential market of 3,340 Black Tulsans to deliver data-driven insights for targeted outreach
Introduced key programs and identified 21+ potential partners for Circle Cinema (Client)
Created a scalable business/financial model to target the market guided by former Mckinsey consultants
Skills used: Excel and RStudio

Headstarter AI                                                                                        July 2024 - March 2025  
 Software Engineer(Fellowship)                                                                                   Remote
Built 5+ AI apps and APIs using NextJS, OpenAI, StripeAPI with 98% accuracy as seen by 1000 users
Developed projects from design to deployment leading + engineering fellows using MVC design patterns Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and Microservice patterns
PowerCom Africa                                                                                                     June - August 2021
 
Summer Intern and Junior Supervisor                                                                      Accra, Ghana	             
Collaborated with the engineering team to develop smart electronic meters in Accra
Performed tests on 50 prototypes to ensure compliance with industry standards and regulations
Conducted 30+ maintenance checks and firmware updates to ensure optimal functionality                                                                                           

Skills
Technical
Coding/Programming: Python, MatLab, C-programming, PhPmyAdmin, Ruby, RubyOnRails, HTML, CSS, JavaScript, MYSQL, Arduino
Microsoft Office: Proficient in Word, Excel, Outlook, PowerPoint
Google Suites: Docs, Sheets, Slides
 Interpersonal
Soft-skills: Excellent public speaking, leadership, and communication skills with a focus on team building
Leadership and Project Management: Outstanding organizational, multitasking, problem-solving, and conflict resolution
Awards/Honors/Certifications
 Wendell D.Lindstrom Memorial Prize - Excellence in Mathematics and Statistics in Kenyon College
 Honors Certificate - Codepath Introduction to Web Software Development
 Google Data Analytics Certification-  Foundations in Data Analytics
Professional Memberships 
 Kenyon College
Business and Finance Committee
Academic Affairs Committee
 Developer Communities
Google Developers Association
ColorStack
CodePath
Project Links
My GitHub Projects
My 2D Game (Personal Project)  - (Over 500+ players)`;

    return content;
  };

  // Function to handle the resume download
  const handleDownload = () => {
    const content = generateResumeContent();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Wisdom_Akanwe_Resume.txt';
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Button variant="outline" className="flex items-center gap-2" onClick={handleDownload}>
      <Download size={16} />
      <span>Download Resume</span>
    </Button>
  );
};

export default DownloadButton;
