import { useEffect } from 'react';
import useTimer from '../hooks/useTimer';

const Fourth = () => {
  //example with axios
  const { executeTimeout } = useTimer();

  useEffect(() => {
    executeTimeout(() => {
      console.log('yooooo');
    }, 2000);
  }, [executeTimeout]);

  return <div>Fourth Page</div>;
};

export default Fourth;
