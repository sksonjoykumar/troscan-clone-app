'use client';
import { createContext } from 'react';

// create context
export const StoreContext = createContext();

export default function GlobalContext({ children }) {
  // context value
  const contextValue = {};
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}
