import { Card, Button } from "react-bootstrap";
import logo from "../../assets/logo owl book.png";
import { useNavigate } from "react-router-dom";

type BookProps = { book: IBook };
export default function Book({ book }: BookProps) {
  const navigate = useNavigate();
  const handleReadClick = () => navigate("/bookpage");

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.author}</Card.Text>
          <Card.Text>{book.description}</Card.Text>
          <Button variant="primary" onClick={handleReadClick}>
            Читать
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
