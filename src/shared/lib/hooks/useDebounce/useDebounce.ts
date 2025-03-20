import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timerRef = useRef() as MutableRefObject<any>;

  const debauncedCallback = useCallback(
    (...args: any[]) => {
      if (timerRef) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay],
  );

  return debauncedCallback;
}
