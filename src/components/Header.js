import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
    return (
       
      <Navbar bg="light" variant="light" >
        <Container className="NavContainer">
          <Navbar.Brand href="#home">
            <img
                src="https://t3.ftcdn.net/jpg/01/57/25/66/360_F_157256626_RrWboSjxyV9dm8Q9CpaDaeqbb2IaIyTZ.jpg"
                width="100"
                height="100"
                
                />{'   '}
                
            </Navbar.Brand>
          <Nav variant="tabs" defaultActiveKey="#home">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#enquiry">Enquiry</Nav.Link>
           
          </Nav>
         
        </Container>
      </Navbar>
      
    );
}

export default Header
