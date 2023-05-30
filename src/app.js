import React from "react";
import ReactDOM from "react-dom/client";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
//import Header from './components/Header' this will also work, react recognises this also
import Carousell from "./components/Carousell";
import Footer from "./components/Footer";
import TextCompany from "./components/Home";
import Product from "./components/Product";

const AppLayout = () => {
    return (
        
    <div className="background">
        <Header/>
         {/* <Carousell/>
        <TextCompany/>  */}
         <Product/> 
        <Footer/>

    </div>
   
    
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)