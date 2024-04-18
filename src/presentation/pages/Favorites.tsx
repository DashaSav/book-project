import { useEffect, useState } from "react";
import DefaultPageLayout from "./DefaultPage";
import { Stack } from "react-bootstrap";
import { getFavorites } from "../../data/apiService";
import Book from "../components/Book";

export default function Favorites() {
  const [books, setBooks] = useState<DBBook[]>([]);

  useEffect(() => {
    getFavorites()
      .then((books) => setBooks(books))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <DefaultPageLayout>
        <h4 className="mb-2 mt-2">Мое избранное:</h4>
        <Stack direction="horizontal">
          {books.map((book) => (
            <Book book={book} />
          ))}
        </Stack>
      </DefaultPageLayout>
    </>
  );
}
