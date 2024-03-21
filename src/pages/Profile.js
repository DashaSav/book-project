import { Button, Stack, Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.scss';

function SignUp() {
    return (
        <>
            <Navbar></Navbar>

            <Stack className='body'>
                <div className='header'>
                    <h1>Добро пожаловать,</h1>
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
