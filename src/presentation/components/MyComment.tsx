import { Card, Button } from "react-bootstrap";
import "../styles/App.scss";

interface CommentProps {
  comment: IComment;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <Card className="comment">
      <Card.Body>
        <Card.Title>{comment.user.name}</Card.Title>
        <Card.Text>{comment.content}</Card.Text>
        Лайки: {comment.likes}
        {/* тут придумать какую то ссылку на книгу (сначала название книги */}
        {/* подтягивает а по названию ссылка на книгу) */}
        <Card.Text>К книге: {}</Card.Text>
        <Button variant="danger">Удалить комментарий</Button>
      </Card.Body>
    </Card>
  );
};

export default Comment;
