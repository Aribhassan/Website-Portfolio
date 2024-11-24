"use client";

import { useState, useEffect } from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: "/icons/img1.png" },
    { name: "CSS", icon: "/icons/img2.png" },
    { name: "Javascript", icon: "/icons/img3.png" },
    { name: "Typescript", icon: "/icons/img4.png" },
    { name: "Bootstrap", icon: "/icons/img5.png" },
    { name: "Node.js", icon: "/icons/img6.png" },
    { name: "NEXT.js", icon: "/icons/img7.png" },
    { name: "Tailwind", icon: "/icons/img8.png" },
  ];

  const [showAll, setShowAll] = useState(false);

  // Check screen size and update the `showAll` state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowAll(true); // Show all skills on desktop
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSkills = () => {
    setShowAll(!showAll);
  };

  // Show only the first 3 skills if `showAll` is false and the view is mobile
  const visibleSkills = showAll ? skills : skills.slice(0, 3);

  return (
    <section id="Skills" className="bg-black py-10 px-5">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-center mb-12">
          My <span className="text-orange-500">Skills</span>
        </h2>
        <p className="text-white mt-2">
          A collection of tools, languages, and frameworks I specialize in.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-5xl mx-auto">
        {visibleSkills.map((skill, index) => (
          <div
            key={index}
            className="w-auto bg-gray-800 hover:bg-orange-500 transition-all duration-300 rounded-lg p-6 flex flex-col items-center text-center shadow-lg"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-28 h-22 mb-4 py-4 align-middle"
            />
            <h3 className="text-white font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>

      {/* Show More Button - Visible Only on Mobile */}
      <div className="text-center mt-6 md:hidden">
        <button
          onClick={toggleSkills}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition duration-300"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}
