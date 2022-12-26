import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const formatOverview = (overview) => {
  if (overview.length <= 140) return overview;
  const temp = overview.substring(0, 140).split(" ");
  temp.pop();
  return temp.join(" ") + "...";
};

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=69fc259515129760c85662f08c141b6f&sort_by=popularity.desc&language=es-ES"
      )
      .then((res) => {
        const apiData = res.data.results;
        const moviesData = apiData.map((data) => {
          return {
            title: data.title,
            poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
            overview: data.overview,
            id: data.id,
          };
        });
        setMovies(moviesData);
      });
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
      <Row xs={2} md={3} lg={4} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Card bg="dark" text="light" className="h-100">
              <Card.Img variant="top" src={movie.poster} alt="Pelicula" />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{formatOverview(movie.overview)}</Card.Text>
                <NavLink
                  to={`/detalle/${movie.id}`}
                  className="btn btn-warning"
                >
                  Ver detalle
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
