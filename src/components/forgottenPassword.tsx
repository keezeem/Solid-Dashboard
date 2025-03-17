import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSendLink = (e) => {
    e.preventDefault();

    if (email) {
      // Simulate sending a reset link
      console.log(`Reset link sent to ${email}`);
      setMessage('A reset link has been sent to your email address.');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  const handleBackToLogin = () => {
    navigate('/login'); // Navigate to the LogIn page
  };

  return (
    <div className="isolate bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Forgot Password
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Enter your email address, and we’ll send you a link to reset your password.
        </p>
      </div>
      <form
        onSubmit={handleSendLink} // Handle form submission
        className="mx-auto mt-8 max-w-xl sm:mt-12 bg-white p-8 shadow-md rounded-lg"
      >
        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
              placeholder="Enter your email address"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
            />
          </div>
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="block w-full rounded-md bg-green-600 px-4 py-2 text-white shadow-sm hover:bg-green-500 focus:ring-2 focus:ring-green-600"
          >
            Send Reset Link
          </button>
        </div>
      </form>
      {message && (
        <p className="mt-4 text-center text-sm text-green-600">{message}</p>
      )}
      <div className="mt-6 text-center">
        <button
          onClick={handleBackToLogin} // Navigate back to login
          className="text-green-600 hover:underline"
        >
          Back to Log In
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
