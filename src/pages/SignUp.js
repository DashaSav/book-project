import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './App.scss';

function SignUp() {
  return (
    <>
        <img />
        <h1>Log in to your account</h1>
        <p>Welcome back! Please enter your details.</p>

        {/*EMAIL*/}
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
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and numbers,
          and must not contain spaces, special characters, or emoji.
        </Form.Text>
        
        <Form.Group className="remember">
        <Form.Check type="checkbox" label="Remember me" disabled />
        </Form.Group>

        <a href=''>Forgot password</a>

        <Button as="input" type="button" value="Sign in " />{' '}
        <br />
        <Button as="input" type="button" value="Sign in with Google" />{' '}
        <br />
        <p>Don't have an account? <a href=''>Sign up</a></p>
    </>
  );
}

export default App;
