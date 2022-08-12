import axios from "axios";
import useAbortedEffect from "../hooks/useAbortedEffect";

const Third = () => {
  useAbortedEffect((_signal, cancelToken) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", { cancelToken })
      .then((data) => {
        console.log("Third API call");
      })
      .catch((e: any) => {
        if (e.name === "CanceledError") {
          console.log("Third API aborted");
        }
      });
  }, []);
  return <div>Third Page</div>;
};

export default Third;
