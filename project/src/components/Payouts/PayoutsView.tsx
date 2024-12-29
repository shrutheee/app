import React from 'react';
import WalletBalance from './WalletBalance';
import TransactionForm from './TransactionForm';
import ReceiveAddress from './ReceiveAddress';

const PayoutsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <WalletBalance />
      <TransactionForm />
      <ReceiveAddress />
    </div>
  );
};

export default PayoutsView;