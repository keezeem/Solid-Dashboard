"use client";

import Image from "next/image";
import React from "react";

interface PricingPlan {
  name: string;
  bgColor: string;
  price1: string;
  price2: string;
}

// Define the pricing plans
const pricingPlans: PricingPlan[] = [
  { name: "Bronze", bgColor: "bg-[#c87f45]", price1: "₦50,000", price2: "₦50,000" },
  { name: "Silver", bgColor: "bg-gray-300", price1: "₦100,000", price2: "₦100,000" },
  { name: "Gold", bgColor: "bg-yellow-400", price1: "₦260,000", price2: "₦300,000" },
  { name: "Platinum", bgColor: "bg-gray-500", price1: "₦520,000", price2: "₦600,000" },
  { name: "Diamond", bgColor: "bg-blue-400", price1: "₦1,040,000", price2: "₦1,200,000" },
];

const Pricing: React.FC = () => {
  return (
    <div
      className="w-full max-w-[1300px] min-h-[500px] bg-cover bg-center bg-no-repeat rounded-3xl shadow-lg flex justify-center items-center px-4 py-10 mx-auto"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/background.png" // Background image from public folder
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="p-6 sm:p-8 w-full max-w-6xl text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
          ONLINE SOLiD MART SIZES AND PRICES
        </h2>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md p-4 sm:p-6 bg-white text-black text-center transition-transform duration-300 hover:scale-105"
            >
              <div className={`${plan.bgColor} text-white py-2 sm:py-3 text-sm sm:text-lg font-bold rounded-t-lg`}>
                {plan.name} Store
              </div>
              <div className="text-base sm:text-xl font-bold mt-3">{plan.price1}</div>
              <div className="text-base sm:text-xl font-bold">{plan.price2}</div>
              <p className="text-xs sm:text-sm mt-2">Life-Time Payment</p>
              <p className="text-xs sm:text-sm">Trading Fee</p>
              <button className="bg-blue-500 text-white text-xs sm:text-sm mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-blue-600 transition">
                Register Now
              </button>
              <ul className="text-xs sm:text-sm text-left mt-3 sm:mt-4 space-y-1">
                <li>✅ Life Time Store</li>
                <li>✅ Monthly Food</li>
                <li>✅ Monthly Cash-backs</li>
                <li>✅ Referral</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
