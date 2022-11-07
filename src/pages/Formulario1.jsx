import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar2";
import "../styles/Form.css";

const Formulario1 = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:5000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        }
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  return (
    <>
      <Navbar />
      <div className="form">
        <div className="form-input">
          <input
            className="input"
            name="nombre"
            id="nombre"
            placeholder="Nombre"
            required=""
            type="text"
          />
          <span className="input-border"></span>
        </div>
        <div className="form-input">
          <input
            className="input"
            name="DPI"
            id="DPI"
            placeholder="DPI"
            required=""
            type="text"
          />
          <span className="input-border"></span>
        </div>
        <div className="form-input">
          <input
            className="input"
            name="NIT"
            id="NIT"
            placeholder="NIT"
            required=""
            type="text"
          />
          <span className="input-border"></span>
        </div>
        <div className="form-input">
          <select name="Banco" id="Banco">
            <option value="Banrural">Banrural</option>
            <option value="G&T">G&T</option>
          </select>
        </div>
        <div className="form-input">
          <input
            className="input"
            name="Cuenta"
            id="Cuenta"
            placeholder="Cuenta"
            required=""
            type="text"
          />
          <span className="input-border"></span>
        </div>
        <div className="form-input">
          <input
            className="input"
            name="Servicio"
            id="Servicio"
            placeholder="Años de Servicio"
            required=""
            type="number"
          />
          <span className="input-border"></span>
        </div>
        <div className="form-input">
          <input
            className="input"
            name="Ultimo pago"
            id="Ultimo pago"
            placeholder="Ultimo pago recibido"
            required=""
            type="number"
          />
          <span className="input-border"></span>
        </div>
        <div>
          <button>Ingresar</button>
          <button>PDF</button>
        </div>
      </div>
    </>
  );
};

export default Formulario1;
