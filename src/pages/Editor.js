import { Button, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.scss';
import Container from 'react-bootstrap/Container';
import BooksNavbar from '../components/BooksNavbar';

export default function Editor() {
    return (
        <>
            <BooksNavbar />
            <Container className='content'>
                <h2>Добавить новую часть</h2>
                <Container className='chapterName'>
                    <h3>Название части</h3>
                    <FloatingLabel
                        controlId="Chapter"
                        label="Chapter"
                        className="mb-3">
                        <Form.Control as="textarea" placeholder="Часть 1" />
                    </FloatingLabel>

                </Container>
                <Container className='inputText'>
                    <h3>Текстовый редактор</h3>
                    <FloatingLabel
                        controlId="chapterText"
                        label="Chapter"
                        className="mb-3">
                        <Form.Control as="textarea" placeholder="Здесь будет текст вашей книги" />
                    </FloatingLabel>

                </Container>
                <Container className='authorComment'>
                    <h3>Комментарий к части</h3>
                    <FloatingLabel
                        controlId="Comment"
                        label="Comment"
                        className="mb-3">
                        <Form.Control as="textarea" placeholder="Комментарий к части" />
                    </FloatingLabel>

                </Container>
                <Button className='mb-2' as="input" type="button" value="Сохранить и перейти к публикации" />
            </Container>
        </>
    );
}
