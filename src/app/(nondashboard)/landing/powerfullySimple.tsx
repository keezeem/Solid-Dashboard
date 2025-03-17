"use client";

import React from "react";
import Image from "next/image";

const PowerfullySimple: React.FC = () => {
  return (
    <div
      className="w-full max-w-[1300px] h-auto sm:h-[500px] bg-cover bg-center bg-no-repeat rounded-3xl shadow-lg flex flex-col sm:flex-row overflow-hidden mx-auto relative"
    >
      {/* Background Image */}
      <Image
        src="/rectangle.png" // Public folder path
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 rounded-3xl"
      />

      {/* Content Section */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 py-8 sm:py-0 flex flex-col justify-center text-white bg-black/50 rounded-3xl">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center sm:text-left">
          WHY YOU SHOULD PARTNER WITH US
        </h1>

        {/* Description Section */}
        <ul className="text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
          <li>1. SOLiD Mart is not an investment platform.</li>
          <li>2. SOLiD Mart is not a bank.</li>
          <li>3. SOLiD Mart is not a money laundry company.</li>
          <li>4. SOLiD Mart is an e-commerce trading company.</li>
          <li>5. SOLiD Mart runs a buying and selling concept.</li>
          <li>
            6. You must buy from the company (physical products) before the company helps you to sell your physical products by your instruction.
          </li>
          <li>7. SOLiD Mart sources and supplies all the products traded on the e-commerce platform locally.</li>
          <li>
            8. SOLiD Mart does not trade for anyone. You must buy and instruct us to sell on your behalf by initiating a &quot;HELP ME SELL&quot; button before the company can sell for you.
          </li>
          <li>
            9. In SOLiD Mart, you will be charged an **annual maintenance fee of 5%** for your store. This charge will be deducted from your wallet at the end of the first quarter of activation and operation of your store and business.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PowerfullySimple;
