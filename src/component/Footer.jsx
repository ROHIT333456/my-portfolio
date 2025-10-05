import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // install react-icons if not already

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side - Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Rohit Kumar Keshri. All rights reserved.
        </p>

        {/* Right Side - Social Links */}
        <div className="flex gap-6 justify-center md:justify-end">
          <a
            href="https://github.com/ROHIT333456"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-kumar-keshri-473037309"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-white transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
