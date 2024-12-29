import React from 'react';
import MobileSpecs from './MobileSpecs';
import { mobileSpecsData } from '../../data/mobileSpecs';

const FarmersView: React.FC = () => {
  return (
    <div className="space-y-4">
      <MobileSpecs specs={mobileSpecsData} />
    </div>
  );
};

export default FarmersView;