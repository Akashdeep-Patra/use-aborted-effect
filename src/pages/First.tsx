import axios from 'axios';
import { useState } from 'react';
import useAbortedEffect from '../hooks/useAbortedEffect';

const First = () => {
  const [count, setCount] = useState(0);

  //example with axios
  useAbortedEffect(
    (signal) => {
      axios
        .get('https://jsonplaceholder.typicode.com/posts', {
          signal
        })
        .then((data) => {
          console.log('First API call');
        })
        .catch((e: any) => {
          if (e.name === 'CanceledError') {
            console.log('First API aborted');
          }
        });
    },
    [count]
  );

  //example with fetch
  useAbortedEffect(
    (signal) => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        signal
      })
        .then((data) => {
          console.log('First API call');
        })
        .catch((e: any) => {
          if (e.name === 'CanceledError') {
            console.log('First API aborted');
          }
        });
    },
    [count]
  );

  return (
    <div>
      First Page
      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginTop: '20px'
        }}>
        <button onClick={() => setCount(count + 1)}>Click </button>
        <span>Count : {count}</span>
      </div>
    </div>
  );
};

export default First;
