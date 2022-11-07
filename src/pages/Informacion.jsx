import React from "react";
import NavbarUtil from "../components/Navbar";
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
import "../styles/estilosmi.css";

const Informacion = () => {
  return (
    <>
      <NavbarUtil />
      <div className="mas-informacion">
        <header>
          <div className="wave">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="viewBox"
            >
              <path
                d="M0.00,49.98 C183.68,-3.44 336.05,131.75 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                className="path"
              ></path>
            </svg>
          </div>
        </header>
        <main>
          <section className="contenedor">
            <h2 className="titulo">Información</h2>
            <div className="contenedor-de-militares">
              <img src={mil3} alt="" className="imagen_about_us" />
              <div className="contenido-textos">
                <h3>
                  <span>1</span>COMO INICIAR TRAMITE DE SEGURO DOTAL POR
                  JUBILACION PARA OFICILES
                </h3>
                <h4>Requisitos</h4>
                <p>
                  <li>Haber causado baja en el ejercito de Guatemala.</li>
                  <li>Tener 25 o mas años de cotizacion.</li>
                  <h4>Documentos</h4>
                  <li>
                    Solicitud dirigida al señor gerente del IMP (se elebora en
                    el Departamento de Prestaciones).
                  </li>
                  <li>Certificado de Nacimiento, extendida por RENAP.</li>
                  <li>
                    Registro de servicio No. 1, debidamente cerrada, sellada y
                    firmada por la Jefatura del Estado Mayor de la Defensa.
                  </li>
                  <li>Duplicado de la Póliza de Seguro Dotal.</li>
                  <li>
                    Fotocopia del Documento Personal de Identificacion
                    Tributaria
                  </li>
                  <li>Fotocopia del carnet (NIT)</li>
                  <li>
                    Fotocopia de numero de cuenta de ahorro o monetario en G&T
                    Continental o Banrural
                  </li>
                </p>
              </div>
            </div>
            <p>
              --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div className="contenedor-de-militares">
              <img src={mil4} alt="" className="imagen_about_us" />
              <div className="contenido-textos">
                <h3>
                  <span>2</span>COMO INICIAR TRAMITE DE SEGURO DOTAL POR
                  JUBILACION DE UN ESPECIALISTA
                </h3>
                <h4>Requisitos</h4>
                <li>Haber causado baja del ejercito de Guatemala.</li>
                <li>Tener 25 o mas años de cotizacion.</li>
                <h4>Documentos</h4>
                <p>
                  <li>
                    Solicitud dirigida al señor gerente del IMP (se elebora en
                    el Departamento de Prestaciones).
                  </li>
                  <li>Certificado de Nacimiento, extendida por RENAP.</li>
                  <li>
                    Certificado de Servicio, extendida por el Servicio de
                    Ayudantia General del Ejercito, haciendo constar fecha de
                    alta, baja y computo de tiempo de servicio en original
                    reciente.
                  </li>
                  <li>Duplicado de la Póliza de Seguro Dotal.</li>
                  <li>
                    Fotocopia del Documento Personal de identificación (DPI)
                  </li>
                  <li>
                    Fotocopia del carnet del número de identificación tributaria
                    (NIT).
                  </li>
                  <li>
                    Número de cuenta de ahorro o monetaria constituida en G&T
                    Continental o Banrural
                  </li>
                </p>
              </div>
            </div>
            <p>
              --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div className="contenedor-de-militares">
              <img src={mil5} alt="" className="imagen_about_us" />
              <div className="contenido-textos">
                <h3>
                  <span>3</span>COMO INICIAR TRAMITE DE SOCORRO POR
                  FALLECIMIENTO
                </h3>
                <h4>Requisitos</h4>
                <li>
                  Por el fallecimiento de un afiliado en activo o en pasivo, el
                  beneficiario de éste tiene derecho a la prestación de Socorro
                  por Fallecimiento, la que se destinará para gastos funerales.
                </li>
                <h4>Documentos</h4>
                <p>
                  <li>
                    Solicitud dirigida al señor Gerente del IPM (se llena en el
                    Departamento de Prestaciones)
                  </li>
                  <li>Duplicado de la Póliza de Socorro por Fallecimiento</li>
                  <li>
                    Certificación de Defunción original, del afiliado fallecido,
                    extendida por el Registro Nacional de las Personas -RENAP-.
                  </li>
                  <li>
                    Certificación de Defunción original, extendida por el
                    Registro Nacional de las Personas -RENAP-, Del beneficiario
                    de la póliza de Socorro por Fallecimiento.
                  </li>
                </p>
              </div>
            </div>
            <p>
              --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div className="contenedor-de-militares">
              <img src={mil6} alt="" className="imagen_about_us" />
              <div className="contenido-textos">
                <h3>
                  <span>4</span>COMO INICIAR TRÁMITE DE PENSIÓN POR INVALIDEZ
                  PARA OFICIALES
                </h3>
                <h4>Requisitos</h4>
                <li>
                  El trámite de la Pensión por Invalidez ante el IPM, lo debe
                  realizar el afiliado en activo encontrándose de alta en el
                  Ejército de Guatemala.
                </li>
                <li>
                  Haber cotizado mínimo 5 años al Régimen General del IPM.
                </li>
                <li>
                  Si la discapacidad es adquirida antes del tiempo mínimo de
                  cotización, es necesario que el Ministerio de la Defensa
                  Nacional califique si la discapacidad se adquirió en funciones
                  del servicio.
                </li>
                <h4>Documentos</h4>
                <p>
                  <li>
                    Si la discapacidad es adquirida antes del tiempo mínimo de
                    cotización, es necesario que el Ministerio de la Defensa
                    Nacional califique si la discapacidad se adquirió en
                    funciones del servicio.
                  </li>
                  <li>Certificado de Nacimiento, extendida por RENAP.</li>
                  <li>
                    Registro de servicio No. 1, debidamente cerrada, sellada y
                    firmada por la Jefatura del Estado Mayor de la Defensa.
                  </li>
                  <li>Duplicado de la Póliza de Seguro Dotal.</li>
                  <li>
                    Fotocopia del Documento Personal de Identificacion
                    Tributaria
                  </li>
                  <li>Fotocopia del carnet (NIT)</li>
                  <li>
                    Fotocopia de numero de cuenta de ahorro o monetario en G&T
                    Continental o Banrural
                  </li>
                </p>
              </div>
            </div>
            <p>
              --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div className="contenedor-de-militares">
              <img src={mil7} alt="" className="imagen_about_us" />
              <div className="contenido-textos">
                <h3>
                  <span>5</span>COMO INICIAR TRAMITE DE PENSION POR INVALIDEZ
                  PARA ESPECIALISTAS
                </h3>
                <h4>Requisitos</h4>
                <li>
                  Solicitud dirigida al señor Gerente del IPM, la cual deberá
                  presentar el afiliado encontrándose de alta en el Ejército de
                  Guatemala (se elabora en el Departamento de Prestaciones).
                </li>
                <li>
                  Haber cotizado mínimo 5 años al Régimen General del IPM.
                </li>
                <li>
                  Si la discapacidad es adquirida antes del tiempo mínimo de
                  cotización, es necesario que el Ministerio de la Defensa
                  Nacional califique si la discapacidad se adquirió en funciones
                  del servicio.
                </li>
                <h4>Documentos</h4>
                <p>
                  <li>
                    Solicitud dirigida al señor gerente del IMP (se elebora en
                    el Departamento de Prestaciones).
                  </li>
                  <li>Certificado de Nacimiento, extendida por RENAP.</li>
                  <li>
                    Certificación de Servicios, extendida por el Servicio de
                    Ayudantía General del Ejército, haciendo constar fechas de
                    alta, baja y cómputo de tiempo de servicio.
                  </li>
                  <li>Duplicado de la Póliza de Seguro Dotal.</li>
                  <li>
                    Fotocopia del Documento Personal de Identificacion
                    Tributaria
                  </li>
                  <li>Fotocopia del carnet (NIT)</li>
                  <li>
                    Fotocopia de numero de cuenta de ahorro o monetario en G&T
                    Continental o Banrural
                  </li>
                </p>
              </div>
            </div>
            <p>
              --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div className="contenedor-de-militares">
              <img src={mil8} alt="" className="imagen_about_us" />
              <div className="contenido-textos">
                <h3>
                  <span>6</span>COMO INICIAR TRAMITE DE SEGURO DOTAL POR
                  FALLECIMIENTO DE UN OFICIAL
                </h3>
                <h4>Requisitos</h4>
                <li>
                  Por el fallecimiento de un Oficial activo, sus beneficiarios o
                  herederos legales recibirán el 100% del monto del Seguro
                  Dotal.
                </li>
                <h4>Documentos</h4>
                <p>
                  <li>
                    Solicitud dirigida al señor gerente del IMP (se elebora en
                    el Departamento de Prestaciones).
                  </li>
                  <li>
                    Certificación de defunción, reciente, en original, extendida
                    por el Registro Nacional de las Personas -RENAP-
                  </li>
                  <li>
                    Los beneficiarios deberán presentar duplicado de la Póliza
                    de Seguro de Dotal, y en los casos en los que hubi eren
                    fallecido los beneficiarios o el afiliado no haya suscrito
                    las pólizas respectivas, deberán declarase los herederos del
                    causante, quienes presentarán la certificación del auto
                    declaratorio de herederos.
                  </li>
                  <li>
                    Certificaciones de nacimiento, recientes, en originales,
                    extendidas por el Registro Nacional de las Personas -RENAP-
                    de los beneficiarios.
                  </li>
                  <li>
                    Fotocopia del Documento Personal de Identificacion
                    Tributaria
                  </li>
                  <li>Fotocopia del carnet (NIT)</li>
                  <li>
                    Fotocopia de numero de cuenta de ahorro o monetario en G&T
                    Continental o Banrural
                  </li>
                  <li>
                    Registro de Servicios No. 1. (hoja matriz), debidamente
                    cerrada, sellada y firmada por la Jefatura del Estado Mayor
                    de la Defensa.
                  </li>
                </p>
              </div>
            </div>
            <p>
              --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div className="contenedor-de-militares">
              <img src={mil9} alt="" className="imagen_about_us" />
              <div className="contenido-textos">
                <h3>
                  <span>7</span>COMO INICIAR TRAMITE DE SEGURO DOTAL POR
                  FALLECIMIENTO DE UN ESPECIALISTA
                </h3>
                <h4>Requisitos</h4>
                <li>
                  Por el fallecimiento de un Especialista activo, sus
                  beneficiarios o herederos legales recibirán el 100% del monto
                  del Seguro Dotal.
                </li>
                <h4>Documentos</h4>
                <p>
                  <li>
                    Solicitud dirigida al señor gerente del IMP (se elebora en
                    el Departamento de Prestaciones).
                  </li>
                  <li>
                    Certificación de defunción, reciente, en original, extendida
                    por el Registro Nacional de las Personas –RENAP–
                  </li>
                  <li>
                    Los beneficiarios deberán presentar duplicado de la Póliza
                    de Seguro de Dotal, y en los casos en los que hubi eren
                    fallecido los beneficiarios o el afiliado no haya suscrito
                    las pólizas respectivas, deberán declarase los herederos del
                    causante, quienes presentarán la certificación del auto
                    declaratorio de herederos.
                  </li>
                  <li>
                    Certificaciones de nacimiento, recientes, en originales,
                    extendidas por el Registro Nacional de las Personas –RENAP–
                    de los beneficiarios.
                  </li>
                  <li>
                    Fotocopia del Documento Personal de Identificacion
                    Tributaria
                  </li>
                  <li>Fotocopia del carnet (NIT)</li>
                  <li>
                    Fotocopia de numero de cuenta de ahorro o monetario en G&T
                    Continental o Banrural
                  </li>
                  <li>
                    Registro de Servicios No. 1. (hoja matriz), debidamente
                    cerrada, sellada y firmada por la Jefatura del Estado Mayor
                    de la Defensa.
                  </li>
                  <li>
                    Certificación de Servicios, extendida por el Servicio de
                    Ayudantía General del Ejército de Guatemala, haciendo
                    constar fechas de alta, baja y cómputo total de tiempo de
                    servicio.
                  </li>
                </p>
              </div>
            </div>
            <p>
              --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div className="contenedor-de-militares">
              <img src={mil10} alt="" className="imagen_about_us" />
              <div className="contenido-textos">
                <h3>
                  <span>8</span>COMO INICIAR TRAMITE DE PENSION POR VIUDEZ DE UN
                  OFICIAL ACTIVO, JUBILADO O PENSIONADO POR INVALIDEZ
                </h3>
                <h4>Requisitos</h4>
                <li>
                  Tienen derecho el cónyuge e hijos menores y/o mayores
                  inválidos e incapaces, por el fallecimiento de un Oficial
                  activo, jubilado o pensionado por invalidez.
                </li>
                <li>
                  Si el causante se encontrare en situación de activo al régimen
                  previsional del IPM, es necesario que haya cotizado un mínimo
                  de 5 años.
                </li>
                <li>
                  En caso, de que no hubiese cotizado el tiempo mínimo, es
                  necesario que el Ministerio de la Defensa Nacional, califique
                  si el deceso ocurrió en funciones del servicio.
                </li>
                <h4>Documentos</h4>
                <p>
                  <li>
                    Solicitud dirigida al señor gerente del IMP (se elebora en
                    el Departamento de Prestaciones).
                  </li>
                  <li>
                    Certificación de defunción en original del causante,
                    extendida por el Registro Nacional de las Personas –RENAP–.
                  </li>
                  <li>
                    Certificación de la partida de matrimonio o de unión de
                    hecho en original, del cónyuge sobreviviente, extendida por
                    el Registro Nacional de las Personas –RENAP–.
                  </li>
                  <li>
                    Certificación de nacimiento en original, del cónyuge
                    sobreviviente, extendida por el Registro Nacional de las
                    Personas –RENAP–.
                  </li>
                  <li>
                    Certificaciones de nacimiento en original, de los hijos
                    menores y/o mayores inválidos e incapaces, extendidas por el
                    Registro Nacional de las Personas –RENAP–.
                  </li>
                  <li>
                    Registro de Servicios No. 1. (hoja matriz), debidamente,
                    cerrada, firmada y sellada por la Jefatura del Estado Mayor
                    de la Defensa Nacional, documento que deben presentar
                    únicamente los beneficiarios del afiliado fallecido
                    encontrándose de alta en el Ejército de Guatemala.
                  </li>
                  <li>
                    Fotocopia del Documento Personal de Identificacion
                    Tributaria
                  </li>
                  <li>Fotocopia del carnet (NIT)</li>
                  <li>
                    Fotocopia de numero de cuenta de ahorro o monetario en G&T
                    Continental o Banrural
                  </li>
                </p>
              </div>
            </div>
            <p>
              --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div className="contenedor-de-militares">
              <img src={mil11} alt="" className="imagen_about_us" />
              <div className="contenido-textos">
                <h3>
                  <span>9</span>COMO INICIAR TRAMITE DE PENSION POR VIUDEZ DE UN
                  ESPECIALISTA ACTIVO, JUBILADO O PENSIONADO POR INVALIDEZ
                </h3>
                <h4>Requisitos</h4>
                <li>
                  Tienen derecho el cónyuge e hijos menores y/o mayores
                  inválidos e incapaces, por el fallecimiento de un Especialista
                  activo, jubilado o pensionado por invalidez.
                </li>
                <li>
                  Si el causante se encontrare en situación de activo al régimen
                  previsional del IPM, es necesario que haya cotizado un mínimo
                  de 5 años.
                </li>
                <li>
                  En caso, de que no hubiese cotizado el tiempo mínimo, es
                  necesario que el Ministerio de la Defensa Nacional, califique
                  si el deceso ocurrió en funciones del servicio.
                </li>
                <h4>Documentos</h4>
                <p>
                  <li>
                    Solicitud dirigida al señor gerente del IMP (se elebora en
                    el Departamento de Prestaciones).
                  </li>
                  <li>
                    Certificación de defunción en original, del causante,
                    extendida por el Registro Nacional de las Personas –RENAP–.
                  </li>
                  <li>
                    Certificación de la partida de matrimonio o de la unión de
                    hecho en original, del cónyuge sobreviviente, extendida por
                    el Registro Nacional de las Personas -RENAP-.
                  </li>
                  <li>
                    Certificación de nacimiento en original, del cónyuge
                    sobreviviente, extendida por el Registro Nacional de las
                    Personas –RENAP–.
                  </li>
                  <li>
                    Certificaciones de nacimiento en original, de los hijos
                    menores y/o mayores inválidos e incapaces, extendidas por el
                    Registro Nacional de las Personas –RENAP–.
                  </li>
                  <li>
                    Certificación de Servicios, extendida por el Servicio de
                    Ayudantía General del Ejército de Guatemala, documento que
                    deben presentar únicamente los beneficiarios del afiliado
                    fallecido encontrándose de alta en el Ejército de Guatemala.
                  </li>
                  <li>
                    Fotocopia del Documento Personal de Identificacion
                    Tributaria del cónyuge sobreviviente.
                  </li>
                  <li>Fotocopia del carnet (NIT) del cónyuge sobreviviente.</li>
                  <li>
                    Número de cuenta aperturada a nombre del beneficiario en G&T
                    Continental o Banrural.
                  </li>
                </p>
              </div>
            </div>
            <p>
              --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div className="contenedor-de-militares">
              <img src={mil12} alt="" className="imagen_about_us" />
              <div className="contenido-textos">
                <h3>
                  <span>10</span>COMO INICIAR TRAMITE DE PENSION PARA PADRES DE
                  UN OFICIAL ACTIVO, JUBILADO O PENSIONADO POR INVALIDEZ
                </h3>
                <h4>Requisitos</h4>
                <li>
                  Si no existieren personas con derecho a las prestaciones por
                  viudez el cónyuge e hijos menores y/o mayores inválidos e
                  incapaces, por el fallecimiento de un Oficial activo, jubilado
                  o pensionado por invalidez.
                </li>
                <li>
                  Si el causante se encontrare en situación de activo al régimen
                  previsional del IPM, es necesario que haya cotizado un mínimo
                  de 5 años.
                </li>
                <li>
                  En caso, de que no hubiese cotizado el tiempo mínimo, es
                  necesario que el Ministerio de la Defensa Nacional, califique
                  si el deceso ocurrió en funciones del servicio.
                </li>
                <h4>Documentos</h4>
                <p>
                  <li>
                    Solicitud dirigida al señor gerente del IMP (se elebora en
                    el Departamento de Prestaciones).
                  </li>
                  <li>
                    Certificación de la partida de defunción en original, del
                    causante, extendida por el Registro Nacional de las Personas
                    –RENAP–.
                  </li>
                  <li>
                    Certificaciones de las partidas de nacimiento en original,
                    de los padres del causante, recientes, en originales,
                    extendidas por el Registro Nacional de las Personas –RENAP–.
                  </li>
                  <li>
                    Fotocopia del Documento Personal de Identificación –DPI- de
                    los padres del causante.
                  </li>
                  <li>
                    Registro de Servicios No. 1. (hoja matriz), debidamente,
                    cerrada, firmada y sellada por la Jefatura del Estado Mayor
                    de la Defensa Nacional, documento que deben presentar
                    únicamente los beneficiarios del afiliado fallecido
                    encontrándose de alta en el Ejército de Guatemala.
                  </li>
                  <li>
                    Fotocopia del carnet (NIT) de los padres del causante.
                  </li>
                  <li>
                    Fotocopias de los números de cuentas, aperturadas a nombre
                    de los beneficiarios, en G&T Continental o Banrural.
                  </li>
                </p>
              </div>
            </div>
            <p>
              --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div className="contenedor-de-militares">
              <img src={mil13} alt="" className="imagen_about_us" />
              <div className="contenido-textos">
                <h3>
                  <span>11</span>COMO INICIAR TRAMITE DE PENSION PARA PADRES DE
                  UN ESPECIALISTA ACTIVO, JUBILADO O PENSIONADO POR INVALIDEZ
                </h3>
                <h4>Requisitos</h4>
                <li>
                  Si no existieren personas con derecho a las prestaciones por
                  viudez el cónyuge e hijos menores y/o mayores inválidos e
                  incapaces, por el fallecimiento de un Oficial activo, jubilado
                  o pensionado por invalidez.
                </li>
                <li>
                  Si el causante se encontrare en situación de activo al régimen
                  previsional del IPM, es necesario que haya cotizado un mínimo
                  de 5 años.
                </li>
                <li>
                  En caso, de que no hubiese cotizado el tiempo mínimo, es
                  necesario que el Ministerio de la Defensa Nacional, califique
                  si el deceso ocurrió en funciones del servicio.
                </li>
                <h4>Documentos</h4>
                <p>
                  <li>
                    Solicitud dirigida al señor gerente del IMP (se elebora en
                    el Departamento de Prestaciones).
                  </li>
                  <li>
                    Certificación de la partida de defunción en original, del
                    causante, extendida por el Registro Nacional de las Personas
                    –RENAP–.
                  </li>
                  <li>
                    Certificaciones de las partidas de nacimiento en original,
                    de los padres del causante, recientes, en originales,
                    extendidas por el Registro Nacional de las Personas –RENAP–.
                  </li>
                  <li>
                    Fotocopia del Documento Personal de Identificación –DPI- de
                    los padres del causante.
                  </li>
                  <li>
                    Certificación de Servicios, extendida por el Servicio de
                    Ayudantía General del Ejército de Guatemala, documento que
                    deben presentar únicamente los beneficiarios del afiliado
                    fallecido encontrándose de alta en el Ejército de Guatemala.
                  </li>
                  <li>
                    Fotocopias de los carnets de número de identificación
                    tributaria –NIT–, de los padres del causante.
                  </li>
                  <li>
                    Fotocopias de los números de cuentas, aperturadas a nombre
                    de los beneficiarios, en G&T Continental o Banrural.
                  </li>
                </p>
              </div>
            </div>
          </section>
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
        </main>
      </div>
    </>
  );
};

export default Informacion;
