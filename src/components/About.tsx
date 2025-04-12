
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
              <p>Wisdom Wemoatu Akanwe</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-gray-400" />
                <h3 className="font-medium">Location</h3>
              </div>
              <p>Your Gambier, Ohio</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-gray-400" />
                <h3 className="font-medium">Experience</h3>
              </div>
              <p>X 2+ Years of Experience</p>
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
           I am a software developer with 2+ years Experience
          </p>
          <p>
            I am passionate about Machine Learning, and how to use software to impact lives positively.
          </p>
          <p>
           Looking forward to opportunities involving analysis of data and.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
