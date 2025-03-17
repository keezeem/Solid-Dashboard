'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<{ firstName: string; lastName: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setMenuOpen(false);
    router.push("/");
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4 relative">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Go to homepage">
            <Image src="/logo.png" alt="Company Logo" width={150} height={50} className="w-32 sm:w-40" priority />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-black focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Menu */}
        <div className={`lg:flex ${menuOpen ? "flex bg-transparent backdrop-blur-md" : "hidden"} flex-col lg:flex-row items-center absolute lg:relative top-full left-0 lg:top-auto lg:left-auto w-full lg:w-auto shadow-lg lg:shadow-none p-4 lg:p-0 z-50 transition-all duration-300`}>
          {/* Navigation Links */}
          {[
            { name: "HOME", href: "/" },
            { name: "ABOUT US", href: "/" },
            { name: "OUR PACKAGES", href: "/" },
            { name: "HOW IT WORKS", href: "/" },
            { name: "CONTACT", href: "/" },
          ].map((item) => (
            <Link key={item.name} href={item.href} className="block text-lg font-medium text-black hover:text-green-500 transition-colors mb-4 lg:mb-0 lg:mx-2">
              {item.name}
            </Link>
          ))}

          {/* Mobile: Authentication Buttons Below Menu */}
          {menuOpen && (
            <div className="block lg:hidden mt-4 w-full text-center border-t border-gray-300 pt-4">
              {!user ? (
                <>
                  <button onClick={() => { router.push("/login"); setMenuOpen(false); }} className="block w-full py-2 text-black font-medium hover:bg-gray-100">
                    Log in
                  </button>
                  <button onClick={() => { router.push("/register"); setMenuOpen(false); }} className="block w-full py-2 text-black font-medium hover:bg-gray-100">
                    Register
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => { router.push("/dashboard/centered"); setMenuOpen(false); }} className="block w-full py-2 text-black font-medium hover:bg-gray-100">
                    Go to Dashboard
                  </button>
                  <button onClick={handleLogout} className="block w-full py-2 text-red-600 font-medium hover:bg-gray-100">
                    Sign Out
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Desktop: User Authentication / Dropdown */}
        <div className="hidden lg:flex items-center gap-4">
          {!user ? (
            <>
              <button onClick={() => router.push("/login")} className="py-2 px-4 bg-lime-400 text-black font-semibold rounded-full shadow hover:shadow-md transition">
                Log in
              </button>
              <button onClick={() => router.push("/register")} className="py-2 px-4 bg-lime-500 text-white font-semibold rounded-full shadow hover:bg-gray-100 transition">
                Register
              </button>
            </>
          ) : (
            <div className="relative">
              <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center space-x-2">
                <Image src="/avater1.png" alt="User Avatar" width={40} height={40} className="rounded-full border cursor-pointer" />
                <span>{user.firstName}</span>
              </button>

              {/* Desktop Dropdown */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <button onClick={() => router.push("/dashboard/centered")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Go to Dashboard
                  </button>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
