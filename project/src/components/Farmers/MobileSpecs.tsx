import React from 'react';
import { MobileSpecifications } from '../../types/mobile';
import SpecSection from './SpecSection';

interface MobileSpecsProps {
  specs: MobileSpecifications;
}

const MobileSpecs: React.FC<MobileSpecsProps> = ({ specs }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Redmi A3 Specifications</h2>
      
      <div className="space-y-6">
        <SpecSection title="Performance" specs={specs.performance} />
        <SpecSection title="Display" specs={specs.display} />
        <SpecSection title="Camera" specs={specs.camera} />
        <SpecSection title="Battery" specs={specs.battery} />
        <SpecSection title="Storage" specs={specs.storage} />
        <SpecSection title="Other Features" specs={specs.otherFeatures} />
      </div>
    </div>
  );
};

export default MobileSpecs;