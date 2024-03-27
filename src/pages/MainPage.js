import "../styles/App.scss";
import Book from "../components/Book";
import BooksNavbar from "../components/BooksNavbar";
import { Container } from "react-bootstrap";

function MainPage() {
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
