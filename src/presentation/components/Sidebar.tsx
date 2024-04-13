import { Nav } from "react-bootstrap";

export default function Sidebar() {
  return (
    <>
      <Nav defaultActiveKey="/profile" className="flex-column sidebar">
        <Nav.Link href="/profile">Мой профиль</Nav.Link>
        <Nav.Link href="/my-books">Мои книги</Nav.Link>
        <Nav.Link href="/addbook">Добавить книгу</Nav.Link>
        <Nav.Link href="/favorites">Избранное</Nav.Link>
        <Nav.Link href="/my-comments">Мои комментарии</Nav.Link>
      </Nav>
    </>
  );
}
