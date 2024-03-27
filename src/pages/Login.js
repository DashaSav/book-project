import { Button, Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.scss';
import logo from '../images/logo owl book.png';
import { useState } from 'react';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeEmail = (e) => setEmail(e.target.value);
    const changePassword = (e) => setPassword(e.target.value);
    
    // TODO: add axios post request
    const handleSubmit = async () =>{
    const user = {
        email: email,
        password: password
    };
    try {
        const result = await axios.post("http://localhost:8080/auth/login", user);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
}

    return (
        <>
            <Stack className='my-cont'>
                <img src={logo} className="App-logo" alt="logo" />
                <div className='header'>
                    <h1>Log in to your account</h1>
                    <p>Welcome back! Please enter your details.</p>
                </div>

                <Form onSubmit={handleSubmit}>
                    {/*EMAIL*/}
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={email} onChange={changeEmail} type="email" placeholder="Enter your email" />
                    </Form.Group>

                    {/*Пароль*/}
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword"
                            value={password}
                            onChange={changePassword}
                            aria-describedby="passwordHelpBlock"
                            placeholder="Password"
                        />
                    </Form.Group>

                    <Form.Group className="remember">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>

                    { /* TODO: поменять на нормальную ссылку для сброса пароля */}
                    <a href='/' className='mb-2'>Forgot password</a>

                    <Stack className='mt-3'>
                        <Button className='mb-2' as="input" type="button" value="Sign in " />
                        <Button className='mb-2' as="input" type="button" value="Sign in with Google" />
                    </Stack>

                </Form>

                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </Stack>
        </>
    );
}

export default Login;
