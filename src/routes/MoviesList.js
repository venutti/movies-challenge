import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import FavBadge from "../components/FavBadge";
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../services/moviesApi";

export default function MoviesList({ favs, toggleFav }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="mb-3">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {movies.map((movie) => (
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
