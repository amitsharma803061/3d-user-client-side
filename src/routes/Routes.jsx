import { createBrowserRouter } from "react-router";
import Mainlayouts from "../MainLayouts/Mainlayouts";
import Home from "../components/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutsUs from "../pages/AboutsUs/AboutsUs";
import Pricing from "../pages/Pricing/Pricing";
import BeRider from "../pages/BeRider/BeRider";
import Services from "../pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/coverage",
        Component: Coverage,
      },
      {
        path: "/abouts-us",
        Component: AboutsUs,
      },
      {
        path: "/pricing",
        Component: Pricing,
      },
      {
        path: "/be-rider",
        Component: BeRider,
      },
    ],
  },
]);

console.log(router);

export default router;
