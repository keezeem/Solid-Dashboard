'use client';

import React, { JSX, useState } from 'react';
import { FaUniversity, FaCreditCard } from 'react-icons/fa';

interface Method {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  available: boolean;
}

const Account: React.FC = () => {
  const [amount, setAmount] = useState<number | string>('');
  const [selectedMethod, setSelectedMethod] = useState<string>('bank');

  const methods: Method[] = [
    { id: 'bank', name: 'Bank Transfer', description: 'Within 24 hours', icon: <FaUniversity />, available: true },
    { id: 'mastercard', name: 'TransferMaster Card', description: 'Not Available', icon: <FaCreditCard />, available: false },
    { id: 'credit', name: 'Credit / Debit Card', description: 'Not Available', icon: <FaCreditCard />, available: false },
  ];

  return (
    <div className="lg:pl-72 bg-lime-100">
      {/* Main content */}
      <main className="flex-1 overflow-auto ml max-w-6xl">
        <div className="p-6 w-full">
          <h1 className="text-xl font-bold text-left">Withdraw</h1>

         {/* Balance and Actions Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="bg-green-700 text-white p-6 rounded-xl flex-1">
            <p className="text-sm">Total Balance</p>
            <p className="text-3xl font-bold">57,000.00</p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-48">
            <button className="bg-green-700 text-white py-4 rounded-xl">Withdraw</button>
            <button className="bg-gray-200 text-gray-800 py-4 rounded-xl">Deposit</button>
          </div>
        </div>

          {/* Amount Input */}
          <div className="w-full max-w-md mb-4">
            <label className="block text-sm font-medium mb-2">Amount</label>
            <div className="flex items-center rounded-3xl overflow-hidden p-1 border">
              <input
                type="number"
                value={amount}
                placeholder="30,000"
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 border-none outline-none rounded-xl"
              />
              <span className="bg-white px-4 py-3 rounded-xl border-l">Naira</span>
            </div>
          </div>

           {/* Withdrawal Methods */}
        <div className="bg-white p-6 rounded-xl mb-4">
          <h2 className="text-sm font-semibold mb-4">Withdraw Method</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {methods.map((method) => (
              <button
                key={method.id}
                className={`p-4 border rounded-lg flex flex-col items-center ${
                  selectedMethod === method.id 
                    ? 'border-green-600 bg-green-50' 
                    : 'border-gray-300'
                } ${
                  !method.available && 'opacity-50 cursor-not-allowed'
                }`}
                onClick={() => method.available && setSelectedMethod(method.id)}
                disabled={!method.available}
              >
                <div className="text-2xl mb-2 text-green-600">{method.icon}</div>
                <div className="font-medium">{method.name}</div>
                <div className="text-sm text-gray-500">{method.description}</div>
              </button>
            ))}
          </div>
        </div>

          {/* Continue Button */}
          <button className="bg-green-800 text-white py-3 px-10 w-full md:w-48 rounded-xl mt-6">Continue</button>
        </div>
      </main>
    </div>
  );
};

export default Account;
