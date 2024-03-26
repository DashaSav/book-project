import { Button, InputGroup, FloatingLabel, Form } from 'react-bootstrap';
import '../App.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function AddBook() {
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
                <h2>Добавить новую книгу</h2>
                <Container className='inputText'>
                    <h3>Текстовый редактор</h3>
                    <FloatingLabel
                        controlId="chapterText"
                        label="Chapter"
                        className="mb-3">
                        <Form.Control as="textarea" placeholder="Введите название книги" />
                    </FloatingLabel>
                </Container>
            </Container>
        </>
    );
}
