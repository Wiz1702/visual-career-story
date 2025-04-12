
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, MapPin, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <User className="text-gray-400" />
                <h3 className="font-medium">Name</h3>
              </div>
              <p>Your Full Name</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-gray-400" />
                <h3 className="font-medium">Location</h3>
              </div>
              <p>Your Location</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-gray-400" />
                <h3 className="font-medium">Experience</h3>
              </div>
              <p>X Years of Experience</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-gray-400" />
                <h3 className="font-medium">Availability</h3>
              </div>
              <p>Available for new opportunities</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-4 text-gray-600">
          <p>
            A more detailed paragraph about yourself, your professional journey, values, and what drives you in your career. This is a good place to add a personal touch and give potential employers or clients a better sense of who you are.
          </p>
          <p>
            You can mention your approach to work, your passion for your field, and perhaps something about your journey that led you to where you are today.
          </p>
          <p>
            End with a forward-looking statement about what you're seeking in your next role or the types of projects you're most excited to work on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
