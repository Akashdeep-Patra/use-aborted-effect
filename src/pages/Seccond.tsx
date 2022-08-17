import axios from 'axios';
import useAbortedEffect from '../hooks/useAbortedEffect';

const Second = () => {
  //example with axios
  useAbortedEffect((signal) => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        signal
      })
      .then((data) => {
        console.log('Second API call');
      })
      .catch((e: any) => {
        if (e.name === 'CanceledError') {
          console.log('Second API aborted');
        }
      });
  }, []);

  //example with fetch
  useAbortedEffect((signal) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      signal
    })
      .then((data) => {
        console.log('Second API call');
      })
      .catch((e: any) => {
        if (e.name === 'CanceledError') {
          console.log('Second API aborted');
        }
      });
  }, []);

  return <div>Second Page</div>;
};

export default Second;
