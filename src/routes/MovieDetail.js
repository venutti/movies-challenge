import React, { useState, useEffect } from "react";
// components
import { Card, Col, Container, Image, Row } from "react-bootstrap";
// services
import { NavLink, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { getMovieDetail } from "../services/moviesApi";

export default function MovieDetail() {
  const { movieID } = useParams();
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    getMovieDetail(movieID)
      .then((data) => setMovieDetail(data))
      .catch((error) => {
        console.log(error);
        swal({
          title: "Ocurrió un error",
          text: "La página solicitada no existe",
          icon: "error",
        }).then(() => navigate("/listado"));
      });
  }, [movieID, navigate]);

  if (!movieDetail) return null;

  return (
    <Container>
      <Card className="mb-3 bg-dark text-light">
        <Row className="g-3 p-3">
          <Col md={4}>
            <Image src={movieDetail.poster} fluid />
          </Col>
          <Col md={8}>
            <Card.Header>
              <Card.Title>{movieDetail.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {movieDetail.tagline}
              </Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <Card.Text>{movieDetail.overview}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text>
                <span className="text-warning">Fecha de estreno: </span>
                {movieDetail.releaseDate.split("-").reverse().join("/")}
                <br />
                <span className="text-warning">Duración: </span>
                {movieDetail.runtime} minutos
                <br />
                <span className="text-warning">Puntuación: </span>
                {movieDetail.rating} / 10
              </Card.Text>
              <NavLink to="/listado" className="btn btn-warning">
                Volver al listado
              </NavLink>
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
