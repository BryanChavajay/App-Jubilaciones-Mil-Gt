import React from "react";
import NavbarUtil from "../components/Navbar";
import mil14 from "../img/mil 14.jpg";
import "../styles/estilosad.css";

const Acerca = () => {
  return (
    <>
      <NavbarUtil />
      <div className="acercaDe">
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
          <section class="contenedor de militares1">
            <h2 class="titulo">Historia</h2>
            {/* <div class="video-ipm">
                <video src="/img/Mil 1vid.mp4" controls class="video-ipm">
                </video>
                <p>
                    .............................................................................................................................................................................................................................................
                </p>
                <h2 class="h2-sub">“INSTITUTO DE PREVENSION MILITAR”</h2>
            </div> */}
            <div class="contenedor-de-militares1">
              <img src={mil14} alt="" class="imagen_about_us" />
              <div class="contenido-textos">
                <h3>
                  <span>1</span>Inicios
                </h3>
                <h4></h4>
                <p>
                  Con fecha 1 de julio de 1953, se creó el Departamento de
                  Previsión Militar, en el cual se centralizó el trámite de las
                  prestaciones de los laborantes en el ramo de la Defensa
                  Nacional. La creación del Instituto de Previsión Militar se
                  gestó en el año de 1963, el 30 de abril de 1966, se vio
                  concretado, con el mejor de los éxitos, el proyecto mediante
                  el cual se estableció un beneficio social de incalculables
                  proyecciones hacia el Ejército de Guatemala en general y en lo
                  particular, a cada uno de sus miembros, al crearse el
                  “INSTITUTO DE PREVISIÓN MILITAR”. Su inauguración estuvo a
                  cargo del señor Coronel de Infantería Enrique Peralta Azurdia,
                  Jefe de Gobierno y Ministro de la Defensa Nacional, el 30 de
                  junio de 1966, inició sus actividades el 1 de julio de ese
                  año, acogiendo como afiliados a los Oficiales y Especialistas
                  que se encontraban de alta en el Ejército de Guatemala. Año
                  1966, Instalaciones del Instituto de Previsión Militar en su
                  inicio fueron ubicadas en 5ª. Avenida 6-06, Zona 1. En mayo de
                  1971 se inició la demolición de las instalaciones del
                  Instituto de Previsión Militar, para realizar la construcción
                  de un nuevo edificio en ese mismo lugar. La construcción del
                  nuevo Edificio del Instituto de Previsión Militar se inició el
                  08 de julio del año 1971. El mismo fue construido en la misma
                  dirección. La construcción del nuevo Edificio IPM, fue
                  finalizada el 20 de octubre de 1972.
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div class="contenedor-footer">
            <div class="content-foo">
              <h4>Telefono</h4>
              <p>2305-4900</p>
            </div>
            <div class="content-foo">
              <h4>Email</h4>
              <p>insprevm@ipm.org.gt</p>
            </div>
            <div class="content-foo">
              <h4>Ubicacion</h4>
              <p>5ta. avenida 6-06 Zona 1 Guatemala</p>
            </div>
            <h2 class="titulo-final">
              &copy; Umg | Universidad Mariano Galvez
            </h2>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Acerca;
