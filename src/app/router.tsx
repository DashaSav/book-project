import { createBrowserRouter } from "react-router-dom";
import AddBook from "../presentation/pages/AddBook";
import BookPage from "../presentation/pages/BookPage";
import Editor from "../presentation/pages/Editor";
import Login from "../presentation/pages/Login";
import MainPage from "../presentation/pages/MainPage";
import NotFoundPage from "../presentation/pages/NotFoundPage";
import Profile from "../presentation/pages/Profile";
import SignUp from "../presentation/pages/SignUp";
import AddChapter from "../presentation/pages/AddChapter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/bookpage",
    element: <BookPage />,
  },
  {
    path: "/addbook",
    element: <AddBook />,
  },
  {
    path: "/editor",
    element: <Editor />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/addchapter",
    element: <AddChapter />,
  },
]);

export default router;
