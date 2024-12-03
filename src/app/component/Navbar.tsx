"use client";

import { useState } from "react";

 function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black/50 backdrop-blur-md text-white sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/#Hero" className="hover:text-orange-500">
            Coder
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a href="/About"  className="hover:text-orange-500">
              About Me
            </a>
          </li>
          <li>
            <a href="/#Skills" className="hover:text-orange-500">
            Skills
            </a>
          </li>
          <li>
            <a href="/#Services" className="hover:text-orange-500">
            Services
            </a>
          </li>
          <li>
            <a href="/#Portfolio" className="hover:text-orange-500">
            Portfolio
            </a>
          </li>
          <li>
            <a href="/#Testimonials" className="hover:text-orange-500">
            Testimonials
            </a>
          </li>
          <li>
            <a href="/#HireMe" className="hover:text-orange-500">
            HireMe
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 md:hidden">
            <li>
              <a href="/About" className="hover:text-orange-500" onClick={toggleMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#Services" className="hover:text-orange-500" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#Portfolio" className="hover:text-orange-500" onClick={toggleMenu}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#Testimonials" className="hover:text-orange-500" onClick={toggleMenu}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#HireMe" className="hover:text-orange-500" onClick={toggleMenu}>
                HireMe
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
