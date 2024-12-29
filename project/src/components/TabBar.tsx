import React from 'react';

interface TabBarProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-6 border-b border-gray-200 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-2 px-1 ${
            activeTab === tab
              ? 'border-b-2 border-green-700 text-green-700 font-medium'
              : 'text-gray-500'
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabBar;