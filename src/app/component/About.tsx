"use client";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Page Header */}
      <header className="w-full bg-gray-800 shadow-lg py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-extrabold text-orange-500">
            About <span className="text-white">Me</span>
          </h1>
          <nav>
            <a
              href="/"
              className="text-gray-400 hover:text-orange-500 transition duration-300"
            >
              Home
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-16">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left lg:text-left max-lg:text-left">

          <p className="text-lg text-gray-400 leading-relaxed mb-4">
            Hello! I am a dedicated and professional developer with extensive
            expertise in modern web technologies and a strong passion for
            innovation. My journey in development has been driven by a
            commitment to crafting user-friendly, visually stunning, and
            high-performing solutions that provide a seamless experience for
            users.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            I specialize in designing and developing robust, scalable
            applications tailored to meet your unique needs, whether its
            creating sleek websites, intuitive user interfaces, or efficient
            backend systems. My focus is on blending cutting-edge technology
            with creative problem-solving to deliver results that exceed
            expectations.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Beyond technical proficiency, I value clear communication and
            collaboration, ensuring that every project is aligned with your
            goals and vision. Whether you're launching a new product, enhancing
            an existing platform, or exploring groundbreaking ideas, Im here
            to bring your concepts to life with innovative thinking and
            precision.
          </p>

          <a
            href="/#Portfolio"
            className="bg-orange-500 text-black font-semibold px-8 py-3 rounded-lg text-lg hover:bg-orange-600 hover:text-white transition duration-300"
          >
            Explore My Work
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/icons/image.png" // Ensure the correct image path
              alt="About Me"
              className="w-64 lg:w-80 object-cover rounded-full shadow-2xl bg-orange-500 shadow-orange-500/50 border-4 border-orange-500"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 py-4">
        <div className="container mx-auto text-center flex flex-col items-center">
          <div className="flex space-x-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/syedarib786/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/arib-hassan-28280a2b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/+923218253489?text=Hello%20I%20found%20your%20profile%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition duration-300"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;




