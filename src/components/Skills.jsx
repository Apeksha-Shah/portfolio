import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      category: 'Computer Science',
      items: [
        'Competitive Programming',
        'Data Structures and Algorithms',
        'Object-Oriented Programming',
        'Machine Learning',
      ],
    },
    {
      category: 'Programming Languages',
      items: ['Java', 'C++', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Frameworks and Libraries',
      items: ['Spring Boot', 'React'],
    },
    {
      category: 'Databases',
      items: ['MySQL', 'MongoDB'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Postman', 'Docker'],
    },
  ];

  return (
    <section
    id="skills"
    className="bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-800 min-h-screen flex items-center justify-center"
  >
    <div className="w-full max-w-4xl px-4 h-full flex flex-col justify-center mt-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">Technical Skills</h2>
  
      <div className="space-y-10 mb-16">
        {skills.map((skill, index) => (
          <div key={index} className="text-left">
            <h3 className="text-lg font-semibold text-teal-700 mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-3 justify-start">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-full shadow text-sm hover:bg-teal-50 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
   
  );
};

export default Skills;
