import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type CommentProps = { comment: IComment };
export default function Comment({ comment }: CommentProps) {
  const navigate = useNavigate();
  const handleReadClick = () => navigate("/bookpage");

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{comment.author}</Card.Title>
          <Card.Text>{comment.description}</Card.Text>
          <Card.arguments>{comment.likes}</Card.arguments>
          <Button variant="primary" onClick={handleReadClick}>
            Отправить
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
