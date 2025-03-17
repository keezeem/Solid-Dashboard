"use client";

import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";
import { MdCheck, MdArrowRight } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#004225] text-white py-12">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 pb-8 border-b border-white/20">
        <div className="flex items-center space-x-4">
          <Image src="/avater2.png" alt="Support" width={40} height={40} />
          <h3 className="text-xl font-semibold">Need Any Support For Tour And Visa?</h3>
        </div>
        <div className="flex items-center space-x-4 mt-6 md:mt-0">
          <Image src="/avater1.png" alt="Trading" width={40} height={40} />
          <h3 className="text-xl font-semibold">Are You Ready To Start Trading?</h3>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        {/* Branding & Socials */}
        <div>
          <Image src="/logo.png" alt="Logo" width={150} height={40} />
          <p className="mt-4 text-sm text-gray-300">
            Corporate business typically refers to large-scale enterprises or organizations.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebook size={20} className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram size={20} className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedin size={20} className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="mt-4 space-y-2">
            {["Mistakes To Avoid", "Your Startup", "Knew About Fonts", "Knew About Fonts"].map(
              (service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <MdCheck className="text-green-400" /> <span>{service}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="mt-4 space-y-2">
            {["Latest News", "Careers", "General Inquiries", "Case Studies"].map((link, index) => (
              <li key={index} className="flex items-center space-x-2">
                <MdArrowRight /> <span>{link}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
          <p className="mt-2 text-sm text-gray-300">
            Corporate business typically refers to large-scale enterprises.
          </p>
          <div className="flex items-center mt-4 bg-black p-2 rounded-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent outline-none flex-1 px-2 text-white placeholder-gray-400"
            />
            <button className="bg-green-500 p-2 rounded-full">
              <IoPaperPlane size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-300 mt-8 border-t border-white/20 pt-4">
        <p>© Yoursitename 2024 | All Rights Reserved</p>
        <div className="mt-2 flex justify-center space-x-6">
          {["Terms & Condition", "Privacy Policy", "Contact Us"].map((text, index) => (
            <a key={index} href="#" className="hover:underline">
              {text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
