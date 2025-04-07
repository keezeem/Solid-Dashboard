'use client';

import Image from "next/image";




const Centered: React.FC = () => {
  const stats = [
    {
      title: "Shop Free",
      value: "₦50,000",
      change: "12% increase from last month",
      avatar: "/Framee1.png", // Public folder path
    },
    {
      title: "Trading Fee",
      value: "₦50,000",
      change: "10% decrease from last month",
      avatar: "/Framee2.png", // Public folder path
    },
    {
      title: "Timer",
      value: "20 10 54",
      change: "Days Hours Mins",
      avatar: "/Framee3.png", // Public folder path
    },
    {
      title: "Cart",
      value: "₦50,000",
      change: "Items in your Cart",
      avatar: "/Framee4.png", // Public folder path
    },
  ];


  return (
    <div className="flex">

      {/* Main content */}
      <main className="flex-1 overflow-auto ml">
        <div className="lg:pl-72">

          <section className="py-12 px-4 sm:px-10 bg-lime-100">
            {/* Title and Dropdown */}
            <div className="flex justify-between items-center max-w-6xl mx-auto mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Overview</h1>
              <div className="relative">
                <select
                  className="block w-36 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                >
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                  <option>Last Year</option>
                </select>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg hover:bg-green-300 rounded-lg p-4 flex flex-col space-y-2"
                >
                  <div className="flex items-center">
                    <Image
                      src={stat.avatar}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full border border-gray-200"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h1 className="text-sm font-bold text-gray-500">{stat.title}</h1>
                  <p className="text-2xl font-extrabold text-black">{stat.value}</p>
                  <p className="text-sm font-semibold w-[200px] text-black">
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-start gap-6 mt-8">
              <button className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
                Deposit
              </button>
              <button className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
                Withdraw Funds
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Centered;
