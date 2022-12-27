import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../services/moviesApi";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.log(error));
  }, []);

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
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
