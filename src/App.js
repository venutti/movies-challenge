import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import Login from "./components/Login";
import MovieDetail from "./components/MovieDetail";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listado" element={<MoviesList />} />
        <Route path="/detalle/:movieID" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
