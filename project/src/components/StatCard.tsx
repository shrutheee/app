import React from 'react';
import { IconType } from 'react-icons';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: IconType;
  titleColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, titleColor = 'text-gray-600' }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h3 className={`text-sm ${titleColor} mb-1`}>{title}</h3>
          <p className="text-xl font-semibold text-gray-800">{value}</p>
        </div>
        {Icon && (
          <div className="text-gray-400">
            <Icon size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;