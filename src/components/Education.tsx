
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationHistory = [
    {
      degree: "Bachelor of Arts",
      field: "Mathematics & Statistics (Data Science)",
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
    "Pi-mu-Epsilon Society",
    "Merit List",
    "Wendell D Listrom Prize for Excellence in Math and Stat 23-24"
  ];


  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Education */}
          <div className="space-y-8">
            {educationHistory.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree} - {edu.field}</h3>
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
                    
                    <div className="mt-4">
                      <h5 className="font-medium mb-2">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <span key={courseIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Honors */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Honors</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {honors.map((honor, index) => (
                  <li key={index}>{honor}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
