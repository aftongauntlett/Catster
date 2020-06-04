import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function myNavbar() {
  return (
    <Navbar
      style={{ fontFamily: "Lexend Tera" }}
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Navbar.Brand href="/">Catster</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/discover">Discover</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default myNavbar;
