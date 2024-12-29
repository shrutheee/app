import React, { useState } from 'react';

const TransactionForm: React.FC = () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [fee, setFee] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle transaction submission
    console.log({ address, amount, fee });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg">Create Transaction</h2>
        <span className="text-gray-400 text-lg">ⓘ</span>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Address / Puzzle hash"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full bg-gray-700 text-white p-3 rounded-md"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-md"
            />
            <span className="absolute right-3 top-3 text-gray-400">XCH</span>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Fee"
              value={fee}
              onChange={(e) => setFee(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-md"
            />
            <span className="absolute right-3 top-3 text-gray-400">XCH</span>
          </div>
        </div>
        
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors float-right"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;