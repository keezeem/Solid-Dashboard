// app/register/page.tsx
'use client';

import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface SubscriptionPlan {
  name: string;
  price: number;
}

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    agreed: false,
    subscriptionPlan: '',
  });

  const [error, setError] = useState('');
  const [selectedPlanPrice, setSelectedPlanPrice] = useState<number | null>(null);
  const router = useRouter();

  const subscriptionPlans: SubscriptionPlan[] = [
    { name: 'Bronze Store', price: 50000 },
    { name: 'Silver Store', price: 100000 },
    { name: 'Gold Store', price: 300000 },
    { name: 'Platinum Store', price: 600000 },
    { name: 'Diamond Store', price: 1200000 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'subscriptionPlan') {
      const selectedPlan = subscriptionPlans.find(plan => plan.name === value);
      setSelectedPlanPrice(selectedPlan ? selectedPlan.price : null);
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (value: boolean) => {
    setFormData({ ...formData, agreed: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword, phoneNumber, address, agreed, subscriptionPlan } = formData;

    if (!agreed) {
      setError('You must agree to the privacy policy.');
      return;
    }

    if (!firstName || !lastName || !email || !password || !confirmPassword || !phoneNumber || !address || !subscriptionPlan) {
      setError('Please fill all the fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subscriptionPrice: selectedPlanPrice // Include price in submission if needed
        }),
      });

      const data = await res.json();
      if (res.ok) {
        router.push('/login');
      } else {
        setError(data.error || 'Registration failed.');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  const handleGoogleSignUp = () => {
    if (typeof window !== 'undefined' && window.google) {
      window.google.accounts.id.prompt();
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute top-6 left-6">
        <Link href="/">
          <Image src="/logo.png" alt="Your Company" width={100} height={40} priority />
        </Link>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            backgroundImage: 'linear-gradient(to top right, #03611C, #03611C)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sign Up</h2>
        <p className="mt-2 text-lg text-gray-600">Join us today and start exploring all the benefits we have to offer.</p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl sm:mt-12 p-8 rounded-lg">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900">First Name</label>
            <input 
              name="firstName" 
              type="text" 
              value={formData.firstName}
              onChange={handleInputChange} 
              required 
              className="block w-full mt-2 rounded-md px-3.5 py-2 outline-1 outline-gray-300 focus:outline-2 focus:outline-green-600" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900">Last Name</label>
            <input 
              name="lastName" 
              type="text" 
              value={formData.lastName}
              onChange={handleInputChange} 
              required 
              className="block w-full mt-2 rounded-md px-3.5 py-2 outline-1 outline-gray-300 focus:outline-2 focus:outline-green-600" 
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">Email</label>
            <input 
              name="email" 
              type="email" 
              value={formData.email}
              onChange={handleInputChange} 
              required 
              className="block w-full mt-2 rounded-md px-3.5 py-2 outline-1 outline-gray-300 focus:outline-2 focus:outline-green-600" 
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">Password</label>
            <input 
              name="password" 
              type="password" 
              value={formData.password}
              onChange={handleInputChange} 
              required 
              className="block w-full mt-2 rounded-md px-3.5 py-2 outline-1 outline-gray-300 focus:outline-2 focus:outline-green-600" 
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">Confirm Password</label>
            <input 
              name="confirmPassword" 
              type="password" 
              value={formData.confirmPassword}
              onChange={handleInputChange} 
              required 
              className="block w-full mt-2 rounded-md px-3.5 py-2 outline-1 outline-gray-300 focus:outline-2 focus:outline-green-600" 
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">Phone Number</label>
            <input 
              name="phoneNumber" 
              type="text" 
              value={formData.phoneNumber}
              onChange={handleInputChange} 
              required 
              className="block w-full mt-2 rounded-md px-3.5 py-2 outline-1 outline-gray-300 focus:outline-2 focus:outline-green-600" 
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">Address</label>
            <textarea 
              name="address" 
              rows={2} 
              value={formData.address}
              onChange={handleInputChange} 
              required 
              className="block w-full mt-2 rounded-md px-3.5 py-2 outline-1 outline-gray-300 focus:outline-2 focus:outline-green-600"
            ></textarea>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">Subscription</label>
            <select
              name="subscriptionPlan"
              value={formData.subscriptionPlan}
              onChange={handleInputChange}
              required
              className="block w-full mt-2 rounded-md px-3.5 py-2 outline-1 outline-gray-300 focus:outline-2 focus:outline-green-600"
            >
              <option value="">Select subscription level</option>
              {subscriptionPlans.map((plan) => (
                <option key={plan.name} value={plan.name}>
                  {plan.name} - ₦{plan.price.toLocaleString()}
                </option>
              ))}
            </select>
            {selectedPlanPrice && (
              <p className="text-sm text-green-600 mt-2">
                <span className="font-medium">Plan Price:</span> ₦{selectedPlanPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center mt-6">
          <Switch 
            checked={formData.agreed} 
            onChange={handleSwitchChange} 
            className={`${formData.agreed ? 'bg-green-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className={`${formData.agreed ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
          </Switch>
          <span className="ml-3 text-sm text-gray-600">
            By selecting this, you agree to our{' '}
            <Link href="#" className="font-semibold text-green-600 hover:underline">Privacy Policy</Link>.
          </span>
        </div>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        <button 
          type="submit" 
          className="mt-6 block w-full rounded-md bg-green-600 px-4 py-2 text-white shadow-sm hover:bg-green-700 focus:ring-2 focus:ring-green-600"
        >
          Sign Up
        </button>

        <div className="flex flex-col items-center mt-6">
          <button 
            type="button" 
            onClick={handleGoogleSignUp} 
            className="flex items-center justify-center w-full h-12 border border-gray-300 bg-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <Image src="/google.png" alt="Google Logo" width={24} height={24} className="mr-3" />
            <span className="text-sm font-medium text-gray-700">Continue with Google</span>
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account? <Link href="/login" className="text-green-600 hover:underline">Log In</Link>
          </p>
        </div>
      </form>
    </div>
  );
}