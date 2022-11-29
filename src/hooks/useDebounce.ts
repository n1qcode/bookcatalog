// NOTE: this is old version

import {useRef} from 'react';

export const useDebounce = (fn, ms) => {
  const timer = useRef<number | null>(null);

  return (...args) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      fn(...args);
      timer.current = null;
    }, ms);
  };
};

export default useDebounce;
