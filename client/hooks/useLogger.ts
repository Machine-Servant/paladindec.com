import { useMemo } from 'react';
import { Logger } from '../utils/logger';

export const useLogger = (name: string) => {
  const logger = useMemo(() => new Logger(name), [name]);
  return logger;
};
