import axios from 'axios';
import { useAbortedEffect } from '../hooks/useAbortedEffect';

const Third = () => {
  //example with axios
  useAbortedEffect((signal) => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        signal
      })
      .then((data) => {
        console.log('Third API call');
      })
      .catch((e: any) => {
        if (e.name === 'CanceledError') {
          console.log('Third API aborted');
        }
      });
  }, []);

  //example with fetch
  useAbortedEffect((signal) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      signal
    })
      .then((data) => {
        console.log('Third API call');
      })
      .catch((e: any) => {
        if (e.name === 'CanceledError') {
          console.log('Third API aborted');
        }
      });
  }, []);
  return <div>Third Page</div>;
};

export default Third;
