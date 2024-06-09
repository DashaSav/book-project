import { Card, Button, Stack } from "react-bootstrap";
import logo from "../../assets/logoOwlBook.png";
import { Link, useNavigate } from "react-router-dom";
import Routes, { prepareUrl } from "../../app/routes";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import StarRating from "./StarRating";

type BookProps = { book: DBBook; rating?: number };

export default function Book({ book, rating }: BookProps) {
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  const handleReadClick = () =>
    navigate(prepareUrl(Routes.bookpage, { id: book._id }));

  const handleAddFavorite = () => {
    book.isFavorite = true;
    setIsFavorite(true);
  };

  const handleRemoveFavorite = () => {
    book.isFavorite = false;
    setIsFavorite(false);
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Stack
            direction="horizontal"
            className="justify-content-between align-items-start"
          >
            <Card.Title className="text-break">{book.title}</Card.Title>
            {isFavorite ? (
              <MdFavorite onClick={handleRemoveFavorite} />
            ) : (
              <MdOutlineFavoriteBorder onClick={handleAddFavorite} />
            )}
          </Stack>

          <Stack direction="vertical">
            <StarRating value={rating} />
            <Link to={prepareUrl(Routes.author, { id: book.userId })}>
              {book.user.name}
            </Link>
          </Stack>
          <Card.Text>{book.summary}</Card.Text>
          <Button variant="primary" onClick={handleReadClick}>
            Читать
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
