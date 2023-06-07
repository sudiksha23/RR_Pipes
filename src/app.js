import React from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Product from "./components/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Enquiry from "./components/Enquiry";
import Error from "./components/Error";

const componentRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: "/Home",
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
])

const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<AppLayout />)
root.render(<RouterProvider router={componentRouter} />)