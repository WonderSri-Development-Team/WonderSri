// File: src/components/Hero.tsx
import { useState } from "react";
import { Video, VideoOff } from "lucide-react";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      {/* Hero Section with Video */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        {isPlaying ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/src/assets/1225.mp4" // Adjust the path to your video
            autoPlay
            loop
            muted
            playsInline
          ></video>
        ) : (
          <img
            src="/src/assets/static.png" // Adjust the path to your image
            alt="Alternative Content"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

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
          <p className="text-white">Explore Sri Lanka Like Never Before!</p>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleVideo}
          className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
          aria-label="Toggle Video"
        >
          {isPlaying ? <VideoOff /> : <Video />}
        </button>
      </div>
    </div>
  );
}
