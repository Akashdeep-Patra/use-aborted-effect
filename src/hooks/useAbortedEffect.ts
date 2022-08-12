import axios, { CancelToken } from 'axios';
import { useEffect } from 'react';

const useAbortedEffect = (
  effect: (
    signal: AbortSignal,
    axiosCancelToke: CancelToken
  ) => Function | void,
  dependencies: Array<any>
) => {
  useEffect(() => {
    const axiosCancelToken = axios.CancelToken.source();
    const abortController = new AbortController();
    const signal = abortController.signal;
    const cleanupEffect = effect(signal, axiosCancelToken.token);

    return () => {
      if (cleanupEffect) {
        cleanupEffect();
      }
      abortController.abort();
      axiosCancelToken.cancel();
    };
  }, [...dependencies]);
};

export default useAbortedEffect;
