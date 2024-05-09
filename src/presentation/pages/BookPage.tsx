import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../styles/App.scss";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logoOwlBook.png";
import StarRating from "../components/StarRating";
import Comment from "../components/Comment";
import DefaultPageLayout from "./DefaultPage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  addComment,
  getBook,
  getChapters,
  getCommentsByBook,
} from "../../data/apiService";
import Chapter from "../components/Chapter";

export default function BookPage() {
  const { id } = useParams();

  const [book, setBook] = useState<IBook>();
  const [chapters, setChapters] = useState<DBChapter[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [userComment, setUserComment] = useState("");

  useEffect(() => {
    if (id === undefined) return;

    getBook(id)
      .then((fetched) => setBook(fetched))
      .catch((e) => console.log(e));

    getCommentsByBook(id)
      .then((fetched) => setComments(fetched))
      .catch((e) => console.log(e));

    getChapters(id)
      .then((chapters) => setChapters(chapters))
      .catch((e) => console.log(e));
  }, []);

  const handleChapterDelete = (id: string) => {
    const newChapters = chapters.filter((item) => item._id !== id);
    setChapters(newChapters);
  };
  const handleChapterEdit = (id: string) => {
    const newChapters = chapters.filter((item) => item._id !== id);
    setChapters(newChapters);
  };

  const changeUserComment = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserComment(e.currentTarget.value);

  const submitComment = () => {
    if (id === undefined) return;

    addComment(id, userComment);
  };

  return (
    <DefaultPageLayout>
      <Container>
        <h2>{book?.title ?? "Название книги"}</h2>
        <Container>
          <img src={logo} className="book-cover" alt="logo" />
          <StarRating initialValue={0}></StarRating>
          <h2>Содержание</h2>
          <p>Главы:</p>
          {/* Тут будет список глав*/}
          <div className="flex-cont">
            {chapters.map((chapter) => (
              <Chapter chapter={chapter} />
            ))}
          </div>
        </Container>
        <Container className="AboutBook">
          <p>
            Содержание книги: {book?.summary ?? "Тут должно быть содержание"}
          </p>
          <p>Автор книги: {book?.user.name ?? "Не указан"}</p>
          <p>Метки: {book?.tags ?? "Не указан"}</p>
          <p>Возрастное ограничение: {book?.ageRestriction ?? "Не указано"}</p>
          <p>Жанры: </p>
          <p>Статус: </p>
          <p>Дата публикации: </p>
          <p>
            Комментарий автора к книге:{" "}
            {book?.commentRestriction ?? "Не указан"}
          </p>
        </Container>
        <Container className="Comments">
          <h2>Комментарии</h2>
          <Form.Control
            className="mb-2"
            as="textarea"
            placeholder="Введите ваш комментарий"
            style={{ height: "100px" }}
            value={userComment}
            onChange={changeUserComment}
          />
          <Button
            className="mb-2"
            as="input"
            type="button"
            value="Отправить"
            onClick={submitComment}
          />
          {/* Тут будет список комментариев*/}
          {comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </Container>
      </Container>
    </DefaultPageLayout>
  );
}
