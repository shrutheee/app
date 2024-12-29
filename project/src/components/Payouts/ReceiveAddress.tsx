import React from 'react';

const ReceiveAddress: React.FC = () => {
  const address = 'xch152lrx8tskcq4utzw6w465yemk6f9lnlytxjf3v5zrnqc47757dqy6tt6e';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg">Receive Address</h2>
        <span className="text-gray-400 text-lg">ⓘ</span>
      </div>
      
      <div className="flex justify-between items-center bg-gray-700 p-3 rounded-md">
        <span className="text-gray-300 text-sm truncate mr-2">{address}</span>
        <button
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-white"
        >
          📋
        </button>
      </div>
      
      <button className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors float-right mt-4">
        NEW ADDRESS
      </button>
    </div>
  );
}

export default ReceiveAddress;