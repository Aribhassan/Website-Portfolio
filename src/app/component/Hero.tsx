function Hero() {
  return (
    <section
      id="Hero"
      className="relative h-screen bg-black text-white flex items-center justify-center flex-col overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video/bg.mp4" // Ensure your video is placed in the public directory
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Hero Content */}
      <div className="relative bottom-16 z-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-thin">Hello, I am</h1>
        <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-extrabold mt-2">Syed Arib Hassan</h2>
        <p className="text-lg mt-4">
          A Corporate Front-End-Developer & UI/UX Designer
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="/cv.pdf"
            download
            className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
          >
            Download CV
          </a>
          <a
            href="#Portfolio"
            className="border border-orange-500 text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300 hover:text-white"
          >
            My Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
