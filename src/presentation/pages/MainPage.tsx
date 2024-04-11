import "../styles/App.scss";
import Book from "../components/Book";
import BooksNavbar from "../components/BooksNavbar";
import { Container, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getBooks } from "../../data/apiService";

function MainPage() {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    getBooks()
      .then((books) => setBooks(books))
      .catch((e) => console.log(e));
  }, [books]);

  return (
    <>
      <BooksNavbar />
      <Container>
        <h4 className="mb-2 mt-2">Популярные</h4>
        <Stack direction="horizontal">
          {books.map((book) => (
            <Book book={book} />
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default MainPage;
