import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar2";
import "../styles/home.css";

//Nota: debe cambiarse la ruta para la petición al backend

function Home() {
  const backend = import.meta.env.VITE_BACKEND;
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [data, setdata] = useState({
    total: 0,
    oficiales: 0,
    especialistas: 0,
  });

  const getData = async () => {
    try {
      const response = await fetch(`${backend}/ingreso/estadisticas`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //token: localStorage.token,
        },
      });
      const resJson = await response.json();
      setdata(resJson);
      console.log("Datos del resJson: ", resJson);
      console.log("Datos del state: ", data);
    } catch (err) {
      console.log(err.massage);
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
        } else
          toast(`Hola ${data.user} 🦄`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
    getData();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <>
      <Navbar />
      <div className="inicio">
        <div className="estadisticas">
          <h1 className="titulo-dashboard">Estadisticas de los registros</h1>
          <h2 className="label-estadisticas">
            Cantidad de archivos {data.total}
          </h2>
          <h2 className="label-estadisticas">
            Cantidad de oficiales ingresados {data.oficiales}
          </h2>
          <h2 className="label-estadisticas">
            Cantidad de especialistas ingresados {data.especialistas}
          </h2>
        </div>
        <div className="button-container-inicio">
          <button onClick={logOut} className="button-cerrar">
            <span className="button_top-cerrar"> Cerrar Sesion</span>
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Home;
