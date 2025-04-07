'use client';

import Image from 'next/image';
import Link from 'next/link';

const NewRetailSection = () => {

  return (
    <div className="lg:pl-72 bg-lime-100 min-h-screen p-8">
      {/* Breadcrumb Navigation */}
      <div className="text-sm text-gray-600 mb-10">
        <Link href="/" className="hover:text-green-700">
          Home
        </Link>{' '}
        /{' '}
        <Link href="/trade" className="hover:text-green-700">
          Trade
        </Link>{' '}
        / <span className="font-semibold">New Retail Section</span>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row w-full max-w-3xl mx-auto">
        {/* Image Section (Left Side) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="flex space-x-[-15px] items-center">
            <Image
              src="/Spaghetti-500g.png" // Image from public folder
              alt="Spaghetti 500g"
              width={100}
              height={150}
              className="rounded"
            />
            <Image
              src="/Golden-Penny-Semovita-2kg.png" // Image from public folder
              alt="Golden Penny Semovita 10kg"
              width={100}
              height={150}
              className="rounded"
            />
            <Image
              src="/powerOil.png" // Image from public folder
              alt="Vegetable Oil 2 Litre"
              width={130}
              height={150}
              className="rounded"
            />
          </div>
        </div>

        {/* Text Section (Right Side) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold">
            A pack of Spaghetti, 2 litre vegetable oil & Semovita 10kg
          </h2>

          {/* Number of Items */}
          <div className="flex items-center gap-4">
            <span className="font-semibold">Number of items</span>
            <div className="flex items-center gap-2">
              <button
                className="bg-green-700 text-white w-8 h-8 rounded-md flex items-center justify-center hover:bg-green-800 transition-colors"
              >
                -
              </button>
              <span className="text-lg font-semibold">1</span>
              <button
                className="bg-green-700 text-white w-8 h-8 rounded-md flex items-center justify-center hover:bg-green-800 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Proceed to Pay Button */}
          <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition-colors flex items-center justify-center gap-2">
            Proceed to pay <span className="text-lg">🛒</span>
          </button>

          {/* Price Information */}
          <p className="flex justify-end text-lg font-semibold">₦ 180,000</p>
        </div>
      </div>
    </div>
  );
};

export default NewRetailSection;