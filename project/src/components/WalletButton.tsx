import React from 'react';
import { useWallet } from '../hooks/useWallet';

const WalletButton: React.FC = () => {
  const { account, connect, withdraw } = useWallet();

  return (
    <div className="flex items-center space-x-2">
      {account ? (
        <>
          <span className="text-sm text-gray-600">
            {account.slice(0, 6)}...{account.slice(-4)}
          </span>
          <button
            onClick={withdraw}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
          >
            Withdraw
          </button>
        </>
      ) : (
        <button
          onClick={connect}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletButton;