import { createBrowserRouter } from "react-router-dom";
import AddBook from "../presentation/pages/AddBook";
import BookPage from "../presentation/pages/BookPage";
import Login from "../presentation/pages/Login";
import MainPage from "../presentation/pages/MainPage";
import NotFoundPage from "../presentation/pages/NotFoundPage";
import Profile from "../presentation/pages/Profile";
import SignUp from "../presentation/pages/SignUp";
import AddChapter from "../presentation/pages/AddChapter";
import MyComments from "../presentation/pages/MyComments";
import Favourites from "../presentation/pages/Favourites";
import MyBooks from "../presentation/pages/MyBooks";

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
    path: "/bookpage/:id",
    element: <BookPage />,
  },
  {
    path: "/addbook",
    element: <AddBook />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/addchapter",
    element: <AddChapter />,
  },
  {
    path: "/MyComments",
    element: <MyComments />,
  },
  {
    path: "/MyBooks",
    element: <MyBooks />,
  },
  {
    path: "/Favourites",
    element: <Favourites />,
  },
]);

export default router;
