import React from "react";
import ReactDOM from "react-dom/client";
import Container from 'react-bootstrap/Container';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
//import Header from './components/Header' this will also work, react recognises this also
import Carousell from "./components/Carousell";
import Footer from "./components/Footer";

const TextCompany = () => {
    return (
    <Container className="textContainer">
    <h1 className="textHeading">Ridam Radiant Plasto LLP.</h1>
    <p >RR Pipes is a nationally reputed pipe manufacturing company that specialises in premium quality polymer pipes and fittings. </p>
    <p>We have succeeded in making a niche for ourselves in the sector because of our superior product quality, state-of-the-art technology and stringent R&D.</p>

   <p> We adhere to excellent standards, with a commitment to manufacture pipes that would take care of your lifelong needs: whether your requirements are agricultural, 
    or related to urban plumbing.</p>
    
    <p>This commitment has led to us becoming the fastest growing amongst all the polymer pipe manufacturers in India.</p>
    
    <p>And it all comes down to one thing: Quality.</p>
    </Container>
    );
}


const AppLayout = () => {
    return (
        
    <div className="background">
        <Header/>
        <Carousell/>
        <TextCompany/>
        <Footer/>

    </div>
   
    
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)