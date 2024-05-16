import { Card, Button, Stack } from "react-bootstrap";
import logo from "../../assets/logoOwlBook.png";
import { useNavigate } from "react-router-dom";
import Routes, { prepareUrl } from "../../app/routes";
import { MdOutlineFavoriteBorder } from "react-icons/md";

type BookProps = { book: DBBook };

export default function Book({ book }: BookProps) {
  const navigate = useNavigate();
  const handleReadClick = () =>
    navigate(prepareUrl(Routes.bookpage, { id: book._id }));

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Stack
            direction="horizontal"
            className="justify-content-between align-items-start"
          >
            <Card.Title>{book.title}</Card.Title>
            <MdOutlineFavoriteBorder />
          </Stack>
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
