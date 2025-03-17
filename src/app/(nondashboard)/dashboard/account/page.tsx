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
    <div className="flex flex-col items-center px-4 md:px-6 lg:px-10 w-full">
      {/* Main content */}
      <main className="flex-1 overflow-auto ml max-w-6xl">
        <div className="p-6 w-full">
          <h1 className="text-xl font-bold text-left">Withdraw</h1>

          {/* Balance and Actions Section */}
          <div className="flex flex-wrap md:flex-nowrap items-center mt-10 gap-6 w-full">
            <div className="bg-green-800 text-white h-44 p-6 rounded-2xl text-center flex-1 min-w-[250px]">
              <p className="text-sm">Total Balance</p>
              <p className="text-3xl font-bold">57,000.00</p>
            </div>

            <div className="flex flex-col w-full md:w-[300px] gap-4">
              <button className="bg-green-800 text-white py-3 h-20 rounded-2xl w-full">Withdraw</button>
              <button className="bg-green-800 text-white py-3 h-20 rounded-2xl w-full">Deposit</button>
            </div>
          </div>

          {/* Amount Input */}
          <div className="w-full max-w-md mt-6">
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
          <div className="w-full max-w-md mt-6">
            <h2 className="text-sm font-semibold mb-3">Withdraw Method</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {methods.map((method) => (
                <button
                  key={method.id}
                  className={`border p-4 rounded flex flex-col items-center w-full transition-all ${selectedMethod === method.id ? 'border-green-700' : 'border-gray-300'} ${method.available ? 'hover:border-green-500' : 'opacity-50 cursor-not-allowed'}`}
                  onClick={() => method.available && setSelectedMethod(method.id)}
                  disabled={!method.available}
                >
                  <div className="text-2xl mb-2">{method.icon}</div>
                  <div className="font-semibold text-sm">{method.name}</div>
                  <div className="text-xs text-gray-500">{method.description}</div>
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
