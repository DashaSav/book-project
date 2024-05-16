import { Stack } from "react-bootstrap";
import "../../styles/App.scss";
import Container from "react-bootstrap/Container";
import logo from "../../../assets/logoOwlBook.png";
import DefaultPageLayout from "./DefaultPage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserBooks } from "../../data/apiService";
import Book from "../components/Book";

export default function AuthorPage() {
  const { id } = useParams();
  const [books, setBooks] = useState<DBBook[]>([]);
  const [latestBook, setLatestBook] = useState<DBBook>();

  useEffect(() => {
    if (id === undefined) return;

    getUserBooks(id)
      .then((books) => {
        setBooks(books);
        setLatestBook(books[books.length - 1]);
      })
      .catch((e) => console.log(e));

    // getUserRating(id)
    //   .then((rating) => setRating(rating.grade))
    //   .catch((e) => console.log(e));
  }, [id]);

  return (
    <DefaultPageLayout>
      <Container className="content">
        <h2>{latestBook?.user.name ?? ""}</h2>

        <Stack className="w-25">
          <img src={logo} className="book-cover align-self-center" alt="logo" />

          <p>Количество книг: {books.length}</p>

          <p>
            Последняя книга: {latestBook?.title ?? ""} И дата публикации:
            {latestBook?.createdAt.toDateString() ?? ""}
          </p>
        </Stack>
        <Stack>
          <div className="flex-cont">
            {books.map((book) => (
              <Book book={book} />
            ))}
          </div>
        </Stack>
      </Container>
    </DefaultPageLayout>
  );
}
