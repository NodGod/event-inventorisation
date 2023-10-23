import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const NavBarView = () => {
  const navigate = useNavigate();

  const navLinks = [
    { title: "Organisers", path: "/organisers" },
    { title: "Events", path: "/events" },
    { title: "Items", path: "/items" },
  ];

  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Event inventory
        </Navbar.Brand>
        <Nav className="me-auto">
          {navLinks.map((link) => (
            <Nav.Link as={Link} to={link.path} key={link.title}>
              {link.title}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarView;
