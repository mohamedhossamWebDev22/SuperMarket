import React from 'react';
import { Button, Nav, Navbar, Container, Carousel } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        fixed="top"
        bg="success"
        data-bs-theme="dark"
        className="shadow "
      >
        <Container>
          <Navbar.Brand
            className="fw-bolder text-danger text-shadow fs-3 pr-5 mr-5"
            href="#0"
          >
            Super Market
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <Nav.Link href="#0">Home</Nav.Link>
              <Nav.Link href="#1">Features</Nav.Link>
              <Nav.Link href="#2">Products</Nav.Link>
              <Nav.Link href="#3">Categories</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
