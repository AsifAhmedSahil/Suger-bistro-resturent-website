import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageAllItems from "../Pages/Dashboard/ManageAllItems/ManageAllItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import NotFound from "../Pages/Shared/NotFound";





  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:"/order/:category",
        element:<Order></Order>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/secret",
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:"dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
            path: "userHome",
            element:<UserHome></UserHome>
        },
        {
          path: "cart",
          element:<Cart></Cart>
        },

        {
            path:'payment',
            element:<Payment></Payment>
        },
        {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
        },

        // Admin Route setup
        {
            path:"adminHome",
            element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
            path:'addItems',
            element:<AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
            path:'manageItems',
            element:<AdminRoutes><ManageAllItems></ManageAllItems></AdminRoutes>
        },
        {
          path:"users",
          element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path:'updateItem/:id',
          element: <UpdateItem></UpdateItem>,
          loader: ({params}) => fetch(`https://suger-bistro-server.vercel.app/menu/${params.id}`)
          // loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
          
          
        },
         {
          path:'manageBookings',
          element:<AdminRoutes></AdminRoutes>
        }
      ]
    }
  ]);