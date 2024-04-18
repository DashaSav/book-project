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
import { getBook } from "../../data/apiService";

export default function BookPage() {
  const { id } = useParams();

  const [book, setBook] = useState<IBook>();

  const exampleComment: IComment = {
    author: "string",
    description: "string",
    likes: 1,
  };

  useEffect(() => {
    if (id == undefined) return;

    getBook(id)
      .then((fetched) => setBook(fetched))
      .catch((e) => console.log(e));
  }, []);

  return (
    <DefaultPageLayout>
      <Container>
        <h2>{book?.title ?? "Название книги"}</h2>
        <Container className="imgRating">
          <img src={logo} alt="logo" />
          <StarRating initialValue={3}></StarRating>
          <h2>Содержание</h2>
          <h5>Тут как то сделать список глав с ссылками</h5>
        </Container>
        <Container className="AboutBook">
          <p>
            {book?.description ??
              "Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          </p>
          <p>{book?.author ?? "Автор книги"}</p>
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
          />
          <Button className="mb-2" as="input" type="button" value="Отправить" />
          <h2>Тут будет список комментариев</h2>

          <Comment comment={exampleComment} />
        </Container>
      </Container>
    </DefaultPageLayout>
  );
}
