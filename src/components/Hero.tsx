export default function HeroSection() {
  return (
    <div>
      {/* Hero Section with Video */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/src/assets/1225.mp4" // Adjust the path to your video
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Circle Container */}
        <div className="absolute z-10 flex flex-col items-center justify-center text-center">
          {/* Circle with Cobalt Blue Background */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg bg-[#0047AB] bg-opacity-50">
            {/* Your Logo in the Background of Circle */}
            <img
              src="/src/assets/Logo.png" // Adjust the path to your image
              alt="Logo"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Title Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6 font-montserrat">
            Wonder <span className="text-blue-400">Sri</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
