import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import BookPage from './pages/BookPage';
import AddBook from './pages/AddBook';
import Editor from './pages/Editor';
import Profile from './pages/Profile';


const router = createBrowserRouter([
{
  path: '/',
  element: <MainPage />,
  errorElement: <NotFoundPage />,
},
{
  path: '/login',
  element: <Login />,
},
{
  path: '/signup',
  element: <SignUp />,
},
{
  path: '/bookpage',
  element: <BookPage />,
},
{
  path: '/addbook',
  element: <AddBook />,
},
{
  path: '/editor',
  element: <Editor />,
},
{
  path: '/profile',
  element: <Profile />,
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
