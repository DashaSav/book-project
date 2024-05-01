import { useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import "../styles/App.scss";

interface CommentProps {
  comment: IComment;
}

const Comment = ({ comment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(comment.likes);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <Card className="comment">
      <Card.Body>
        <Card.Title>{comment.user.name}</Card.Title>
        <Card.Text>{comment.content}</Card.Text>
        <Button variant="primary" onClick={handleLikeClick}>
          Лайк <Badge>{likeCount}</Badge>
        </Button>{" "}
        <Button variant="danger">Пожаловаться</Button>
      </Card.Body>
    </Card>
  );
};

export default Comment;
