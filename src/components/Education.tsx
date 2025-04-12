
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationHistory = [
    {
      degree: "Undergraduate",
      field: "Mathematics & Statistics (Data Science)",
      institution: "Kenyon College",
      location: "Gambier, Ohio",
      period: "2023 - 2027 (Expected)",
      gpa: "4.0/4.0",
      minor: "Computer Science",
      courses: [
        "Data Structures and Algorithms",
        "Python Programming",
        "C++",
        "Advanced Modelling",
        "Research Methods",
        "Applied Logic",
        "Digital Systems",
        "Classical Physics",
        "AI & Machine Learning",
        "Web Development",
        "Software Development"
      ]
    }
  ];

  const certifications = [
    {
      name: "Wendell D. Lindstrom Memorial Prize",
      issuer: "Kenyon College",
      description: "Excellence in Mathematics and Statistics"
    },
    {
      name: "Honors Certificate",
      issuer: "Codepath",
      description: "Introduction to Web Software Development"
    },
    {
      name: "Google Data Analytics Certification",
      issuer: "Google",
      description: "Foundations in Data Analytics"
    }
  ];

  const memberships = [
    "Kenyon College Business and Finance Committee",
    "Kenyon College Academic Affairs Committee",
    "Google Developers Association",
    "ColorStack",
    "CodePath"
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
                    <h3 className="text-xl font-semibold">{edu.degree} in {edu.field}</h3>
                    <h4 className="text-lg text-gray-700 mb-2">{edu.institution}</h4>
                    <p className="font-medium text-gray-600">Minor: {edu.minor}</p>
                    <p className="font-medium text-gray-600 mb-2">GPA: {edu.gpa}</p>
                    
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

          {/* Certifications & Awards */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Awards & Certifications</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-gray-600">{cert.issuer} - {cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Memberships */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Professional Memberships</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {memberships.map((membership, index) => (
                  <li key={index}>{membership}</li>
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
