"use client";
function About() {
  return (
    <section id="About" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* About Text Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-6">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-md text-gray-400 leading-relaxed mb-4">
            Hello! Im a dedicated and professional developer with expertise in modern web
            technologies. My passion lies in building user-friendly and visually stunning solutions
            that deliver a seamless experience.
          </p>
          <p className="text-md text-gray-400 leading-relaxed mb-6">
            I specialize in creating robust, scalable applications tailored to meet your unique
            needs. Lets collaborate and bring your vision to reality with innovative ideas and
            precision.
          </p>
          <a
            href="/#Portfolio"
            className="bg-transparent border border-orange-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-orange-600 transition duration-300"
          >
            My Work
          </a>
        </div>

        {/* About Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/icons/image.png" // Ensure the correct image path
              alt="About Me"
              className="w-56 lg:w-96 object-cover rounded-full shadow-2xl bg-orange-500 shadow-orange-500/50 border-4 border-orange-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
