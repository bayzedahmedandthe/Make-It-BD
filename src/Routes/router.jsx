import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layoutes/Layout";
import Home from "../Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <h2>Error page here</h2>,
      children: [
        {path: "/", element: <Home></Home>},
        
      ]
    },
  ]);

export default router;