import { Navbar, Form, Button, InputGroup, Container } from "react-bootstrap"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function BooksNavbar() {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");

    const changeSearch = e => setSearchText(e.target.value);
    const handleSignInClick = () => navigate("/login");
    
    return (
        <>
            <Navbar expand="lg" className="nav-books">
                <Container>
                    <Navbar.Brand href="/">Books</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <InputGroup className="mb-2 me-3">
                        <Form.Control
                            value={searchText}
                            onChange={changeSearch}
                            placeholder="Найти книгу или автора"
                            aria-describedby="search books or authors"
                        />
                        <Button className='mb-2' as="input" type="submit" variant="outline-primary" value="Найти" />
                    </InputGroup>

                    <Button className='mb-2' as="input" type="submit" value="Войти" onClick={handleSignInClick} />
                </Container>
            </Navbar>
        </>
    )
}
