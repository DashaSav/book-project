import { Button, FormGroup, Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.scss';
import logo from '../images/logo owl book.png';
import { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const changeName = (e) => setName(e.target.value);

  // TODO: add axios post request

  return (
    <>
      <Stack className='my-cont'>
        <img src={logo} className="App-logo" alt="logo"/>
        <div className='header'>
          <h1>Create an account</h1>
          <p>Start your journey!</p>
        </div>

        {/*Ввод имени*/}
        <Form method='POST'>
          <FormGroup controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} onChange={changeName} type="text" placeholder="Enter your name" />
          </FormGroup>

          {/*EMAIL*/}
          <FormGroup controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control value={email} onChange={changeEmail} type="email" placeholder="Enter your email" />
          </FormGroup>

          {/*Пароль*/}
          <FormGroup controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="inputPassword"
              value={password}
              onChange={changePassword}
              type="password"
              aria-describedby="passwordHelpBlock"
              placeholder="Password"
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and numbers,
              and must not contain spaces, special characters, or emoji.
            </Form.Text>
          </FormGroup>
          <br />

          <Stack className='mt-2'>
            <Button className='mb-2' as="input" type="submit" value="Get started" />
            <Button as="input" type="submit" value="Sign up with Google" />
          </Stack>
        </Form>
        
        <p className='footer'>Already have an account? <a href="/login">Log in</a></p>
      </Stack>
    </>
  );
}

export default SignUp;
