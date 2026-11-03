import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Mainlayouts = () => {
  return (
    <div className="w-full mx-auto bg-gray-200">
      <div className="max-w-11/12 mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Mainlayouts;
