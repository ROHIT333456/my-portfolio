import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left side - Name */}
        <div className="text-2xl font-semibold tracking-wide">
          Rohit<span className="text-blue-400">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-5 bg-gray-800 py-6 text-lg shadow-lg">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
