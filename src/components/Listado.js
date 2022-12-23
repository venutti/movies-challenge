import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function Listado() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
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
  return <div>Listado</div>;
}
