import { ISessionContext } from '@interfaces/session-data';
import { createContext, useContext } from 'react';

export const SessionContext = createContext<ISessionContext | undefined>(
  undefined,
);

export function useSessionContext(): ISessionContext {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSessionContext must be used a SessionProvider');
  }
  return context;
}
