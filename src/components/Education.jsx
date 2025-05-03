import React from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Engineering',
      institution: 'Dharmsinh Desai University',
      duration: '2022–2026',
      details: 'CPI: 8.71/10',
    },
    {
      degree: 'HSC',
      institution: 'Shri C.D Patel High School',
      duration: '2020–2022',
      details: 'PR: 99.23%',
    },
    {
      degree: 'SSC',
      institution: 'Shri C.D Patel High School',
      duration: '2019–2020',
      details: 'PR: 99.87%',
    },
  ];

  const codingProfiles = [
    {
      platform: 'LeetCode',
      link: 'https://leetcode.com/u/apeksha_shah/',
    },
    {
      platform: 'Codeforces',
      link: 'https://codeforces.com/profile/apeksha_029',
    },
    {
      platform: 'CodeChef',
      link: 'https://www.codechef.com/users/shah297',
    },
    {
      platform: 'GeeksforGeeks',
      link: 'https://www.geeksforgeeks.org/user/apekshasog3i/',
    }
    
  ];

  return (
    <section
      id="education"
      className="bg-gradient-to-br from-white via-gray-100 to-gray-200 py-20 px-4 sm:px-6 text-gray-800"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education Column */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-black mr-6">Education</h2>
          <div className="relative border-l-2 border-gray-300 ml-24 sm:ml-24">
            {educationData.map((edu, index) => (
              <div key={index} className="flex items-start mb-10 relative">
                {/* Timeline Dot */}
                <div className="w-12 flex justify-center absolute -left-6 top-2">
                  <span className="w-4 h-4 rounded-full bg-teal-500 border-2 border-white"></span>
                </div>
                {/* Text Content */}
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-teal-600">{edu.degree}</h3>
                  <p className="text-gray-700">{edu.institution}</p>
                  <p className="text-gray-500 text-sm italic">{edu.duration}</p>
                  <p className="text-gray-600 text-sm">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coding Profiles Column */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Coding Profiles</h2>
          <div className="space-y-6">
            {codingProfiles.map((profile, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center space-x-3">
                  <FaCode className="text-teal-600 text-xl" />
                  <span className="text-lg font-medium text-gray-800">{profile.platform}</span>
                </div>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-black"
                  title={`Visit ${profile.platform}`}
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
