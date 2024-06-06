import { Navbar, Form, Button, Stack, Col, Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Routes from "../../app/routes";
import { searchAuthors, searchBooks } from "../../data/apiService";

export default function BooksNavbar() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.currentTarget.value);

  const handleLoginClick = () => navigate(Routes.login);
  const handleSearchClick = async () => {
    try {
      const books = await searchBooks(searchText);
      const authors = await searchAuthors(searchText);

      console.log(books);
      console.log(authors);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-default">
        <Container className="px-5" fluid>
          <Navbar.Brand className="brand" href="/">
            Books
          </Navbar.Brand>
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
                <Button
                  type="button"
                  variant="outline-primary"
                  onClick={handleSearchClick}
                >
                  Найти
                </Button>
              </Stack>
            </Form>
          </Col>

          <Button
            as="input"
            type="submit"
            value="Войти"
            onClick={handleLoginClick}
          />
        </Container>
      </Navbar>
    </>
  );
}
