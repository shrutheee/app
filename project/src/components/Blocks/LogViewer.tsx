import React, { useRef, useEffect } from 'react';
import { Log } from '../../types/logs';

interface LogViewerProps {
  logs: Log[];
}

const LogViewer: React.FC<LogViewerProps> = ({ logs }) => {
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div 
        ref={logContainerRef}
        className="bg-[#1e1e1e] text-gray-300 font-mono text-sm p-4 rounded h-[600px] overflow-y-auto"
      >
        {logs.map((log, index) => (
          <div key={index} className="whitespace-pre-wrap mb-1">
            {log.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogViewer;