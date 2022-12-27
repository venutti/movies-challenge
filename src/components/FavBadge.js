import React from "react";
import { Button } from "react-bootstrap";

export default function FavBadge({ isFav, toggleFav }) {
  return (
    <Button
      variant={isFav ? "warning" : "light"}
      className="position-absolute rounded-circle border border-dark end-0 fav-button"
      onClick={toggleFav}
    ></Button>
  );
}
