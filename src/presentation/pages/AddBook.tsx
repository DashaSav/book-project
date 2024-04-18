import { FloatingLabel, Form } from "react-bootstrap";
import "../styles/App.scss";
import Container from "react-bootstrap/Container";
import DefaultPageLayout from "./DefaultPage";
import { useState } from "react";

export default function AddBook() {
  const ageOptions = ["6+", "12+", "16+", "18+"];
  const allowComment = [
    "Разрешить публикацию комментариев всем пользователям",
    "Разрешить публикацию комментариев только зарегистрированным пользователям",
    "Запретить публикацию комментариев",
  ];

  const [bookName, setBookName] = useState("");
  const [bookTags, setBookTags] = useState("");

  const changeBookName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBookName(e.currentTarget.value);

  const changeBookTags = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBookTags(e.currentTarget.value);

  return (
    <DefaultPageLayout>
      <Container className="content">
        <h2>Добавить новую книгу</h2>
        <Form className="addBook">
          <Container className="inputText">
            <Form.Group className="mb-2">
              <Form.Label>Название книги: </Form.Label>
              <Form.Control
                name="chapterName"
                value={bookName}
                onChange={changeBookName}
                type="text"
                placeholder="Введите название книги"
              />
            </Form.Group>
            <p className="age">Ограничение по возрасту</p>
            {ageOptions.map((option) => (
              <div key={option} className="mb-2">
                <Form.Check type="radio" label={option} name="radioGroup" />
              </div>
            ))}
            <Container className="inputText">
              <Form.Group className="mb-2">
                <Form.Label>Метки: </Form.Label>
                <Form.Control
                  name="booktags"
                  value={bookTags}
                  onChange={changeBookTags}
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="Введите ключевые слова по которым
              пользователи смогут находить вашу книгу"
                />
              </Form.Group>
            </Container>
            <Container className="inputText">
              <Form.Group className="mb-2">
                <Form.Label>Краткое содержание: </Form.Label>
                <Form.Control
                  name="chapterName"
                  value={bookTags}
                  onChange={changeBookTags}
                  type="text"
                  as="textarea"
                  rows={6}
                  placeholder="Введите краткое описание вашей книги"
                />
              </Form.Group>
            </Container>
            <p className="age">Запрет/разрешение комментариев</p>
            {allowComment.map((option) => (
              <div key={option} className="mb-2">
                <Form.Check type="radio" label={option} name="radioGroup" />
              </div>
            ))}
            <h3>
              Я подтверждаю, что являюсь автором публикуемого мной текста и
              понимаю, что публикация чужих работ или публикация работ,
              нарушающих правила, может привести к удалению этих работ и
              блокировке к доступу на сайт
            </h3>
          </Container>
        </Form>
      </Container>
    </DefaultPageLayout>
  );
}
