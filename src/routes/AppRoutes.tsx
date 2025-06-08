import React from "react";
import { useRoutes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);

  return routes;
};

export default AppRoutes;
