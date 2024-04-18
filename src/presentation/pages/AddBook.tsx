import { FloatingLabel, Form } from "react-bootstrap";
import "../styles/App.scss";
import Container from "react-bootstrap/Container";
import DefaultPageLayout from "./DefaultPage";
import { useState } from "react";

export default function AddBook() {
  const ageOptions = ["6+", "12+", "16+", "18+"];

  const [bookName, setBookName] = useState("");

  const changeBookName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBookName(e.currentTarget.value);

  return (
    <DefaultPageLayout>
      <Container className="content">
        <h2>Добавить новую книгу</h2>
        <Container className="inputText">
          <Form.Group className="mb-2">
            <Form.Label>Название книги: </Form.Label>
            <Form.Control
              name="chapterName"
              value={bookName}
              onChange={changeBookName}
              type="text"
              placeholder="Вветие название книги"
            />
          </Form.Group>
          <h3>Ограничение по возрасту</h3>
          <h3>Метки, текстовое поле</h3>
          <h3>Краткое описание работы, текстовое поле</h3>
          <h3>Тут запрет или разрешение на пуббликацю комментариев</h3>
          <h3>
            Я подтверждаю, что являюсь автором публикуемого мной текста и
            понимаю, что публикация чужих работ или публикация работ, нарушающих
            правила, может привести к удалению этих работ и блокировке к доступу
            на сайт
          </h3>
          <h3>Текстовый редактор</h3>
          <FloatingLabel
            controlId="chapterText"
            label="Chapter"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Введите название книги" />
          </FloatingLabel>
        </Container>

        <Form>
          {ageOptions.map((option) => (
            <div key={option} className="mb-2">
              <Form.Check type="radio" label={option} name="radioGroup" />
            </div>
          ))}
        </Form>
      </Container>
    </DefaultPageLayout>
  );
}
