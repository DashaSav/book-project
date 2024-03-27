import { Button, FormGroup, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../styles/App.scss";
import logo from "../images/logo owl book.png";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const changeName = (e) => setName(e.target.value);

  const handleSubmit = async () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const result = await axios.post(
        "http://localhost:8080/auth/register",
        user,
      );

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
          <h2>Создайте аккаунт</h2>
          <p>Начните ваше погружение!</p>
        </div>

        {/*Ввод имени*/}
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-2" controlId="formName">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              value={name}
              onChange={changeName}
              type="text"
              placeholder="Введите имя"
            />
          </FormGroup>

          {/*EMAIL*/}
          <FormGroup className="mb-2" controlId="formEmail">
            <Form.Label>Почта</Form.Label>
            <Form.Control
              value={email}
              onChange={changeEmail}
              type="email"
              placeholder="Введите почту"
            />
          </FormGroup>

          {/*Пароль*/}
          <FormGroup className="mb-4" controlId="formPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              id="inputPassword"
              value={password}
              onChange={changePassword}
              type="password"
              aria-describedby="passwordHelpBlock"
              placeholder="Введите пароль"
            />
            <Form.Text id="passwordHelpBlock" muted>
              Ваш пароль должен состоять из 8-20 символов, содержать буквы и
              цифры, и не должен содержать пробелов или эмодзи.
            </Form.Text>
          </FormGroup>

          <Stack className="mt-2">
            <Button
              className="mb-2"
              as="input"
              type="submit"
              value="Зарегистрироваться"
            />
            <Button
              as="input"
              type="submit"
              value="Зарегистрироваться через Google"
            />
          </Stack>
        </Form>

        <p className="footer">
          Уже есть аккаунт? <a href="/login">Войти</a>
        </p>
      </Stack>
    </>
  );
}

export default SignUp;
