import React from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Product from "./components/Product";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Enquiry from "./components/Enquiry";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppLayout = () => {
  return(
    <>
           <Header/>
           <Outlet/>
            <Footer/>
     
    </>
  )
}
const componentRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/Home",
        element: <Home/>
      }, 
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products",
        element: <Product/>
      },
      {
        path: "/enquiry",
        element: <Enquiry/>
      }
    ],
    errorElement: <Error/>   
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<AppLayout />)
root.render(<RouterProvider router={componentRouter} />)