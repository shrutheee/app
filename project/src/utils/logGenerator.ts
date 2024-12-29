import { Log } from '../types/logs';

const bucketMessages = [
  'Bucket {n} uniform sort. Ram: {ram}GiB, u sort min: 0.563GiB, qs min: 0.281GiB.',
  'Writing C{n} table',
  'Finished writing C{n} table',
  'Final table pointers:',
  'P{n}: 0x{hash}',
  'C{n}: 0x{hash}',
];

const generateHash = () => Math.random().toString(16).slice(2, 10);

const generateRam = () => (3 + Math.random() * 0.5).toFixed(3);

export const generateMockLog = (): Log => {
  const now = new Date();
  const messageType = Math.floor(Math.random() * bucketMessages.length);
  let message = bucketMessages[messageType]
    .replace('{n}', Math.floor(Math.random() * 128).toString())
    .replace('{ram}', generateRam())
    .replace('{hash}', generateHash());

  return {
    timestamp: now,
    message,
    type: 'info'
  };
};