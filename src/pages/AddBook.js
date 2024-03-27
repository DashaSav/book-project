import { FloatingLabel, Form } from 'react-bootstrap';
import BooksNavbar from '../components/BooksNavbar';
import '../App.scss';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

export default function AddBook() {
    const ageOptions = ["6+", "12+", "16+", "18+"];
    
    return (
        <>
           <BooksNavbar />

            <Container className='content'>
                <h2>Добавить новую книгу</h2>
                <Container className='inputText'>
                    <h3>Текстовый редактор</h3>
                    <FloatingLabel
                        controlId="chapterText"
                        label="Chapter"
                        className="mb-3">
                        <Form.Control as="textarea" placeholder="Введите название книги" />
                    </FloatingLabel>
                </Container>


                <Form>
                    {ageOptions.map((option) =>
                        <div key={option} className="mb-2">
                            <Form.Check type="radio" label={option} name="radioGroup" />
                        </div>
                    )}
                </Form>
            </Container>
        </>
    );
}
