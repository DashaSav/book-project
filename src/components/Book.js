import { Card, CardText } from 'react-bootstrap';
import logo from '../images/logo owl book.png';

export default function Book() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    
                    <Card.Title>Название книги</Card.Title>
                    <CardText>Автор книги</CardText>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Читать</Button>
                </Card.Body>
            </Card>

        </>
    );
}