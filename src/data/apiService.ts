import axios from "axios";
import { removeToken, saveToken } from "./storage";

const API_URL = "http://localhost:8080/";

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  const response = await axios.post(API_URL + "auth/register", {
    email,
    name,
    password,
  });

  if (response.status < 400 && response.data.token) {
    saveToken(response.data.token);
  }

  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(API_URL + "auth/login", {
    email,
    password,
  });

  console.log(response.data);

  if (response.status < 400 && response.data.token) {
    saveToken(response.data.token);
  }
  return response.data;
};

export const addChapter = async (
  chapterName: string,
  chapterText: string,
  authorComment: string,
) => {
  const response = await axios.post(API_URL + "auth/login", {
    chapterName: chapterName,
    chapterText: chapterText,
    authorComment: authorComment,
  });

  console.log(response.data);

  if (response.status < 400 && response.data.token) {
    saveToken(response.data.token);
  }
  return response.data;
};

export const logout = () => removeToken();

export async function getBooks(): Promise<IBook[]> {
  return (await axios.get(API_URL + "books")).data["_embedded"]["books"];
}
