import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './App.scss';

function App() {
  return (
    <>
      <body>
        <img />
        <h1>Create an account</h1>
        <p>Start your journey!</p>

        {/*Ввод имени*/}
        <Form.Label htmlFor="inputName">Name</Form.Label>
        <Form.Control type="email" placeholder="Enter your name" />

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
        <br />

        <Button as="input" type="button" value="Get started" />{' '}
        <br />
        <Button as="input" type="button" value="Sign up with Google" />{' '}
        <br />
        <p>Already have an account? <a href=''>Log in</a></p>
      </body>
    </>
  );
}

export default App;
