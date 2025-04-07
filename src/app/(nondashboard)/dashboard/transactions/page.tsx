'use client';

import React from 'react';

interface Transaction {
  account: string;
  amount: string;
  date: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

const TransactionHistory: React.FC = () => {
  const transactions: Transaction[] = [
    {
      account: 'John Doe',
      amount: '₦1,200',
      date: '2023-12-08',
      status: 'Completed',
    },
    {
      account: 'Jane Smith',
      amount: '₦550',
      date: '2023-12-07',
      status: 'Pending',
    },
    {
      account: 'Mike Johnson',
      amount: '₦3,400',
      date: '2023-12-06',
      status: 'Failed',
    },
    {
      account: 'Sara Lee',
      amount: '₦750',
      date: '2023-12-05',
      status: 'Completed',
    },
  ];

  return (
    <div className="lg:pl-72">
      <section className="py-12 px-4 sm:px-10 bg-lime-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Transaction History</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
              <tr>
                <th className="text-left py-3 px-6">Account</th>
                <th className="text-left py-3 px-6">Amount</th>
                <th className="text-left py-3 px-6">Date</th>
                <th className="text-left py-3 px-6">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} text-gray-700`}
                >
                  <td className="py-3 px-6">{transaction.account}</td>
                  <td className="py-3 px-6">{transaction.amount}</td>
                  <td className="py-3 px-6">{transaction.date}</td>
                  <td className="py-3 px-6">
                    <span
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        transaction.status === 'Completed'
                          ? 'bg-green-100 text-green-600'
                          : transaction.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default TransactionHistory;