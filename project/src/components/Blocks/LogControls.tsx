import React from 'react';

interface LogControlsProps {
  isLogging: boolean;
  onStart: () => void;
  onStop: () => void;
}

const LogControls: React.FC<LogControlsProps> = ({ isLogging, onStart, onStop }) => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
      <h2 className="text-white text-lg">Block Logs</h2>
      <div className="space-x-4">
        {isLogging ? (
          <button
            onClick={onStop}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Stop Logging
          </button>
        ) : (
          <button
            onClick={onStart}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Start Logging
          </button>
        )}
      </div>
    </div>
  );
};

export default LogControls;