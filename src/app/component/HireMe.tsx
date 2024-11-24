"use client";
import Link from "next/link";

function HireMe() {
  return (
    <section
      id="HireMe"
      className="relative bg-orange-500/50 text-white py-12"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/icons/img-footer.jpg')", // Replace with your image path
        }}
      ></div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-orange-500/90"></div>

      {/* Content */}
      <div className="relative container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Im Available for Freelancing</h2>
        <p className="text-lg mb-6">
          Have a project in mind? Lets work together to create something amazing!
        </p>
        <Link href="/Contact" target="_main" className="bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800 transition duration-300">Hire Me</Link>
        
      </div>
    </section>
  );
}

export default HireMe;
