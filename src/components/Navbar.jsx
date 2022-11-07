import React from "react";
import { Outlet, Link } from "react-router-dom";
import img from "../img/umg.png";
import "../styles/Navbar.css";

const NavbarUtil = () => {
  return (
    <>
      {/* <Navbar className="navBg" bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Jubilaciones Militares
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Acerca de
              </Nav.Link>
              <Nav.Link as={Link} to="/Ayuda">
                Ayuda
              </Nav.Link>
              <Nav.Link as={Link} to="/Informacion">
                Informacion
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Ingresar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <header className="header">
        <div className="logo">
          <img src={img} alt="Logo de la marca" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Acerca de</a>
            </li>
            <li>
              <a href="/Ayuda">Servicios</a>
            </li>
            <li>
              <a href="/Informacion">Informacion</a>
            </li>
          </ul>
        </nav>
        <a className="btn" href="/login">
          <button>Login</button>
        </a>
      </header>
    </>
  );
};

export default NavbarUtil;
