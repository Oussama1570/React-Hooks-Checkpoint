import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navigation = () => {
	return (
		<div>
			

      <Navbar expand="lx" className="bg-danger text-white"  >
      <Container fluid>
        <Navbar.Brand href="/">Media Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
          
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search for Movie</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>



		</div>
	);
};







export default Navigation;
