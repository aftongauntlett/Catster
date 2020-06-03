import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function myNavbar() {
  return (
    <Navbar
      style={{ fontFamily: "'Martel', serif" }}
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/discover">Discover Cats</Nav.Link>
          <Nav.Link href="/search">Search Cats</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default myNavbar;
