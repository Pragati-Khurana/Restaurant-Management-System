import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <Navbar className="p-4 fs-4" bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto mx-3">
            <Link to="/" className='mx-3 nav-link'>Home</Link>
            <Link to="/menu" className='mx-3 nav-link'>Menu</Link>
            <Link to="/order" className='mx-3 nav-link'>Order</Link>
            <Link to="/reserve-table" className='mx-3 nav-link'>Reserve Table</Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse>
            <Nav>
            <Nav.Link href="#"><Person2Icon className='fs-2' /></Nav.Link>
            <Nav.Link href="#"><ShoppingCartIcon className='fs-2' /></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
