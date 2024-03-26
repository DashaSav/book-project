import { Card, Button } from 'react-bootstrap';
import logo from '../images/logo owl book.png';
import { useNavigate } from 'react-router-dom';

export default function Book() {
    const navigate = useNavigate();
    const handleReadClick = () => navigate("/bookpage");

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>   
                    <Card.Title>Название книги</Card.Title>
                    <Card.Text>Автор книги</Card.Text>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={handleReadClick}>Читать</Button>
                </Card.Body>
            </Card>
        </>
    );
}
