import React from "react";
import { Route, Routes } from "react-router-dom";
// components
import Footer from "./components/Footer";
import Header from "./components/Header";
// routes
import MoviesList from "./routes/MoviesList";
import Login from "./routes/Login";
import MovieDetail from "./routes/MovieDetail";
import SearchResults from "./routes/SearchResults";
import Favourites from "./routes/Favourites";
// hooks
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [favs, setFavs] = useLocalStorage("favs", []);

  const toggleFav = (aMovie) => {
    if (favs.some((movie) => movie.id === aMovie.id)) {
      setFavs(favs.filter((movie) => movie.id !== aMovie.id));
    } else {
      setFavs([...favs, aMovie]);
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/listado"
          element={<MoviesList favs={favs} toggleFav={toggleFav} />}
        />
        <Route path="/detalle/:movieID" element={<MovieDetail />} />
        <Route path="/busqueda/:keyword" element={<SearchResults />} />
        <Route
          path="/favoritos"
          element={<Favourites favs={favs} toggleFav={toggleFav} />}
        />
      </Routes>
      <Footer />
    </>
  );
}
