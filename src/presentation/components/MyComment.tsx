import { Card, Button } from "react-bootstrap";
import "../styles/App.scss";
import { deleteComment, getBook } from "../../data/apiService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Routes, { prepareUrl } from "../../app/routes";

interface CommentProps {
  comment: DBComment;
  onDelete?: () => void;
}

const Comment = ({ comment, onDelete }: CommentProps) => {
  const navigate = useNavigate();
  const [book, setBook] = useState<DBBook>();

  useEffect(() => {
    getBook(comment.bookId)
      .then((fetched) => setBook(fetched))
      .catch((e) => console.log(e));
  }, [comment.bookId]);

  const handleDelete = async () => {
    try {
      await deleteComment(comment._id);
      if (onDelete !== undefined) onDelete();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card className="comment">
      <Card.Body>
        <Card.Title>{comment.user.name}</Card.Title>
        <Card.Text>{comment.content}</Card.Text>
        Лайки: {comment.likes ?? 0}
        <p>
          К книге:{" "}
          <a
            onClick={() =>
              navigate(prepareUrl(Routes.bookpage, { id: book?._id }))
            }
            className="link-opacity-100"
            href=""
          >
            {book?.title}
          </a>
        </p>
        <Button onClick={handleDelete} variant="danger">
          Удалить комментарий
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Comment;
