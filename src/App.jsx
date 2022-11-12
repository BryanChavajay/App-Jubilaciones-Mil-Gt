import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Acerca from "./pages/Acerca";
import Ayuda from "./pages/Ayuda";
import Form1 from "./pages/Formulario1";
import Form2 from "./pages/Formulario2";
import Informacion from "./pages/Informacion";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Acerca />} />
        <Route exact path="/Ayuda" element={<Ayuda />} />
        <Route exact path="/Informacion" element={<Informacion />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/oficial" element={<Form1 />} />
        <Route exact path="/especialista" element={<Form2 />} />
        {/* <Route exact path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
