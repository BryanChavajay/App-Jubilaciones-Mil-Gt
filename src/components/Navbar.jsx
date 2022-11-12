import React from "react";
import { Outlet, Link } from "react-router-dom";
import img from "../img/umg.png";
import "../styles/Navbar.css";

const NavbarUtil = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={img} alt="Logo de la marca" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              {/* <a href="/">Acerca de</a> */}
              <Link to="/"> Acerca de </Link>
            </li>
            <li>
              {/* <a href="/Ayuda">Servicios</a> */}
              <Link to="/Ayuda"> Servicios </Link>
            </li>
            <li>
              {/* <a href="/Informacion">Informacion</a> */}
              <Link to="/Informacion"> Informacion </Link>
            </li>
          </ul>
        </nav>
        {/* <a className="btn" href="/login">
          <button>Login</button>
        </a> */}
        <div className="btn">
          <button>
            <Link to="/login"> Login </Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default NavbarUtil;
