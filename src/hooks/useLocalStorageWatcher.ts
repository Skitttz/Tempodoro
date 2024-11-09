// utils/useLocalStorageWatcher.ts
import { useState, useEffect } from 'react';

export function useLocalStorageWatcher(key: string) {
  const [value, setValue] = useState<string | null>(localStorage.getItem(key));

  useEffect(() => {
    const handleStorageChange = () => {
      setValue(localStorage.getItem(key));
    };

    window.addEventListener('storage', handleStorageChange);

    const interval = setInterval(() => {
      const newValue = localStorage.getItem(key);
      if (newValue !== value) {
        setValue(newValue);
      }
    }, 500); 

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [key, value]);

  return value;
}
