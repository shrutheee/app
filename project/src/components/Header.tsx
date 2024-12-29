import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <img
        src="/openchia-logo.svg"
        alt="OpenChia"
        className="h-8 w-8"
      />
      <span className="text-xl font-medium text-green-800">OpenChia</span>
    </div>
  );
};

export default Header;