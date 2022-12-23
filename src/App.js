import React from "react";
import { Route, Routes } from "react-router-dom";
import Listado from "./components/Listado";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </>
  );
}
