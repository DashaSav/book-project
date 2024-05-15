import { Button, Stack } from "react-bootstrap";
import "../../styles/App.scss";
import Container from "react-bootstrap/Container";
import logo from "../../../assets/logoOwlBook.png";
import DefaultPageLayout from "../pages/DefaultPage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBook, getBooks } from "../../data/apiService";
import Book from "../components/Book";

export default function AutorPage() {
  const { id } = useParams();
  const [books, setBooks] = useState<DBBook[]>([]);
  const [book, setBook] = useState<DBBook>();

  useEffect(() => {
    if (id === undefined) return;

    getBooks()
      .then((books) => setBooks(books))
      .catch((e) => console.log(e));

    getBook(id)
      .then((fetched) => setBook(fetched))
      .catch((e) => console.log(e));
    // getUserRating(id)
    //   .then((rating) => setRating(rating.grade))
    //   .catch((e) => console.log(e));
  }, [id]);

  return (
    <DefaultPageLayout>
      <Container className="content">
        <Stack>
          <p>Страница автора: {book?.user.name ?? "Не указан"}</p>
        </Stack>
        <Stack className="w-25">
          <img src={logo} className="book-cover align-self-center" alt="logo" />

          <p>Количество книг: {book?.user.name ?? "Не указан"}</p>
          <p>
            Самая популярная книга: {book?.user.name ?? "Не указан"} И дата
            публикации:
            {book?.user.name ?? "Не указан"}{" "}
          </p>
          <p>
            Последняя книга: {book?.user.name ?? "Не указан"} И дата публикации:
            {book?.user.name ?? "Не указан"}
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
