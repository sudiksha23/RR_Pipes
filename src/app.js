import React from "react";
import ReactDOM from "react-dom/client";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
//import Header from './components/Header' this will also work, react recognises this also
import Carousell from "./components/Carousell";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./components/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const AppLayout = () => {
//     return (
        
//     <div className="background">
       
//          {/* <Home/> */}
//           <Product/>
       

//     </div>
   
    
//     )
// }

const componentRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/products",
    element: <Product/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<AppLayout />)
root.render(<RouterProvider router={componentRouter} />)