import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Menu.scss';

function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
  
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='color-rojo'>Task</Nav.Link>
            <Nav.Link href="#link" className='color-rojo'>Goals</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;