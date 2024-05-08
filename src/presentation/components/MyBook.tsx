import { Card, Button, Container } from "react-bootstrap";
import logo from "../../assets/logoOwlBook.png";
import { useNavigate } from "react-router-dom";
import { deleteBook } from "../../data/apiService";
import { useState } from "react";
import ModalDeleteBook from "./modals/ModalDeleteBook";

type BookProps = { book: DBBook; onDelete: () => void };

export default function MyBook({ book, onDelete }: BookProps) {
  const navigate = useNavigate();
  const [showDeleteBookModal, setShowDeleteBookModal] = useState(false);
  const handleEditBook = () => navigate("/bookpage/edit/" + book._id);

  const handleDeleteBook = async () => {
    await deleteBook(book._id);

    onDelete();
  };
  const handleDeleteClick = async () => {
    try {
      //тут всплывающая модалка с подтверждением что пользователь хочет удалить книгу
      await deleteBook(book._id);
      setShowDeleteBookModal(false);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.user.name}</Card.Text>
          <Card.Text>{book.summary}</Card.Text>
        </Card.Body>
        <Container className="buttons-inline">
          <Button className="edit" variant="primary" onClick={handleEditBook}>
            Редактировать
          </Button>
          <Button
            className="delete"
            variant="danger"
            onClick={() => setShowDeleteBookModal(true)}
          >
            Удалить
          </Button>
        </Container>
        <ModalDeleteBook
          show={showDeleteBookModal}
          onHide={() => setShowDeleteBookModal(false)}
          onDelete={handleDeleteClick}
        />
      </Card>
    </>
  );
}
