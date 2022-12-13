import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const Navbarr = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home" className="h1 ms-2">BlueTomatoes</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Podcast</Nav.Link>
          <Nav.Link href="#features">Latest</Nav.Link>
          <Nav.Link href="#pricing">Store</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navbarr;
