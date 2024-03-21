import { Button, Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.scss';
import logo from '../images/logo owl book.png';

function SignUp() {
  return (
    <>
        <Stack className='body'>
          <img src={logo} className="App-logo" alt="logo"/>
          <div className='header'>
            <h1>Log in to your account</h1>
            <p>Welcome back! Please enter your details.</p>
          </div>

          {/*EMAIL*/}
          <Form>
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />

            {/*Пароль*/}
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Password"
            />
            
            <Form.Group className="remember">
            <Form.Check type="checkbox" label="Remember me" disabled />
            </Form.Group>
          </Form>

          <a href=''>Forgot password</a>

          <div className='btn'>
          <Button as="input" type="button" value="Sign in " />{' '}
          <Button as="input" type="button" value="Sign in with Google" />{' '}
          </div>

          <p>Don't have an account? <a href="../App.js">Sign up</a></p>
        </Stack>
    </>
  );
}

export default SignUp;
