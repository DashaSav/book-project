import "../styles/App.scss";
import Book from "../components/Book";
import BooksNavbar from "../components/BooksNavbar";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function MainPage() {
  const [books, setBooks] = useState();
  useEffect(() => {
        axios.get("http://localhost:8080/books")
        .then((response) => {
          const result = response.data["_embedded"]["books"];
          setBooks(result);
        })
        .catch((error) => console.log(error));
 })
  return (
    <>
      <BooksNavbar />
      <Container>
        <h4 className="mb-2 mt-2">Популярные</h4>

        <Book />
      </Container>
    </>
  );
}

export default MainPage;
