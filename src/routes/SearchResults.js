import React, { useEffect, useState } from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
// services
import { useParams } from "react-router-dom";
import { searchMovies } from "../services/moviesApi";

export default function SearchResults() {
  const { keyword } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(keyword)
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, [keyword]);

  return (
    <Container className="mb-3">
      <h4>
        Resultados para: <em>{keyword}</em>
      </h4>
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
