
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, Award } from 'lucide-react';

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
    "HackOH/IO 2025 Winner - Most Original & Impactful Project",
    "Wendell D. Lindstrom Prize for Excellence in Math & Stats 2023-24",
    "Pi Mu Epsilon Society Member",
    "Merit List Recognition",
    "Best Project of the Semester - E-Commerce Website"
  ];

  return (
    <section id="involvement" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Campus Involvement & Achievements</h2>
        
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {involvements.map((item, index) => (
            <Card key={index} className={`overflow-hidden ${item.highlight ? 'border-l-4 border-l-primary' : ''}`}>
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Users className="text-primary" size={20} />
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                </div>
                <p className="text-primary font-medium">{item.organization}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold text-center">Awards & Honors</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {achievements.map((achievement, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                🏆 {achievement}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Involvement;
