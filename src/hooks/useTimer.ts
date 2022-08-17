import { useCallback, useEffect, useRef } from 'react';

const useTimer = () => {
  const timers = useRef<Array<NodeJS.Timer>>([]);

  const executeTimeout = useCallback((callback: Function, delay = 300) => {
    const timerId = setTimeout(() => callback(), delay);
    timers.current.push(timerId);
  }, []);

  const executeInterval = useCallback((callback: Function, interval = 1000) => {
    const timerId = setInterval(() => callback(), interval);
    timers.current.push(timerId);
  }, []);

  //clear timers once the component is un mounted
  useEffect(() => {
    return () => {
      // notice that we are just using the clearTimeout function
      // because internally all timers have same id pool so it won't matter
      // if we use cleartimeout or clearInterval

      console.log('clearing timeout');
      timers.current.forEach((timerId) => clearTimeout(timerId));
    };
  }, []);

  return {
    executeInterval,
    executeTimeout
  };
};

export default useTimer;
