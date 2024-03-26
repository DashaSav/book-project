import { Button, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.scss';
import Container from 'react-bootstrap/Container';
import logo from '../images/logo owl book.png';
import BooksNavbar from '../components/BooksNavbar';

export default function BookPage() {
    return (
        <>
            <BooksNavbar />

            <h1>Название книги</h1>
            <Container className='imgRating'>
                <img src={logo} className="App-logo" alt="logo" />
                <h5>Тут должна быть оценка</h5>
                <h2>Содержание</h2>
                <h5>Тут как то сделать список глав с ссылками</h5>
            </Container>
            <Container className='AboutBook'>
                <p>Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Автор</p>
                <p>Персонажи</p>
                <p>Возрастное ограничение</p>
                <p>Жанры</p>
                <p>Статус</p>
                <p>Дата публикации</p>
                <p>Метки</p>
            </Container>
            <Container className='Comments'>
                <h2>Комментарии</h2>
                <Container className='SendComment'>
                    <FloatingLabel controlId="inputComm" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Введите ваш комментарий"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <Button className='mb-2' as="input" type="button" value="Отправить" />
                </Container>
                <h2>Тут будет список комментариев</h2>
            </Container>
        </>
    );
}
