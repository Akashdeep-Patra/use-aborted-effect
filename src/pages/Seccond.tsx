import axios from "axios";
import useAbortedEffect from "../hooks/useAbortedEffect";

const Seccond = () => {
  useAbortedEffect((_signal, cancelToken) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", { cancelToken })
      .then((data) => {
        console.log("Seccond API call");
      })
      .catch((e: any) => {
        if (e.name === "CanceledError") {
          console.log("Seccond API aborted");
        }
      });
  }, []);
  return <div>Seccond Page</div>;
};

export default Seccond;
