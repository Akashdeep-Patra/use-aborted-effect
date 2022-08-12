import axios from "axios";
import { useState } from "react";
import useAbortedEffect from "../hooks/useAbortedEffect";

const First = () => {
  const [count, setCount] = useState(0);
  useAbortedEffect(
    (_signal, cancelToken) => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          cancelToken
        })
        .then((data) => {
          console.log("First API call");
        })
        .catch((e: any) => {
          if (e.name === "CanceledError") {
            console.log("First API aborted");
          }
        });
    },
    [count]
  );

  return (
    <div>
      First Page
      <button onClick={() => setCount(count + 1)}>Click </button>
      <span>Count : {count}</span>
    </div>
  );
};

export default First;
