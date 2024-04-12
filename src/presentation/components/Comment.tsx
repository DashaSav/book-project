import { useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import "../styles/App.scss";

interface CommentProps {
  author: string;
  content: string;
  likes: number;
}

const Comment = ({ author, content, likes }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <Card className="comment">
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary" onClick={handleLikeClick}>
          Лайк <Badge>{likeCount}</Badge>
        </Button>{" "}
        <Button variant="danger">Пожаловаться</Button>
      </Card.Body>
    </Card>
  );
};

export default Comment;
