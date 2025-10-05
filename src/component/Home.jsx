import React from "react";
import logo from 'src/assets/logo.png';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black pt-24 pb-16 relative w-full"
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">

          {/* Left Section */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 w-full lg:pr-8 xl:pr-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
              Hi, I'm <span className="text-blue-500">Rohit Kumar</span>
            </h1>

            {/* Mobile Image */}
            <div className="block lg:hidden w-full flex justify-center my-8">
              <div className="relative w-64 sm:w-72">
                <div className="relative aspect-[3/4]">
                  <div className="absolute inset-0 bg-white rounded-2xl transform rotate-2 opacity-40" style={{ transform: 'rotate(2deg) translate(4px, -4px)' }}></div>
                  <div className="absolute inset-0 bg-blue-500 rounded-2xl transform -rotate-2 opacity-25" style={{ transform: 'rotate(-2deg) translate(-4px, 4px)' }}></div>
                  <img
                    src="src/assets/image.png"
                    alt="Rohit Kumar"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10"
                  />
                </div>
              </div>
            </div>

            {/* Line */}
            <div className="h-1 w-20 bg-white mx-auto lg:mx-0 rounded-full"></div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
              I am passionate about <span className="font-semibold text-blue-400">Web Development</span> and <span className="font-semibold text-blue-400">Full-Stack Development</span>. I enjoy building responsive, visually appealing websites and modern applications that solve real-world problems.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 w-full max-w-md mx-auto lg:mx-0">
              <a
                href="https://anajbhandar.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-blue-500 text-white text-base md:text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black text-base md:text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:flex flex-1 justify-center xl:justify-end w-full lg:pl-8 xl:pl-12">
            <div className="relative w-80 xl:w-96">
              <div className="relative aspect-[3/4]">
                <div className="absolute inset-0 bg-white rounded-2xl opacity-40" style={{ transform: 'rotate(3deg) translate(8px, -8px)' }}></div>
                <div className="absolute inset-0 bg-blue-500 rounded-2xl opacity-25" style={{ transform: 'rotate(-3deg) translate(-8px, 8px)' }}></div>
                <img
                  src="src/assets/image.png"
                  alt="Rohit Kumar"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <svg
          className="w-6 h-6 text-white opacity-70"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Home;
