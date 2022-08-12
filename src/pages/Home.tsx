import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home Page
      <div className="column">
        <button onClick={() => navigate("/first")}>First</button>
        <button onClick={() => navigate("/seccond")}>Seccond</button>
        <button onClick={() => navigate("/third")}>Third</button>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
