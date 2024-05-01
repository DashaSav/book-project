import "../styles/App.scss";
import Book from "../components/Book";
import { useEffect, useState } from "react";
import { getBooks } from "../../data/apiService";
import DefaultPageLayout from "./DefaultPage";

function MainPage() {
  const [books, setBooks] = useState<DBBook[]>([]);

  useEffect(() => {
    getBooks()
      .then((books) => setBooks(books))
      .catch((e) => console.log(e));
  }, []);

  return (
    <DefaultPageLayout>
      <h4 className="mb-2 mt-2">Популярные</h4>
      <div className="flex-cont">
        {books.map((book) => (
          <Book book={book} />
        ))}
      </div>
    </DefaultPageLayout>
  );
}

export default MainPage;
