import React from "react";
import img from "../img/umg.png";
import { Outlet, Link } from "react-router-dom";
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
              {/* <a href="/Home">Inicio</a> */}
              <Link to="/Home"> Inicio </Link>
            </li>
            <li>
              {/* <a href="/especialista">Ingresar Especialista</a> */}
              <Link to="/especialista"> Ingresar Especialista </Link>
            </li>
            <li>
              {/* <a href="/oficial">Ingresar Oficial</a> */}
              <Link to="/oficial"> Ingresar Oficial </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarUtil;
