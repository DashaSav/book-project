import { Button, InputGroup, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState, FloatingLabel } from 'react';

export default function Profile() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepit, setPasswordRepit] = useState("");

    const changeEmail = (e) => setEmail(e.target.value);
    const changePassword = (e) => setPassword(e.target.value);
    const changeName = (e) => setName(e.target.value);
    const changepasswordRepit = (e) => setPasswordRepit(e.target.value);
    return (
        <>
            <Navbar expand="lg" className="nav-books">
                <Container>
                    <Navbar.Brand href="#home">Books</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <InputGroup className="mb-2 me-3">
                        <Form.Control
                            placeholder="Найти книгу или автора"
                            aria-describedby="search books or authors"
                        />
                        <Button className='mb-2' as="input" type="submit" variant="outline-primary" value="Найти" />
                    </InputGroup>

                    <Button className='mb-2' as="input" type="submit" value="Войти" />
                </Container>
            </Navbar>
            <Container className='content'>
                <h2>Добро пожаловать, Иван Иванов</h2>
                <Container className='UserInformation'>
                    <FormGroup controlId="formName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control value={name} onChange={changeName} type="text" placeholder="Имя или ник" />
                    </FormGroup>
                    <FormGroup controlId="formEmail">
                        <Form.Label>Почта</Form.Label>
                        <Form.Control value={email} onChange={changeName} type="email" placeholder="Ваша почта" />
                    </FormGroup>
                    <FormGroup controlId="formPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control value={password} onChange={changeName} type="password" placeholder="Введите новый пароль" />
                        <Form.Control value={passwordRepit} onChange={changeName} type="password" placeholder="Подтвердите новый пароль" />
                    </FormGroup>

                </Container>
                <Button className='mb-2' as="input" type="submit" value="Сохранить" />
            </Container>
        </>

    );

}

