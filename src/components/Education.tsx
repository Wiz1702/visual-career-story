
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationHistory = [
    {
      degree: "Master's Degree",
      field: "Field of Study",
      institution: "University Name",
      location: "Location",
      period: "Year - Year",
      description: "Brief description of your studies, noteworthy achievements, or relevant projects."
    },
    {
      degree: "Bachelor's Degree",
      field: "Field of Study",
      institution: "University Name",
      location: "Location",
      period: "Year - Year",
      description: "Brief description of your studies, noteworthy achievements, or relevant projects."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {educationHistory.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree} in {edu.field}</h3>
                  <h4 className="text-lg text-gray-700 mb-2">{edu.institution}</h4>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
