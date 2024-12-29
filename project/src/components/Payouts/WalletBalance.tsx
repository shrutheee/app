import React from 'react';

const WalletBalance: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-gray-400 text-sm">Total Balance</h3>
          <span className="text-gray-400 text-lg">ⓘ</span>
        </div>
        <p className="text-green-500 text-xl">0.0000004 XCH</p>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-gray-400 text-sm">Spendable Balance</h3>
          <span className="text-gray-400 text-lg">ⓘ</span>
        </div>
        <p className="text-white text-xl">0.0000004 XCH</p>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-gray-400 text-sm">INR Equivalant</h3>
          <span className="text-gray-400 text-lg">ⓘ</span>
        </div>
        <p className="text-white text-xl">0.062288057604 INR</p>
      </div>
    </div>
  );
}

export default WalletBalance;