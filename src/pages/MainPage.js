import '../App.scss';
import Book from '../components/Book';
import BooksNavbar from '../components/BooksNavbar';

function MainPage() {
    return (
        <>
            <BooksNavbar />
            <h1>Популярные</h1>
            <Book />
        </>
    );
}

export default MainPage;
