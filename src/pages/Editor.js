import { Button, InputGroup, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Editor() {
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
                <h2>Добавить новую часть</h2>
                <Container className='chapterName'>
                    <h3>Название части</h3>
                    <FloatingLabel
                        controlId="Chapter"
                        label="Chapter"
                        className="mb-3">
                        <Form.Control as="textarea" placeholder="Часть 1" />
                    </FloatingLabel>

                </Container>
                <Container className='inputText'>
                    <h3>Текстовый редактор</h3>
                    <FloatingLabel
                        controlId="chapterText"
                        label="Chapter"
                        className="mb-3">
                        <Form.Control as="textarea" placeholder="Здесь будет текст вашей книги" />
                    </FloatingLabel>

                </Container>
                <Container className='authorComment'>
                    <h3>Комментарий к части</h3>
                    <FloatingLabel
                        controlId="Comment"
                        label="Comment"
                        className="mb-3">
                        <Form.Control as="textarea" placeholder="Комментарий к части" />
                    </FloatingLabel>

                </Container>
                <Button className='mb-2' as="input" type="button" value="Сохранить и перейти к публикации" />
            </Container>
        </>
    );
}