import "../styles/App.scss";
import Book from "../components/Book";
import { useEffect, useState } from "react";
import { getBookRating, getBooks } from "../../data/apiService";
import DefaultPageLayout from "./DefaultPage";

function MainPage() {
  const [books, setBooks] = useState<DBBook[]>([]);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    getBooks()
      .then((books) => setBooks(books))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const func = async () => {
      try {
        const newRatings = new Map<string, number>();

        for (const b of books) {
          const r = await getBookRating(b._id);
          newRatings.set(b._id, r.rating);
        }

        setRatings(newRatings);
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);

  return (
    <DefaultPageLayout>
      <h4 className="mb-2 mt-2">Популярные</h4>
      <div className="flex-cont">
        {books.map((book) => (
          <Book book={book} rating={ratings.get(book._id)} />
        ))}
      </div>
    </DefaultPageLayout>
  );
}

export default MainPage;
