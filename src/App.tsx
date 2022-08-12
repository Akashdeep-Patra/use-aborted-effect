import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import First from "./pages/First";
import Seccond from "./pages/Seccond";
import Third from "./pages/Third";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/first" element={<First />} />
          <Route path="/seccond" element={<Seccond />} />
          <Route path="/third" element={<Third />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
