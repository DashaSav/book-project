import { useState } from "react";
import { FaTrash, FaPencilRuler } from "react-icons/fa";
import "../styles/App.scss";
import { Card } from "react-bootstrap";
import { deleteChapter } from "../../data/apiService";
import ModalDeleteChapter from "./modals/ModalDeleteChapter";
import { useNavigate } from "react-router-dom";

interface ChapterProps {
  chapter: DBChapter;
}

const Chapter = ({ chapter }: ChapterProps) => {
  const navigate = useNavigate();
  const [showDeleteChapterModal, setShowDeleteChapterModal] = useState(false);
  const handleEditClick = () => {
    //тут переход на конкретную главу в текстовом редакторе
    navigate("/chapter/edit/" + chapter._id);
  };

  const handleDeleteClick = async () => {
    try {
      //тут всплывающая модалка с подтверждением что пользователь хочет удалить главу из книги
      await deleteChapter(chapter._id);
      setShowDeleteChapterModal(false);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card className="chapter">
      <Card.Body>
        <FaTrash onClick={() => setShowDeleteChapterModal(true)}></FaTrash>
        <FaPencilRuler onClick={() => handleEditClick()} />
        //номер главы от 1 до n //название главы
      </Card.Body>

      <ModalDeleteChapter
        show={showDeleteChapterModal}
        onHide={() => setShowDeleteChapterModal(false)}
        onDelete={handleDeleteClick}
      />
    </Card>
  );
};

export default Chapter;
