import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award } from 'lucide-react';

const Involvement = () => {
  const involvements = [
    {
      title: "Co-Founder & President",
      organization: "Kenyon AI & Technology Club (KAIT)",
      location: "Kenyon College",
      period: "March 2025 - Present",
      description: "Co-founded and leading the AI & Technology Club to promote innovation and technical learning among students.",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Member",
      organization: "ColorStack",
      location: "Kenyon College",
      period: "August 2018 - Present",
      description: "Active member of ColorStack, supporting diversity and inclusion in technology fields.",
      icon: <Users className="w-5 h-5" />
    }
  ];

  return (
    <section id="involvement" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Campus Involvement</h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {involvements.map((involvement, index) => (
            <Card key={index} className="relative overflow-hidden border-l-4 border-secondary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div className="flex items-center gap-3">
                    <div className="text-secondary">
                      {involvement.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{involvement.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {involvement.organization} • {involvement.location}
                      </CardDescription>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 md:text-right whitespace-nowrap">
                    {involvement.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {involvement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Involvement;