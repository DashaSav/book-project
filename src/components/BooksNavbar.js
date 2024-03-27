import { Navbar, Form, Button, Container, Stack, Col } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BooksNavbar() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const changeSearch = (e) => setSearchText(e.target.value);
  const handleSignInClick = () => navigate("/login");

  return (
    <>
      <Navbar expand="lg" className="bg-default">
        <Container>
          <Navbar.Brand href="/">Books</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Col xs={6}>
            <Form role="search">
              <Stack direction="horizontal">
                <Form.Control
                  className="me-2"
                  type="search"
                  value={searchText}
                  onChange={changeSearch}
                  placeholder="Найти книгу, автора..."
                  aria-label="Search"
                />
                <Button type="submit" variant="outline-primary">
                  Найти
                </Button>
              </Stack>
            </Form>
          </Col>

          <Button
            as="input"
            type="submit"
            value="Войти"
            onClick={handleSignInClick}
          />
        </Container>
      </Navbar>
    </>
  );
}
