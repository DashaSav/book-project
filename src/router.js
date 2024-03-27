import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import BookPage from "./pages/BookPage";
import AddBook from "./pages/AddBook";
import Editor from "./pages/Editor";
import Profile from "./pages/Profile";
import { createBrowserRouter } from "react-router-dom";

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
]);

export default router;
