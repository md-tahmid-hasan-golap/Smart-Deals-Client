import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home";
import AllProducts from "../Components/AllProducts";
import MyProducts from "../Components/MyProducts";
import MyBits from "../Components/MyBits";
import CreatProducts from "../Components/CreatProducts";
import Login from "../Components/Login";
import Register from "../Components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allProducts",
        Component: AllProducts,
      },
      {
        path: "/myProducts",
        Component: MyProducts,
      },
      {
        path: "/mybits",
        Component: MyBits,
      },
      {
        path: "/creatProducts",
        Component: CreatProducts,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
