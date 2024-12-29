export interface Log {
  timestamp: Date;
  message: string;
  type: 'info' | 'error' | 'warning';
}