import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layoutes/Layout";
import Home from "../Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Sucess from "../Pages/Sucess/Sucess";
import Freelancing from "../Pages/Freelancing/Freelancing";
import Contact from "../Pages/Contact/Contact";
import BrowseCourses from "../Pages/BrowseCourses/BrowseCourses";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Registation/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <h2>Error page here</h2>,
      children: [
        {path: "/", element: <Home></Home>},
        {path: "/aboutus", element: <AboutUs></AboutUs>},
        {path: "/sucess", element: <Sucess></Sucess>},
        {path: "/freelancing", element: <Freelancing></Freelancing>},
        {path: "/contact", element: <Contact></Contact>},
        {path: "/browse", element: <BrowseCourses></BrowseCourses>},
        {path: "/login", element: <Login></Login>},
        {path: "/register", element: <Register></Register>}
      ]
    },
  ]);

export default router;