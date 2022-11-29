import {useEffect, useState} from 'react';

export const useDebounceNew = (value: string, delay = 500): string => {
  const [debounced, setDebounced] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value]);

  return debounced;
};