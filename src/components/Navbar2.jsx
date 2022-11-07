import React from "react";
import img from "../img/umg.png";
import "../styles/Navbar.css";

const NavbarUtil = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={img} alt="Logo de la marca" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/Home">Inicio</a>
            </li>
            <li>
              <a href="/especialista">Ingresar Especialista</a>
            </li>
            <li>
              <a href="/oficial">Ingresar Oficial</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarUtil;
