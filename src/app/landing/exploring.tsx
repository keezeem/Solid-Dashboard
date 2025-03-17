"use client";

import React from "react";
import Image from "next/image";

const people: { name: string; job: string; active: boolean }[] = [
  { name: "Courtney Henry", job: "Medical Assistant", active: true },
  { name: "Courtney Henry", job: "Marketing Coordinator", active: false },
  { name: "Albert Flores", job: "Web Designer", active: false },
];

const Exploring: React.FC = () => {
  return (
    <div className="w-full max-w-[1300px] min-h-[700px] rounded-3xl shadow-lg mt-24 mb-24 overflow-hidden mx-auto flex flex-col md:flex-row items-center px-6 md:px-8 lg:px-12 relative">
      {/* Background Image */}
      <Image
        src="/join.png" // Image from public folder
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 rounded-3xl -z-10"
      />

      {/* Left Section: Title & Team Cards */}
      <div className="w-full md:w-2/3 lg:w-1/2 p-6 md:p-10 relative z-10">
        {/* Coaching Header */}
        <div className="flex items-center space-x-3">
          <Image src="/group.png" alt="Group" width={40} height={40} />
          <h3 className="text-green-900 text-base md:text-lg font-semibold">
            OUR COACHING
          </h3>
        </div>

        {/* Title */}
        <h1 className="text-green-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mt-2">
          Exploring the Unknown <br /> Voyages of Wonder
        </h1>

        {/* Team Cards */}
        <div className="space-y-4 mt-6">
          {people.map((person, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-md w-full md:w-[450px]"
            >
              <div>
                <h1 className="text-sm md:text-lg font-semibold text-gray-800">
                  {person.name}
                </h1>
                <p className="text-xs md:text-sm text-gray-500">{person.job}</p>
              </div>
              <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full ring-black ring-1 hover:bg-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Social Media */}
      <div className="w-full md:w-1/3 lg:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 relative z-10">
        <div className="bg-gray-200 w-48 md:w-[300px] h-48 md:h-[300px] rounded-2xl flex items-end justify-center p-4">
          <div className="flex items-center space-x-4 bg-white px-6 py-2 rounded-full shadow-md">
            <span className="text-gray-500">𝕏</span>
            <span className="text-green-600">f</span>
            <span className="text-gray-600">📷</span>
            <span className="text-blue-600">in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exploring;
