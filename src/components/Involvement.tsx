import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, Award, Sparkles, Trophy } from 'lucide-react';

const Involvement = () => {
  const involvements = [
    {
      title: "Co-Founder & President",
      organization: "Kenyon AI & Technology Club (KAIT)",
      period: "March 2025 - Present",
      description: "Co-founded and lead the AI & Technology Club, establishing organizational structure, recruiting members, and organizing educational events, workshops, and collaborative projects. Successfully built a vibrant community for technology enthusiasts, providing 500+ students exposure to AI models and their applications.",
      highlight: true
    },
    {
      title: "Co-Founder",
      organization: "Kenyon Consulting Club (KCG)",
      period: "August 2025 - Present",
      description: "Co-founded the consulting club to provide students with hands-on experience in business consulting and strategic problem-solving.",
      highlight: false
    },
    {
      title: "Member",
      organization: "ColorStack @ Kenyon College",
      period: "August 2024 - Present",
      description: "Active member of ColorStack, a community dedicated to increasing the entry, retention, and success of Black and Latinx students in computing.",
      highlight: false
    },
    {
      title: "Member",
      organization: "CodePath",
      period: "January 2024 - Present",
      description: "Participating in CodePath's technical interview preparation and software engineering courses to enhance problem-solving and coding skills.",
      highlight: false
    }
  ];

  const achievements = [
    { title: "HackOH/IO 2025 Winner - Most Original & Impactful Project", featured: true },
    { title: "Wendell D. Lindstrom Prize for Excellence in Math & Stats 2023-24", featured: true },
    { title: "Pi Mu Epsilon Society Member", featured: false },
    { title: "Merit List Recognition", featured: false },
    { title: "Best Project of the Semester - E-Commerce Website", featured: false }
  ];

  return (
    <section id="involvement" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Campus <span className="gradient-text">Involvement</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        
        {/* Involvement Cards */}
        <div className="max-w-4xl mx-auto grid gap-6 mb-16">
          {involvements.map((item, index) => (
            <Card 
              key={index} 
              className={`glass card-hover border-border/30 overflow-hidden ${item.highlight ? 'gradient-border' : ''}`}
            >
              {item.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
              )}
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl shrink-0 ${item.highlight ? 'bg-primary/10' : 'bg-secondary/50'}`}>
                      {item.highlight ? (
                        <Sparkles className="w-5 h-5 text-primary" />
                      ) : (
                        <Users className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      <p className={`font-medium ${item.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                        {item.organization}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground md:shrink-0">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed pl-0 md:pl-16">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <Card className="glass border-border/30 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-accent/10">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Awards & Honors</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {achievements.map((achievement, index) => (
                <Badge 
                  key={index} 
                  className={`py-2.5 px-4 text-sm ${
                    achievement.featured 
                      ? 'bg-gradient-to-r from-accent/20 to-primary/20 text-foreground border border-accent/30' 
                      : 'bg-secondary/50 text-foreground/80 border border-border/30'
                  }`}
                >
                  {achievement.featured && '🏆 '}
                  {achievement.title}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Involvement;
