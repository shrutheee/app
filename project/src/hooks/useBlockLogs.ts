import { useState, useEffect, useCallback } from 'react';
import { Log } from '../types/logs';
import { generateMockLog } from '../utils/logGenerator';

export const useBlockLogs = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [isLogging, setIsLogging] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const addLog = useCallback((log: Log) => {
    setLogs(prevLogs => [...prevLogs, log]);
  }, []);

  const startLogging = useCallback(() => {
    setIsLogging(true);
    const id = window.setInterval(() => {
      addLog(generateMockLog());
    }, 1000);
    setIntervalId(id);
  }, [addLog]);

  const stopLogging = useCallback(() => {
    setIsLogging(false);
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [intervalId]);

  useEffect(() => {
    return () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return {
    logs,
    isLogging,
    startLogging,
    stopLogging
  };
};

export default useBlockLogs;