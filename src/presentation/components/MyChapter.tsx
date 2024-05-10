import { useState } from "react";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";
import "../styles/App.scss";
import { Card } from "react-bootstrap";
import { deleteChapter } from "../../data/apiService";
import ModalDeleteChapter from "./modals/ModalDeleteChapter";
import { useNavigate } from "react-router-dom";
import Routes, { prepareUrl } from "../../app/routes";

interface ChapterProps {
  chapter: DBChapter;
  index: number;
}

const MyChapter = ({ chapter, index }: ChapterProps) => {
  const navigate = useNavigate();
  const [showDeleteChapterModal, setShowDeleteChapterModal] = useState(false);

  const handleEditClick = () => {
    //тут переход на конкретную главу в текстовом редакторе
    navigate(prepareUrl(Routes.chapterEdit, { chapterId: chapter._id }));
  };

  const handleDeleteClick = async () => {
    try {
      //тут всплывающая модалка с подтверждением что пользователь хочет удалить главу из книги
      await deleteChapter(chapter._id);
      setShowDeleteChapterModal(false);
      navigate(prepareUrl(Routes.bookEdit, { id: chapter.bookId }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card className="chapter">
      <Card.Body>
        <BsTrashFill
          onClick={() => setShowDeleteChapterModal(true)}
        ></BsTrashFill>
        <BsPencilSquare onClick={() => handleEditClick()} />
        {`${index}. ${chapter.title}`}
      </Card.Body>

      <ModalDeleteChapter
        show={showDeleteChapterModal}
        onHide={() => setShowDeleteChapterModal(false)}
        onDelete={handleDeleteClick}
      />
    </Card>
  );
};

export default MyChapter;
