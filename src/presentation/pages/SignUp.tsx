import { Button, FormGroup, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../styles/App.scss";
import logo from "../../assets/logoOwlBook.png";
import { useState } from "react";
import { register } from "../../data/apiService";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value);
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);

  const resetStates = () => {
    setEmail("");
    setPassword("");
    setName("");
  };

  const handleSignup = async () => {
    try {
      const result = await register(name, email, password);

      if (result.status >= 200 && result.status < 300) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      resetStates();
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
        <Form>
          <FormGroup className="mb-2">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              name="userName"
              value={name}
              onChange={changeName}
              type="text"
              placeholder="Введите имя"
            />
          </FormGroup>

          {/*EMAIL*/}
          <FormGroup className="mb-2">
            <Form.Label>Почта</Form.Label>
            <Form.Control
              name="userEmail"
              value={email}
              onChange={changeEmail}
              type="email"
              placeholder="Введите почту"
            />
          </FormGroup>

          {/*Пароль*/}
          <FormGroup className="mb-4">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              name="userPassword"
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
              onClick={handleSignup}
              type="button"
              value="Зарегистрироваться"
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
