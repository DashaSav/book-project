import { Button, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.scss';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import BooksNavbar from '../components/BooksNavbar';

export default function Profile() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const changeEmail = (e) => setEmail(e.target.value);
    const changePassword = (e) => setPassword(e.target.value);
    const changeName = (e) => setName(e.target.value);
    const changePasswordRepeat = (e) => setPasswordRepeat(e.target.value);
    
    return (
        <>
            <BooksNavbar />

            <Container className='content'>
                <h2>Добро пожаловать, Иван Иванов</h2>
                <Container className='UserInformation'>
                    <FormGroup controlId="formName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control value={name} onChange={changeName} type="text" placeholder="Имя или ник" />
                    </FormGroup>
                    <FormGroup controlId="formEmail">
                        <Form.Label>Почта</Form.Label>
                        <Form.Control value={email} onChange={changeEmail} type="email" placeholder="Ваша почта" />
                    </FormGroup>
                    <FormGroup controlId="formPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control value={password} onChange={changePassword} type="password" placeholder="Введите новый пароль" />
                        <Form.Control value={passwordRepeat} onChange={changePasswordRepeat} type="password" placeholder="Подтвердите новый пароль" />
                    </FormGroup>

                </Container>
                <Button className='mb-2' as="input" type="submit" value="Сохранить" />
            </Container>
        </>
    );
}

