import React from 'react';
import LogViewer from './LogViewer';
import LogControls from './LogControls';
import { useBlockLogs } from '../../hooks/useBlockLogs';

const BlocksView: React.FC = () => {
  const { logs, isLogging, startLogging, stopLogging } = useBlockLogs();

  return (
    <div className="space-y-4">
      <LogControls 
        isLogging={isLogging}
        onStart={startLogging}
        onStop={stopLogging}
      />
      <LogViewer logs={logs} />
    </div>
  );
};

export default BlocksView;