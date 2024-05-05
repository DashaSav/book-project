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
import { addComment, getBook, getCommentsByBook } from "../../data/apiService";

export default function BookPage() {
  const { id } = useParams();

  const [book, setBook] = useState<IBook>();
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
  });

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
          <StarRating initialValue={3}></StarRating>
          <h2>Содержание</h2>
          <h5>Тут как то сделать список глав с ссылками</h5>
        </Container>
        <Container className="AboutBook">
          <p>
            {book?.summary ??
              "Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          </p>
          <p>{book?.user.name ?? "Автор книги"}</p>
          <p>Персонажи</p>
          <p>Возрастное ограничение</p>
          <p>Жанры</p>
          <p>Статус</p>
          <p>Дата публикации</p>
          <p>Метки</p>
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
          <h2>Тут будет список комментариев</h2>

          {comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </Container>
      </Container>
    </DefaultPageLayout>
  );
}
