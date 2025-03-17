"use client";

import Image from "next/image";

const InfoSection: React.FC = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto p-6">
      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* First Box */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start">
          <Image
            src="/avater1.png" // Directly reference images from public folder
            alt="Avater 1"
            width={64} // Set width and height explicitly
            height={64}
            className="w-16 h-16 rounded-full mb-4"
            priority
          />
          <h1 className="text-xl font-semibold text-gray-800 mb-2">Vision</h1>
          <p className="text-gray-600">
            Empowering the people for a brighter future, illuminating the path to global transformation...
          </p>
        </div>

        {/* Second Box */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start">
          <Image
            src="/avater2.png"
            alt="Avater 2"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full mb-4"
            priority
          />
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Mission Statement
          </h1>
          <p className="text-gray-600">
            To inspire and empower individuals, communities, and nations to shine their lights for a brighter world and transformation.
          </p>
        </div>

        {/* Third Box */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start">
          <Image
            src="/avater3.png"
            alt="Avater 3"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full mb-4"
            priority
          />
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Solo Travel Planning
          </h1>
          <p className="text-gray-600">
            Dolor sit amet, consectetur adipiscing elit. Sed sit amet arcu nunc. Duis egestas ac lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
