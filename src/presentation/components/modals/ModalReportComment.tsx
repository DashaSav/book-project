import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { useState } from "react";

function ModalReportComment() {
  const [complaintText, setComplaintText] = useState("");

  const changeComplaintText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setComplaintText(e.currentTarget.value);

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Пожаловаться на пользователя</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Укажите причину, по которой вы решили пожаловаться на книгу. Для
            более быстрого рассмотрения жалобы рекомендуется прикрепить отрывок,
            подтверждающий вашу жалобу.
          </p>
          <Form.Group className="mb-2">
            <Form.Label>Текстовый редактор</Form.Label>
            <Form.Control
              name="chapterText"
              value={complaintText}
              onChange={changeComplaintText}
              type="text"
              as="textarea"
              rows={3}
              placeholder="Напишите важу жалобу"
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Закрыть окно</Button>
          <Button variant="primary">Отправить жалобу</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalReportComment;
