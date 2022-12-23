import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Listado from "./components/Listado";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </>
  );
}
