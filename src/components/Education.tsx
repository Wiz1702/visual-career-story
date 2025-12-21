import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationHistory = [
    {
      degree: "Bachelor of Arts",
      field: "Mathematics & Statistics / Computer Science",
      institution: "Kenyon College",
      location: "Gambier, Ohio, USA",
      period: "Graduating May 2027",
      courses: [
        "Object-Oriented Programming & Data Structures (Python, C++)",
        "Advanced Modelling",
        "Digital Systems",
        "Web Development",
        "Software Design & Development",
        "AI & Machine Learning (Spring 2026)"
      ]
    }
  ];

  const honors = [
    { title: "Pi-mu-Epsilon Society", type: "society" },
    { title: "Merit List", type: "academic" },
    { title: "Wendell D Lindstrom Prize for Excellence in Math and Stats 23-24", type: "award" }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education Card */}
          {educationHistory.map((edu, index) => (
            <Card key={index} className="glass card-hover border-border/30 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 w-fit">
                      <GraduationCap className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-lg text-primary font-medium mb-2">{edu.field}</p>
                    <p className="text-foreground/90 font-medium mb-4">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    {/* Coursework */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-4 h-4 text-accent" />
                        <h4 className="font-semibold text-foreground">Relevant Coursework</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <Badge 
                            key={courseIndex} 
                            variant="secondary"
                            className="bg-secondary/50 text-foreground/80 border border-border/30"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Honors Section */}
          <Card className="glass border-border/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Academic Honors</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {honors.map((honor, index) => (
                  <Badge 
                    key={index} 
                    className={`py-2 px-4 ${
                      honor.type === 'award' 
                        ? 'bg-accent/10 text-accent border-accent/30' 
                        : honor.type === 'society'
                        ? 'bg-primary/10 text-primary border-primary/30'
                        : 'bg-secondary/50 text-foreground/80 border-border/30'
                    } border`}
                  >
                    {honor.type === 'award' && '🏆 '}
                    {honor.type === 'society' && '🎓 '}
                    {honor.title}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
