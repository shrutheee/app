import React from 'react';
import { BiChart, BiGroup, BiCoin, BiTime } from 'react-icons/bi';
import StatCard from './StatCard';
import { PoolStats } from '../types/stats';

interface StatsGridProps {
  stats: PoolStats;
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard
        title="Chia Price"
        value={`${stats.chiaPrice} €`}
        titleColor="text-green-600"
        icon={BiCoin}
      />
      <StatCard
        title="Pool Space"
        value={`${stats.poolSpace} PiB`}
        titleColor="text-blue-600"
        icon={BiChart}
      />
      <StatCard
        title="ETW"
        value={stats.etw}
        titleColor="text-indigo-600"
        icon={BiTime}
      />
      <StatCard
        title="Blocks"
        value={stats.blocks}
        titleColor="text-orange-600"
      />
      <StatCard
        title="Farmers"
        value={stats.farmers}
        titleColor="text-pink-600"
        icon={BiGroup}
      />
      <StatCard
        title="Netspace"
        value={`${stats.netspace} EiB`}
        titleColor="text-blue-400"
        icon={BiChart}
      />
      <StatCard
        title="Current Effort"
        value={`${stats.currentEffort}%`}
        titleColor="text-purple-600"
      />
      <StatCard
        title="Effort"
        value={`${stats.effort}%`}
        titleColor="text-red-600"
      />
      <StatCard
        title="Since Last Win"
        value={stats.sinceLastWin}
        titleColor="text-green-600"
      />
      <StatCard
        title="Rewards"
        value={`${stats.rewards} XCH`}
        titleColor="text-blue-400"
      />
    </div>
  );
};

export default StatsGrid;