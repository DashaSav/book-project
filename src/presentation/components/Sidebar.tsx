import { Nav } from "react-bootstrap";

export default function Sidebar() {
  return (
    <>
      <Nav defaultActiveKey="/profile" className="flex-column sidebar">
        <Nav.Link href="/my_profile">Мой профиль</Nav.Link>
        <Nav.Link href="/my_books">Мои книги</Nav.Link>
        <Nav.Link href="/add_book">Добавить книгу</Nav.Link>
        <Nav.Link href="/favorites">Избранное</Nav.Link>
        <Nav.Link href="/my_comments">Мои комментарии</Nav.Link>
      </Nav>
    </>
  );
}
