import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, CardGroup, Col, Container, Image, Row } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

export default function MovieDetail() {
  const { movieID } = useParams();
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=69fc259515129760c85662f08c141b6f&language=es-ES`
      )
      .then((res) => {
        const genres = res.data.genres.map((genre) => genre.name);
        const overview = res.data.overview;
        const poster = `https://image.tmdb.org/t/p/w500${res.data.poster_path}`;
        const releaseDate = res.data.release_date;
        const runtime = res.data.runtime;
        const title = res.data.title;
        const tagline = res.data.tagline;
        const rating = res.data.vote_average;

        setMovieDetail({
          genres,
          overview,
          poster,
          releaseDate,
          runtime,
          title,
          tagline,
          rating,
        });
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Ocurrió un error",
          text: "La página solicitada no existe",
          icon: "error",
        }).then(() => navigate("/listado"));
      });
  }, [movieID]);

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
