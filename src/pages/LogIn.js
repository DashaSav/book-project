import { Button, Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.scss';
import logo from '../images/logo owl book.png';


function App() {
  return (
    <>
      <Stack className='body'>
        <img src={logo} className="App-logo" alt="logo"/>
        <div className='header'>
          <h1>Create an account</h1>
          <p>Start your journey!</p>
        </div>

        {/*Ввод имени*/}
        <Form>
        <Form.Label htmlFor="inputName">Name</Form.Label>
        <Form.Control type="emailт  " placeholder="Enter your name" />

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
        </Form>
        <br />

        <div className='btn'>
          <Button as="input" type="button" value="Get started" />{' '}
          <Button as="input" type="button" value="Sign up with Google" />{' '}
        </div>

        <p className='footer'>Already have an account? <a href="../SignUp.js">Log in</a></p>
      </Stack>
    </>
  );
}

export default App;
