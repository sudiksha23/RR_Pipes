import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LOGO_URL } from '../utils/constants';


const Header = () => {
    return (
       
      <Navbar bg="light" variant="light" >
        <Container className="NavContainer">
          <Navbar.Brand href="#home">
            <img
                src={LOGO_URL}
                width="100"
                height="100"
                
                />{'   '}
                
            </Navbar.Brand>
          <Nav variant="tabs" defaultActiveKey="#home">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="products">Products</Nav.Link>
            <Nav.Link href="enquiry">Enquiry</Nav.Link>
           
          </Nav>
         
        </Container>
      </Navbar>
      
    );
}

export default Header
