import { Button, FormGroup, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../styles/App.scss";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import BooksNavbar from "../components/BooksNavbar";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value);
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);
  const changePasswordRepeat = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordRepeat(e.currentTarget.value);

  return (
    <>
      <BooksNavbar />

      <Container className="mt-5 d-flex w-50 align-content-center flex-wrap">
        <Stack direction="vertical" className="d-flex align-items-center">
          <h2 className="header">Добро пожаловать, Иван Иванов</h2>
          <Container className="UserInformation">
            <FormGroup className="mb-2" controlId="formName">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                value={name}
                onChange={changeName}
                type="text"
                placeholder="Имя или ник"
              />
            </FormGroup>
            <FormGroup className="mb-2" controlId="formEmail">
              <Form.Label>Почта</Form.Label>
              <Form.Control
                value={email}
                onChange={changeEmail}
                type="email"
                placeholder="Ваша почта"
              />
            </FormGroup>
            <FormGroup className="mb-2" controlId="formPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                className="mb-2"
                value={password}
                onChange={changePassword}
                type="password"
                placeholder="Введите новый пароль"
              />
              <Form.Control
                className="mb-2"
                value={passwordRepeat}
                onChange={changePasswordRepeat}
                type="password"
                placeholder="Подтвердите новый пароль"
              />
            </FormGroup>
          </Container>
          <Button
            className="save mt-2"
            as="input"
            type="submit"
            value="Сохранить"
          />
        </Stack>
      </Container>
    </>
  );
}
