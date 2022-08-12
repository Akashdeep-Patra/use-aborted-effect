import './styles.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import First from './pages/First';
import Second from './pages/Seccond';
import Third from './pages/Third';
import { BrowserRouter } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
