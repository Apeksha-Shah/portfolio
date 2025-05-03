import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'TalkEase',
    description: [
      'Developed an AI-powered chatbot using LLaMA 2 for mental health support.',
      'Optimized deployment by compressing the 13GB LLaMA 2 model to 4GB using llama.cpp for efficient local inference on CPU-only systems.',
      'Implemented multimodal (text + audio) and multilingual interactions.',
      'Developed a chat analytics module for real-time sentiment and emotion analysis.',
    ],
    tech: 'LLaMA 2, GPTQ, ONNX, MERN, Flask',
    github: 'https://github.com/NenseeZankat/TalkEase'
  },
  {
    title: 'JobEcho',
    description: [
      'Built a platform to track placements and analyze hiring trends.',
      'Developed dashboards to visualize company recruitment patterns.',
      'Integrated Gemini API for AI-driven placement insights and chatbot assistance.',
      'Enabled interview experience sharing for company-specific preparation.',
    ],
    tech: 'TypeScript, MERN Stack, Gemini API',
    github: 'https://github.com/NaitikPatel-325/JobEcho',
    demo: 'https://job-echo-dusky.vercel.app/',
  },
  {
    title: 'Blogging Platform',
    description: [
      'Developed a blogging platform with secure JWT and OTP-based authentication.',
      'Implemented rich text editing, search, and engagement features like likes and comments.',
      'Built an admin dashboard to manage users, posts, and comments.',
    ],
    tech: 'React, Node.js, Express.js, MongoDB, Postman',
    github: 'https://github.com/Apeksha-Shah/echoblog',
    demo: 'https://echoblog-wheat.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 py-12 bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-100"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-teal-600">{project.title}</h3>
                <div className="flex space-x-4 text-teal-600 text-lg">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub className="hover:text-black transition" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                    <FaExternalLinkAlt className="hover:text-black transition" />
                  </a>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 mb-2 text-sm md:text-base">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Tech Stack:</strong> {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
