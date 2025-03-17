'use client';

import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-2">Oops! The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg text-lg shadow hover:bg-green-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
