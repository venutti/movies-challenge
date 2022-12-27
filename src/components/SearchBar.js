import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function SearchBar() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();

    if (keyword.length < 3) {
      swal({
        title: "Búsqueda inválida",
        text: "El texto de búsqueda debe tener más de 3 caracteres",
        icon: "warning",
      });
    } else {
      navigate(`/busqueda/${keyword}`);
    }

    e.target.keyword.value = "";
  };
  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <Form.Control
        type="search"
        placeholder="Buscar..."
        className="me-2"
        aria-label="Barra de busqueda"
        id="keyword"
      />
      <Button variant="outline-warning" type="submit">
        Buscar
      </Button>
    </Form>
  );
}
