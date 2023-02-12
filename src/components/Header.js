import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const getNavLinkClass = (isActive) => {
  return isActive ? "nav-link text-warning" : "nav-link";
};

export default function Header() {
  return (
    <header className="mb-3">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="navbar-brand fs-3">
            React Challenge
          </NavLink>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto g-4">
              <NavLink
                to="/login"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                Login
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                Peliculas
              </NavLink>
              <NavLink
                to="/favoritos"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                Favoritos
              </NavLink>

              <SearchBar />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
