import { Button, Card, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function MainPage() {
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
            <h1>Популярные</h1>
            
        </>
    );
}

export default MainPage;