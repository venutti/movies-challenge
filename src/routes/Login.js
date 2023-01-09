import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const validateEmail = (email) => email.match(emailRegex);

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.loginEmail.value;
    const password = e.target.loginPassword.value;

    // Validacion
    if (!email || !password) {
      swal({
        title: "Campos vacíos",
        text: "No puedes dejar campos en blanco",
        icon: "error",
      });
      return;
    }
    if (!validateEmail(email)) {
      swal({
        title: "Email incorrecto",
        text: "Debes ingresar un email de la forma example@example.com",
        icon: "error",
      });
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      swal({
        title: "Credenciales incorrectas",
        text: "Los datos ingresados son incorrectos",
        icon: "error",
      });
      return;
    }

    swal({
      title: "Ingreso exitoso",
      text: `¡Bienvenido ${email}!`,
      icon: "success",
    }).then(() => {
      sessionStorage.setItem("token", "abc123");
      navigate("/listado");
    });

    // axios
    //   .post("http://challenge-react.alkemy.org", { email, password })
    //   .then((res) => {
    //     // Persistencia del token
    //     sessionStorage.setItem("token", res.data.token);
    //     swal({
    //       title: "Ingreso exitoso",
    //       text: `¡Bienvenido ${email}!`,
    //       icon: "success",
    //     }).then(() => {
    //       navigate("/listado");
    //     });
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     swal("Uups!", "Ocurrió un error con tus credenciales", "error");
    //   });
  };

  return (
    <Container className="login-form mb-3">
      <h1>Iniciar sesión</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button type="submit" variant="warning">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
}
