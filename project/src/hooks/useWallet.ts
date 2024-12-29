import { useState, useCallback } from 'react';
import { ethers } from 'ethers';

export const useWallet = () => {
  const [account, setAccount] = useState<string | null>(null);

  const connect = useCallback(async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  }, []);

  const withdraw = useCallback(async () => {
    if (!window.ethereum || !account) return;

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      
      // Add your withdrawal logic here
      // This is just a placeholder - you'll need to implement the actual withdrawal
      console.log('Withdrawal initiated from:', account);
      
    } catch (error) {
      console.error('Error during withdrawal:', error);
    }
  }, [account]);

  return { account, connect, withdraw };
};

export default useWallet;