import React from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import FavBadge from "../components/FavBadge";
import MovieCard from "../components/MovieCard";

export default function Favourites({ favs, toggleFav }) {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  if (token === null) {
    swal({
      title: "Permiso denegado",
      text: "Necesitas estar registrado para acceder a esta página",
      icon: "warning",
    }).then(() => {
      navigate("/");
    });
    return null;
  }

  return (
    <Container className="mb-3">
      <h2>Lista de Favoritos</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {favs.map((movie) => (
          <Col key={movie.id}>
            <MovieCard movie={movie}>
              <FavBadge
                toggleFav={() => toggleFav(movie)}
                isFav={favs.some((aMovie) => aMovie.id === movie.id)}
              />
            </MovieCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
