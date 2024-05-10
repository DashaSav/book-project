import { useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import "../styles/App.scss";
import ModalReportComment from "./modals/ModalReportComment";

interface CommentProps {
  comment: IComment;
}

const Comment = ({ comment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(comment.likes);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };
  const handleReportCommentClick = async () => {
    try {
      //тут всплывающая модалка с подтверждением что пользователь хочет удалить книгу
      await reportComment(user._id);
      setShowReportCommentModal(false);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card className="comment">
      <Card.Body>
        <Card.Title>{comment.user.name}</Card.Title>
        <Card.Text>{comment.content}</Card.Text>
        <Button variant="primary" onClick={handleLikeClick}>
          Лайк <Badge>{likeCount}</Badge>
        </Button>{" "}
        <Button onClick={setShowReportCommentModal(true)} variant="danger">
          Пожаловаться
        </Button>
      </Card.Body>
      <ModalReportComment
        show={showReportCommentModal}
        onHide={() => setShowReportCommentModal(false)}
        onReport={reportComment}
      />
    </Card>
  );
};

export default Comment;
