import React from 'react';
import { SpecItem } from '../../types/mobile';

interface SpecSectionProps {
  title: string;
  specs: SpecItem[];
}

const SpecSection: React.FC<SpecSectionProps> = ({ title, specs }) => {
  return (
    <div className="border-b border-gray-700 pb-4">
      <h3 className="text-green-500 text-lg font-medium mb-3">{title}</h3>
      <div className="grid grid-cols-1 gap-2">
        {specs.map((spec, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-400">{spec.label}</span>
            <span className="text-white">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecSection;