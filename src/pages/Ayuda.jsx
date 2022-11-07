import React from "react";
import NavbarUtil from "../components/Navbar";
import mil2 from "../img/mil 2.jpg";
import mil3 from "../img/mil 3.jpg";
import mil4 from "../img/mil 4.jpg";
import mil5 from "../img/mil 5.jpg";
import mil6 from "../img/mil 6.jpg";
import mil7 from "../img/mil 7.jpg";
import mil8 from "../img/mil 8.jpg";
import mil9 from "../img/mil 9.jpg";
import mil10 from "../img/mil 10.png";
import mil11 from "../img/mil 11.jpg";
import mil12 from "../img/mil 12.jpeg";
import mil13 from "../img/mil 13.jpg";
import mil from "../img/militar.png";
import "../styles/estilos.css";

const Ayuda = () => {
  return (
    <>
      <NavbarUtil />
      <div className="Ayuda">
        <header>
          <div className="wave">
            <svg
              viewBox="0 0 500 150"
              className="viewBox"
              preserveAspectRatio="none"
            >
              <path
                className="path"
                d="M0.00,49.98 C183.68,-3.44 336.05,131.75 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              ></path>
            </svg>
          </div>
        </header>
        <main>
          <section className="contenedor">
            <h2 className="titulo">Servicios</h2>
            <div className="contenedor-de-militares">
              <img src={mil2} alt="" className="imagen_about_us" />
              <div className="contenido-textos">
                <h3>
                  <span>1</span>TRAMITE DE JUBILACION PARA OFICILES
                </h3>
                <h4>Requisitos</h4>
                <p>
                  <li>Haber caudado bajas en el ejercito de Guatemala.</li>
                </p>
                <p>
                  <li>Tener 20 o mas años de cotizacion.</li>
                </p>
                <p>
                  <li>
                    No devengar sueldo en la Administracion Publica o en
                    entidades automatas, semiautomatas o desentralizacion.
                  </li>
                </p>
                <h3>
                  <span>2</span>TRAMITE DE JUBILACION PARA ESPECIALISTA
                </h3>
                <h4>Requisitos</h4>
                <p>
                  <li>Haber caudado bajas en el ejercito de Guatemala.</li>
                </p>
                <p>
                  <li>Tener 20 o mas años de cotizacion.</li>
                </p>
                <p>
                  <li>
                    No devengar sueldo en la Administracion Publica o en
                    entidades automatas, semiautomatas o desentralizacion.
                  </li>
                </p>
              </div>
            </div>
          </section>

          <section className="portafolio">
            <div className="contenedor1">
              <h2 className="titulo">Más Información</h2>
              <div className="galeria-port">
                <div className="imagen-port">
                  <img src={mil3} alt="" />
                  <div className="hover-galeria">
                    <img src={mil} alt="" />
                    <a href="/Informacion">Seguro Dotal para Oficiales</a>
                  </div>
                </div>
                <div className="imagen-port">
                  <img src={mil4} alt="" />
                  <div className="hover-galeria">
                    <img src={mil} alt="" />
                    <a href="/Informacion">Seguro Dotal para Especialista</a>
                  </div>
                </div>
                <div className="imagen-port">
                  <img src={mil5} alt="" />
                  <div className="hover-galeria">
                    <img src={mil} alt="" />
                    <a href="/Informacion">
                      Tramite de Socorro por Fallecimiento
                    </a>
                  </div>
                </div>
                <div className="imagen-port">
                  <img src={mil6} alt="" />
                  <div className="hover-galeria">
                    <img src={mil} alt="" />
                    <a href="/Informacion">
                      Tramite por Invalidez para Oficiales
                    </a>
                  </div>
                </div>
                <div className="imagen-port">
                  <img src={mil7} alt="" />
                  <div className="hover-galeria">
                    <img src={mil} alt="" />
                    <a href="/Informacion">
                      Tramite por Invalidez para Especialista
                    </a>
                  </div>
                </div>
                <div className="imagen-port">
                  <img src={mil8} alt="" />
                  <div className="hover-galeria">
                    <img src={mil} alt="" />
                    <a href="/Informacion">
                      Seguro Dotal por Fallecimiento Oficial
                    </a>
                  </div>
                </div>
                <div className="imagen-port">
                  <img src={mil9} alt="" />
                  <div className="hover-galeria">
                    <img src={mil} alt="" />
                    <a href="/Informacion">
                      Seguro Dotal por Fallecimiento Especialista
                    </a>
                  </div>
                </div>
                <div className="imagen-port">
                  <img src={mil10} alt="" />
                  <div className="hover-galeria">
                    <img src={mil} alt="" />
                    <a href="/Informacion">
                      Pensión por Viudez de un Oficial Activo
                    </a>
                  </div>
                </div>
                <div className="imagen-port">
                  <img src={mil11} alt="" />
                  <div className="hover-galeria">
                    <img src={mil} alt="" />
                    <a href="/Informacion">
                      Pensión por Viudez de un Especialista Activo
                    </a>
                  </div>
                </div>
                <div className="imagen-port">
                  <img src={mil12} alt="" />
                  <div className="hover-galeria">
                    <img src={mil} alt="" />
                    <a href="/Informacion">Pension para padres de un Oficial</a>
                  </div>
                </div>
                <div className="imagen-port">
                  <img src={mil13} alt="" />
                  <div className="hover-galeria">
                    <img src={mil} alt="" />
                    <a href="/Informacion">
                      Pension para padres de un Especialista
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="contenedor-footer">
            <div className="content-foo">
              <h4>Telefono</h4>
              <p>2305-4900</p>
            </div>
            <div className="content-foo">
              <h4>Email</h4>
              <p>insprevm@ipm.org.gt</p>
            </div>
            <div className="content-foo">
              <h4>Ubicacion</h4>
              <p>5ta. avenida 6-06 Zona 1 Guatemala</p>
            </div>
            <h2 className="titulo-final">
              &copy; Umg | Universidad Mariano Galvez
            </h2>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Ayuda;
