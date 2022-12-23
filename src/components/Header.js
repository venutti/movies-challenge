import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const getNavLinkClass = (isActive) => {
  return isActive ? "nav-link text-warning" : "nav-link";
};

export default function Header() {
  return (
    <header className="mb-3">
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="navbar-brand fs-3">
            React Challenge
          </NavLink>

          <Nav className="ms-auto">
            <NavLink
              to="/"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Home
            </NavLink>
            <NavLink
              to="/listado"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Peliculas
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
