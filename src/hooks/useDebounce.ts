import { useCallback, useEffect, useRef } from 'react';

function debounceImpl(cb: Function, delay: number) {
  let isDebounced: null | NodeJS.Timeout = null;
  return (...args: any) => {
    if (isDebounced) {
      clearTimeout(isDebounced);
    }
    isDebounced = setTimeout(() => cb(...args), delay);
  };
}

export function useDebounce(cb: Function, delay: number) {
  const cbRef = useRef(cb);
  useEffect(() => {
    cbRef.current = cb;
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    debounceImpl((...args: any) => cbRef.current(...args), delay),
    [delay]
  );
}
