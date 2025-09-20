import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Profile from "../features/profile/Profile";
const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));
const Auth = lazy(() => import("../features/auth/pages/Auth"));
const Register = lazy(() => import("../features/auth/pages/Register"));
const Otp = lazy(() => import("../features/auth/pages/Otp"));
const Login = lazy(() => import("../features/auth/pages/Login"));
const NotFound = lazy(() => import("../features/not-found/NotFound"));
const Product = lazy(() => import("../features/product/pages/Product"));
const Category = lazy(() => import("../features/product/pages/Category"));
const ProductMain = lazy(() => import("../features/product/components/productmain/ProductMain"));
const User = lazy(() => import("../features/user/pages/User"));
const Statistic = lazy(() => import("../features/statistics/pages/Statistics"));

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <Statistic />,
            },
            {
              path: "/product-main",
              element: <ProductMain/>,
              children: [
                {
                  index: true,
                  element: <Product />,
                },
                {
                  path: "categories",
                  element: <Category/>,
                },
              ],
            },
            {
              path: "/profile",
              element: <Profile/>
            },
            {
              path: "/user",
              element: <User />,
            },
          ],
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/otp", element: <Otp /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export default AppRoutes;
