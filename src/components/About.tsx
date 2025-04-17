
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, MapPin, Briefcase, Calendar, Mail, Linkedin, Phone } from 'lucide-react';

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
                <h3 className="font-medium"></h3>
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
              <p>Gambier, Ohio</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-gray-400" />
                <h3 className="font-medium">Email</h3>
              </div>
              <p>akanwe1@kenyon.edu</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="text-gray-400" />
                <h3 className="font-medium">Phone</h3>
              </div>
              <p>740-358-3649</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-gray-400" />
                <h3 className="font-medium">Experience</h3>
              </div>
              <p>Software Development & Data Analytics</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Linkedin className="text-gray-400" />
                <h3 className="font-medium">LinkedIn</h3>
              </div>
              <p>Wisdom Wemoatu Akanwe</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-4 text-gray-600">
          <p>
            I am a Mathematics & Statistics major with a focus on Data Science and a minor in Computer Science at Kenyon College.
          </p>
          <p>
            I am passionate about leveraging technology and data analytics to solve complex problems and create impactful solutions.
          </p>
          <p>
            With experience in software development, data analysis, and business consulting, I am looking forward to opportunities where I can apply my technical and analytical skills to drive innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
