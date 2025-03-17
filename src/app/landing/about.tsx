"use client";

import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-10 px-6 sm:px-10 lg:px-16 min-h-screen">
      {/* Header (Centered at the top) */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-center text-green-600">
        WHY YOU SHOULD PARTNER WITH US
      </h1>

      {/* Content Section (Flex container for left-aligned content) */}
      <section className="w-full max-w-[1300px] flex items-start gap-8 sm:gap-16">
        {/* Text Section (Left Side) */}
        <div className="flex-1 text-left">
          <ul className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-black space-y-3">
            <li>1. You own an online store, and become a boss of your own.</li>
            <li>2. You spend less than 10 minutes to execute every trade, it is very easy to operate.</li>
            <li>3. You get foodstuffs every month.</li>
            <li>4. The company helps you sell your products at the end of the trade cycle (30 days).</li>
            <li>5. You make a profit every 30 days from the company.</li>
            <li>6. Partners can have multiple shops and earn profits in all of them. More shops, more profits!</li>
            <li>7. No special skill is required—just a smartphone with internet access.</li>
            <li>8. You can withdraw your trading capital ONLY anytime the trade cycle is completed.</li>
            <li>9. Sponsoring or referring people is OPTIONAL.</li>
            <li>10. You earn more residual income when you refer people up to your 2nd generation... WOW!</li>
            <li>11. There is time freedom.</li>
            <li>12. There is financial stability and the power of leverage.</li>
            <li>13. We help each other succeed.</li>
            <li>14. No age barriers.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
