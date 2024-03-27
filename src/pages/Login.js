import { Button, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../styles/App.scss";
import logo from "../images/logo owl book.png";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => setEmail(e.target.value);

  const changePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async () => {
    const user = {
      email: email,
      password: password,
    };

    try {
      const result = await axios.post("http://localhost:8080/auth/login", user);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Stack className="my-cont">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="header">
          <h2>Войдите в свой аккаунт</h2>
          <p>С возвращением! Пожалуйста, введите свои данные</p>
        </div>

        <Form onSubmit={handleSubmit}>
          {/*EMAIL*/}
          <Form.Group className="mb-2" controlId="formEmail">
            <Form.Label>Почта</Form.Label>
            <Form.Control
              value={email}
              onChange={changeEmail}
              type="email"
              placeholder="Введите вашу почту"
            />
          </Form.Group>

          {/*Пароль*/}
          <Form.Group className="mb-2" controlId="formPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword"
              value={password}
              onChange={changePassword}
              aria-describedby="passwordHelpBlock"
              placeholder="Введите ваш пароль"
            />
          </Form.Group>

          <Form.Group className="remember">
            <Form.Check type="checkbox" label="Запомнить меня" />
          </Form.Group>

          {/* TODO: поменять на нормальную ссылку для сброса пароля */}
          <a href="/" className="mb-2">
            Забыл(а) пароль
          </a>

          <Stack className="mt-3">
            <Button className="mb-2" as="input" type="button" value="Войти" />
            <Button
              className="mb-2"
              as="input"
              type="button"
              value="Войти с помощью Google"
            />
          </Stack>
        </Form>

        <p>
          Нет аккаунта? <a href="/signup">Зарегистрироваться</a>
        </p>
      </Stack>
    </>
  );
}

export default Login;
