"use client";

import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <div
      className="w-full max-w-[1300px] h-auto sm:h-[500px] bg-cover bg-center bg-no-repeat rounded-3xl shadow-lg flex flex-col sm:flex-row overflow-hidden mx-auto"
      style={{ backgroundImage: `url("/hero.png")` }} // Reference the public folder image
    >
      {/* Left Section */}
      <div className="flex-1 p-6 flex flex-col justify-center rounded-lg">
        <h1 className="text-3xl sm:text-3xl lg:text-7xl font-bold px-14 text-green-200 mb-3">
          Spring Of <br /> Light Divine <br /> Global Ltd
        </h1>
        
        {/* Buttons */}
        <div className="flex gap-4 px-14 mt-10">
          <button className="py-2 px-4 sm:px-6 text-white text-sm ring-1 ring-white font-medium rounded-full shadow hover:bg-green-600 transition">
            Read More
          </button>
          <Link
            href="/registration"
            className="py-2 px-4 sm:px-6 text-white text-sm ring-1 ring-white font-medium rounded-full shadow hover:bg-green-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
