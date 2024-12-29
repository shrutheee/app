import React, { useState } from 'react';
import Header from './components/Header';
import TabBar from './components/TabBar';
import StatsGrid from './components/StatsGrid';
import PayoutsView from './components/Payouts/PayoutsView';
import BlocksView from './components/Blocks/BlocksView';
import FarmersView from './components/Farmers/FarmersView';
import WalletButton from './components/WalletButton';

const mockStats = {
  chiaPrice: 71.05,
  poolSpace: 30.55,
  etw: '5h 40m',
  blocks: 273,
  farmers: 199,
  netspace: 30.48,
  currentEffort: 54,
  effort: 79,
  sinceLastWin: '3h 2m',
  rewards: 477.75,
  profitability: 0.00031015
};

function App() {
  const [activeTab, setActiveTab] = useState('STATS');
  const tabs = ['STATS', 'FARMERS', 'BLOCKS', 'PAYOUTS'];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Header />
          <WalletButton />
        </div>
        <TabBar
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        {activeTab === 'STATS' && <StatsGrid stats={mockStats} />}
        {activeTab === 'FARMERS' && <FarmersView />}
        {activeTab === 'BLOCKS' && <BlocksView />}
        {activeTab === 'PAYOUTS' && <PayoutsView />}
      </div>
    </div>
  );
}

export default App;