import { useEffect, useState } from "react";
import { getBooks } from "../../data/apiService";
import DefaultPageLayout from "./DefaultPage";
import { Stack } from "react-bootstrap";
import Book from "../components/Book";

export default function MyBooks() {
  const [books, setBooks] = useState<DBBook[]>([]);

  useEffect(() => {
    getBooks()
      .then((books) => setBooks(books))
      .catch((e) => console.log(e));
  }, [books]);
  return (
    <>
      <DefaultPageLayout>
        <h4 className="mb-2 mt-2">Мои книги</h4>
        <Stack direction="horizontal">
          {books.map((book) => (
            <Book book={book} />
          ))}
        </Stack>
      </DefaultPageLayout>
    </>
  );
}
