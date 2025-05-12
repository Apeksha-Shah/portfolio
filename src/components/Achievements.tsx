import {
  FaTrophy,
  FaMedal,
  FaFlag,
  FaBrain,
  FaCode,
  FaStar,
} from 'react-icons/fa';

const Achievements = () => {
  const keyAchievements = [
    {
      highlight: 'Secured 2nd Place',
      event: 'Bhashathon',
      details: 'an AI/ML hackathon organized by IIT Bombay.',
      image: '/bhashathon.jpeg', // Image is now inside the public folder
      icon: <FaBrain className="text-teal-600 text-xl mt-1" />,
    },
    {
      highlight: 'Secured 7th Place',
      event: 'DuHacks 4.0',
      details: 'a competitive coding hackathon at DDU.',
      image: '/duhacks.png', // Image is now inside the public folder
      icon: <FaCode className="text-teal-600 text-xl mt-1" />,
    },
    {
      highlight: 'Secured 3rd Rank',
      event: 'CodeQuest ICPC DDU Edition',
      details: 'organized by DDU.',
      image: '/CodeQuest.png', // Image is now inside the public folder
      icon: <FaMedal className="text-teal-600 text-xl mt-1" />,
    },
    {
      highlight: 'Selected as Center First Student',
      event: '',
      details: 'to hoist the flag in 10th and 12th Grades.',
      image: '/flaghost.jpeg', // Image is now inside the public folder
      icon: <FaFlag className="text-teal-600 text-xl mt-1" />,
    },
    {
      highlight: 'Achieved Global Rank 4650',
      event: 'LeetCode Biweekly Contest-137',
      details: '(Top 25%).',
      image: null, // No image here
      icon: <FaStar className="text-teal-600 text-xl mt-1" />,
    },
    {
      highlight: 'Achieved Global Rank 1998',
      event: 'CodeChef Starters 100',
      details: '',
      image: null, // No image here
      icon: <FaStar className="text-teal-600 text-xl mt-1" />,
    }
  ];

  return (
    <section
      id="achievements"
      className="px-6 py-12 bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900"
    >
      <div className="max-w-5xl mx-auto mt-10 mb-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          Key Achievements
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {keyAchievements.map((item, index) => (
            <div
              key={index}
              className="p-5 bg-gray-100 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4 mb-3">
                {item.icon || (
                  <FaTrophy className="text-teal-600 text-xl mt-1" />
                )}
                <p className="text-gray-700 text-base">
                  <span className="font-semibold text-gray-900">
                    {item.highlight}
                  </span>{' '}
                  {item.event && (
                    <span className="font-semibold text-teal-700">
                      in {item.event}
                    </span>
                  )}
                  {item.details && ` – ${item.details}`}
                </p>
              </div>
              {item.image && (
                <img
                  src={item.image}
                  alt={`${item.highlight} image`}
                  className="w-full h-64 object-cover rounded"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
