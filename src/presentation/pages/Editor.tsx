import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../styles/App.scss";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import BooksNavbar from "../components/BooksNavbar";
import { addChapter } from "../../data/apiService";

export default function Editor() {
  const [chapterName, setChapterName] = useState("");
  const [chapterText, setChapterText] = useState("");
  const [authorComment, setAuthorComment] = useState("");

  const changeChapterName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setChapterName(e.currentTarget.value);

  const changeChapterText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setChapterText(e.currentTarget.value);

  const changeAuthorComment = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAuthorComment(e.currentTarget.value);

  const handleSendChapter = async () => {
    try {
      const result = await addChapter(chapterName, chapterText, authorComment);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <BooksNavbar />

      <Container className="content">
        <h2 className="header">Добавить новую часть</h2>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Название части</Form.Label>
            <Form.Control
              name="chapterName"
              value={chapterName}
              onChange={changeChapterName}
              type="text"
              placeholder="Глава 1"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Текстовый редактор</Form.Label>
            <Form.Control
              name="chapterText"
              value={chapterText}
              onChange={changeChapterText}
              type="text"
              as="textarea"
              rows={6}
              placeholder="Здесь будет текст вашей книги"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Комментарий к части</Form.Label>
            <Form.Control
              name="authorComment"
              value={authorComment}
              onChange={changeAuthorComment}
              type="text"
              as="textarea"
              rows={3}
              placeholder="Здесь будет ваш комментарий к книге"
            />
          </Form.Group>

          <Button
            type="submit"
            className="mb-2"
            onClick={handleSendChapter}
            as="input"
            value="Сохранить и перейти к публикации"
          />
        </Form>
      </Container>
    </>
  );
}
