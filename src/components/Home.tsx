import { useEffect, useState } from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-800 flex flex-col md:flex-row items-center justify-center px-8 py-20"
    >
      {/* Profile Image */}
      <div className="mb-10 md:mb-12 md:mr-24 border border-gray-300 shadow-xl rounded-3xl overflow-hidden transition-transform hover:scale-105 duration-500">
        <img
          src="/photo2.jpeg"
          alt="Apeksha Shah"
          className="w-72 h-96 sm:w-80 sm:h-[28rem] md:w-96 md:h-[35rem] object-cover"
        />
      </div>


      {/* Bio Section */}
      <div className="max-w-2xl text-center md:text-left space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Apeksha Shah
        </h1>
        <h2 className="text-2xl text-gray-600 font-semibold">
          Computer Engineering Student · Full Stack Developer
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Passionate and results-driven Computer Engineering student at Dharmsinh Desai University with a strong foundation in software development and competitive programming. Skilled in modern web technologies and always striving to build innovative solutions to real-world problems.
        </p>
      </div>
    </section>
  );
};

export default Home;
