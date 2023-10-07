
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoutes";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: '/login',
          element:<Login></Login>

        },
        {
          path: '/signup',
          element:<SignUp></SignUp>

        },
        {
          path: '/menu',
          element:<Menu></Menu>
        },
        {
          path: 'order/:category',
          element:<Order></Order>
        },
        {
          path:'secret',
          element:<PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
        
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path: 'mycart',
          element:<MyCart></MyCart>
        },
        {
          path: 'alluser',
          element:<AllUser></AllUser>
        },
        {
          path: 'additem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>

        },
        {
          path:'manageitem',
          element:<ManageItem></ManageItem>
        }
        
      ]
    }
  ]);