import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const MainLayout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="wrapper-body">
        <Outlet />
      </div>
      <div className="wrapper-body">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;