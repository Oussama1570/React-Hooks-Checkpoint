import React from 'react';
import {Navbar, Button} from "react-bootstrap";

const Navbar = () => {
  return (
    <div>



      {/* Navbar */}




<Navbar expand="lg" className="p-3 mb-2 bg-danger text-white">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home" className='HomePage'>Home</Nav.Link>
            <Nav.Link href="#Products">Products</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#About">About</NavDropdown.Item>
              <NavDropdown.Item href="#More information">
                More information
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Contact us">
               Contact us
              </NavDropdown.Item>
            </NavDropdown>
                      </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant='secondary' onClick={HandleClose}>Close
            </Button>
            
            <Button variant='primary' onClick={HandleClose}>Save changes
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Navbar
