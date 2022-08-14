import axios, { CancelToken } from 'axios';
import { useEffect } from 'react';

export const useAbortedEffect = (
  effect: (signal: AbortSignal) => Function | void,
  dependencies: Array<any>
) => {
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const cleanupEffect = effect(signal);

    return () => {
      if (cleanupEffect) {
        cleanupEffect();
      }
      abortController.abort();
    };
  }, [...dependencies]);
};
