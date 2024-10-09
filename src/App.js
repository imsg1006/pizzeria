import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js"; 


import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import Profile from "./components/Profile.js";
import PizzaList from "./components/Pizza.js";
import DessertList from "./components/Dessert.js";
import CartPage from "./components/Cart.js";
import Home from './components/Home.js'


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
    
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement:<div>error</div>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/pizza",
        element:<PizzaList/>,
      },
      {
        path:"/dessert",
        element:<DessertList/>

      },
      {
        path:"/cart",
        element:<CartPage/>,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} /> );
