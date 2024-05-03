import { Alert, Button, FormGroup, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../styles/App.scss";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import DefaultPageLayout from "./DefaultPage";
import { getUser } from "../../data/apiService";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [username, setUsername] = useState("Иван Иванов");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  //const [username, setUsername] = useState();
  const { id } = useParams();

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value);
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);
  const changePasswordRepeat = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordRepeat(e.currentTarget.value);
  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.currentTarget.value);

  useEffect(() => {
    if (id == undefined) return;

    getUser(id)
      //.then((fetched) => setUsername(fetched))
      .catch((e) => console.log(e));
  }, []);

  return (
    <DefaultPageLayout>
      <Container className="mt-5 d-flex w-50 align-content-center flex-wrap">
        <Stack direction="vertical" className="d-flex align-items-center">
          <h2 className="header">Добро пожаловать, {username}</h2>
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
          <Button
            className="mt-2"
            as="input"
            variant="danger"
            value="Удалить профиль"
          />
        </Stack>
      </Container>
    </DefaultPageLayout>
  );
}
