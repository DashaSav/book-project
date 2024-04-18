import axios from "axios";
import { removeToken, saveToken } from "./storage";

const API_URL = "http://localhost:8080/";

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  const response = await axios.post(API_URL + "users/", {
    email,
    name,
    password,
  });

  if (response.status >= 200 && response.status < 300 && response.data.token) {
    saveToken(response.data.token["access_token"]);
  }

  return {
    status: response.status,
    data: response.data,
  };
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(API_URL + "users/login", {
    email,
    password,
  });

  console.log(response.data);

  if (response.status >= 200 && response.status < 300 && response.data.token) {
    saveToken(response.data.token["access_token"]);
  }

  return {
    status: response.status,
    data: response.data,
  };
};

export const getUser = async (id: string) => {
  const response = await axios.post(API_URL + "users/" + id);

  console.log(response.data);

  const user: IUser = {
    name: response.data["name"],
    email: response.data["email"],
  };
  return user;
};

export const addChapter = async (
  chapterName: string,
  chapterText: string,
  authorComment: string,
) => {
  const response = await axios.post(API_URL + "chapters/", {
    chapterName: chapterName,
    chapterText: chapterText,
    authorComment: authorComment,
  });

  console.log(response.data);

  if (response.status >= 200 && response.status < 300 && response.data.token) {
    saveToken(response.data.token);
  }
  return response.data;
};

export const logout = () => removeToken();

export async function getBooks(): Promise<DBBook[]> {
  return (await axios.get(API_URL + "books/")).data;
}

export const getBook = async (id: string) => {
  const response = await axios.get(API_URL + "books/" + id);

  console.log(response.data);

  const book: IBook = {
    title: response.data["title"],
    author: response.data["author"],
    description: response.data["description"],
  };
  return book;
};

export async function getComments(): Promise<IComment[]> {
  return (await axios.get(API_URL + "comments/")).data;
}

export async function getFavorites(): Promise<DBBook[]> {
  return (await axios.get(API_URL + "books/")).data;
}
