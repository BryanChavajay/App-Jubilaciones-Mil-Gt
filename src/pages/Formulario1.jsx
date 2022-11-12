import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar2";
import "../styles/Form.css";
import generateReport from "../PDF/GeneratePDF";

const Formulario1 = () => {
  const backend = import.meta.env.VITE_BACKEND;
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [todoBien, setTodoBien] = useState(false);
  const [datosOficial, setDatosOficial] = useState({
    nombre: "",
    DPI: "",
    NIT: "",
    Tipo: "Oficial",
    Banco: "Banrural",
    Cuenta: "",
    Servicio: "",
    Porcentaje: 0,
    Pension: 0,
    UltimoPago: "",
  });

  const onChangeData = (e) => {
    setDatosOficial({ ...datosOficial, [e.target.name]: e.target.value });
  };

  const verificarServicio = (servicio) => {
    if (
      datosOficial.nombre == "" ||
      datosOficial.DPI == "" ||
      datosOficial.NIT == "" ||
      datosOficial.Cuenta == "" ||
      datosOficial.UltimoPago == ""
    ) {
      return toast.error("Ingrese todos los datos necesarios");
    }
    if (servicio < 20) {
      setTodoBien(false);
      return toast.error("No cumple con los años minimos");
    }
    //console.log("mensaje desde verificarServicio");
    switch (Number(servicio)) {
      case 20:
        setDatosOficial({
          ...datosOficial,
          Pension: datosOficial.UltimoPago * 0.5,
          Porcentaje: 50,
        });
        setTodoBien(true);
        break;
      case 21:
        setDatosOficial({
          ...datosOficial,
          Pension: datosOficial.UltimoPago * 0.54,
          Porcentaje: 54,
        });
        setTodoBien(true);
        break;
      case 22:
        setDatosOficial({
          ...datosOficial,
          Pension: datosOficial.UltimoPago * 0.58,
          Porcentaje: 58,
        });
        setTodoBien(true);
        break;
      case 23:
        setDatosOficial({
          ...datosOficial,
          Pension: datosOficial.UltimoPago * 0.62,
          Porcentaje: 62,
        });
        setTodoBien(true);
        break;
      case 24:
        setDatosOficial({
          ...datosOficial,
          Pension: datosOficial.UltimoPago * 0.67,
          Porcentaje: 67,
        });
        setTodoBien(true);
        break;
      case 25:
        setDatosOficial({
          ...datosOficial,
          Pension: datosOficial.UltimoPago * 0.72,
          Porcentaje: 72,
        });
        setTodoBien(true);
        break;
      case 26:
        setDatosOficial({
          ...datosOficial,
          Pension: datosOficial.UltimoPago * 0.77,
          Porcentaje: 77,
        });
        setTodoBien(true);
        break;
      case 27:
        setDatosOficial({
          ...datosOficial,
          Pension: datosOficial.UltimoPago * 0.82,
          Porcentaje: 82,
        });
        setTodoBien(true);
        break;
      case 28:
        setDatosOficial({
          ...datosOficial,
          Pension: datosOficial.UltimoPago * 0.88,
          Porcentaje: 88,
        });
        setTodoBien(true);
        break;
      case 29:
        setDatosOficial({
          ...datosOficial,
          Pension: datosOficial.UltimoPago * 0.94,
          Porcentaje: 94,
        });
        setTodoBien(true);
        break;

      default:
        setDatosOficial({
          ...datosOficial,
          Pension: datosOficial.UltimoPago,
          Porcentaje: 100,
        });
        setTodoBien(true);
        break;
    }
    toast.success("Datos congelados");
  };

  const enviarDatos = async () => {
    //console.log("Desde envio", todoBien);

    if (todoBien) {
      try {
        const response = await fetch(`${backend}/ingreso/oficial`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            //token: localStorage.token,
          },
          body: JSON.stringify(datosOficial),
        });
        const resJson = await response.json();
        //console.log(resJson);
        //console.log("Datos del state oficial", datosOficial);
        toast.success("Todo bien, registro guardado");
      } catch (err) {
        console.log(err.massage);
        toast.error("Algo salio mal, intente nuevamente");
      }
    } else {
      toast.error("Ocurrio un error, revise los datos o congele");
    }
  };

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          `${backend}`,
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
      <ToastContainer />
      <div className="form">
        <label htmlFor="">Ingreso de un oficial</label>
        <div className="form-input">
          <input
            className="input"
            name="nombre"
            id="nombre"
            placeholder="Nombre"
            required
            type="text"
            value={datosOficial.nombre}
            onChange={(e) => onChangeData(e)}
          />
          <span className="input-border"></span>
        </div>
        <div className="form-input">
          <input
            className="input"
            name="DPI"
            id="DPI"
            placeholder="DPI"
            required
            type="number"
            value={datosOficial.DPI}
            onChange={(e) => onChangeData(e)}
          />
          <span className="input-border"></span>
        </div>
        <div className="form-input">
          <input
            className="input"
            name="NIT"
            id="NIT"
            placeholder="NIT"
            required
            type="number"
            value={datosOficial.NIT}
            onChange={(e) => onChangeData(e)}
          />
          <span className="input-border"></span>
        </div>
        <div className="form-input">
          <select
            name="Banco"
            id="Banco"
            value={datosOficial.Banco}
            onChange={(e) => onChangeData(e)}
          >
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
            required
            type="text"
            value={datosOficial.Cuenta}
            onChange={(e) => onChangeData(e)}
          />
          <span className="input-border"></span>
        </div>
        <div className="form-input">
          <input
            className="input"
            name="Servicio"
            id="Servicio"
            placeholder="Años de Servicio"
            required
            type="number"
            value={datosOficial.Servicio}
            onChange={(e) => onChangeData(e)}
          />
          <span className="input-border"></span>
        </div>
        <div className="form-input">
          <input
            className="input"
            name="UltimoPago"
            id="UltimoPago"
            placeholder="Ultimo pago recibido"
            required
            type="number"
            value={datosOficial.UltimoPago}
            onChange={(e) => onChangeData(e)}
          />
          <span className="input-border"></span>
        </div>
        <div className="form-input">
          <label htmlFor="">Registro de servicios</label>
          <input className="input" type="file" />
          <span className="input-border"></span>
        </div>
        <div className="buttons-container">
          <button
            className="button"
            onClick={() => {
              verificarServicio(datosOficial.Servicio);
            }}
          >
            <span className="button_top">Congelar</span>
          </button>
          <button
            className="button"
            onClick={() => {
              enviarDatos();
            }}
          >
            <span className="button_top">Ingresar</span>
          </button>
          <button
            className="button"
            onClick={() => {
              generateReport(
                datosOficial,
                "Constancia de pensión de Especialista"
              );
            }}
          >
            <span className="button_top">Generar PDF</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Formulario1;
