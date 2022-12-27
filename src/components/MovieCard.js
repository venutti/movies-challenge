import React from "react";

import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const formatOverview = (overview) => {
  if (overview.length <= 140) return overview;
  const temp = overview.substring(0, 140).split(" ");
  temp.pop();
  return temp.join(" ") + "...";
};

export default function MovieCard({ movie }) {
  return (
    <Card bg="dark" text="light" className="h-100">
      <Card.Img
        variant="top"
        src={movie.poster}
        alt={`Poster de ${movie.title}`}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{formatOverview(movie.overview)}</Card.Text>
        <NavLink to={`/detalle/${movie.id}`} className="btn btn-warning">
          Ver detalle
        </NavLink>
      </Card.Body>
    </Card>
  );
}
