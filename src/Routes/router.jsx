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
import MyAccount from "../Pages/Authentication/MyAccount/MyAccount";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivetRout from "./PrivetRout";
import UserDashboard from "../Pages/Dashboard/UserDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <h2>Error page here</h2>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/aboutus", element: <AboutUs></AboutUs> },
      { path: "/sucess", element: <Sucess></Sucess> },
      { path: "/freelancing", element: <Freelancing></Freelancing> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/browse", element: <BrowseCourses></BrowseCourses> },
      { path: "/myaccount", element: <MyAccount></MyAccount> },
    ]
  },
  {
    path: "dashboard",
    element: <PrivetRout><Dashboard></Dashboard></PrivetRout>,
    children: [
      {path: "userdashboard", element: <UserDashboard></UserDashboard>},
      
    ]


  }
]);

export default router;