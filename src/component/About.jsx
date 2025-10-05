import React from "react";
import about from '../assets/image.jpg';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black py-16 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-12">
        
        {/* Left - Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <img
            src={about}
            alt="Rohit Kumar"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Right - About Details */}
        <div className="flex-1 text-center md:text-left space-y-4 sm:space-y-6 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white border-b-4 border-indigo-500 inline-block pb-2">
            About Me
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Hi, I'm <span className="text-blue-400 font-semibold">Rohit Kumar</span>, 
            a Computer Science student passionate about Web Development and building modern, creative solutions for real-world problems.
          </p>
          
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I love creating responsive <span className="text-green-400 font-medium">web applications</span> 
            and <span className="text-purple-400 font-medium">full-stack solutions</span> that are visually appealing, functional, and user-friendly.
          </p>
          
          {/* Skills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 pt-2">
            {[
              { name: "HTML", color: "bg-blue-800 text-blue-300" },
              { name: "CSS", color: "bg-purple-800 text-purple-300" },
              { name: "JavaScript", color: "bg-yellow-800 text-yellow-300" },
              { name: "C", color: "bg-green-800 text-green-300" },
              { name: "C++", color: "bg-red-800 text-red-300" },
              { name: "Python", color: "bg-yellow-800 text-yellow-300" },
              { name: "Java", color: "bg-cyan-800 text-cyan-300" },
              { name: "React", color: "bg-blue-800 text-blue-300" },
              { name: "Bootstrap", color: "bg-teal-800 text-teal-300" },
              { name: "Node.js", color: "bg-indigo-800 text-indigo-300" },
              { name: "FastAPI", color: "bg-red-800 text-red-300" },
              { name: "mySQL", color: "bg-green-800 text-green-300" },
              { name: "MongoDB", color: "bg-green-800 text-green-300" },
              { name: "PostgreSQL", color: "bg-yellow-800 text-yellow-300" },
              { name: "Git", color: "bg-green-800 text-green-300" },
            ].map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:scale-105 transition-transform duration-200 ${skill.color}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
