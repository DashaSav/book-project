import { Card, Button } from "react-bootstrap";
import logo from "../../assets/logoOwlBook.png";
import { useNavigate } from "react-router-dom";

type BookProps = { book: DBBook };

export default function Book({ book }: BookProps) {
  const navigate = useNavigate();
  const handleReadClick = () => navigate("/bookpage/" + book._id);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.user.name}</Card.Text>
          <Card.Text>{book.summary}</Card.Text>
          <Button variant="primary" onClick={handleReadClick}>
            Читать
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
