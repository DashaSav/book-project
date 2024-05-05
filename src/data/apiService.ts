import axios from "axios";
import {
  getToken,
  getUserId,
  removeToken,
  removeUserId,
  saveToken,
  saveUserId,
} from "./storage";

const API_URL = "http://7.tcp.eu.ngrok.io:16741/";

// #region user and auth flow
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

  saveUserId(response.data.user["_id"]);

  return {
    status: response.status,
    data: response.data,
  };
};

export const getUser = async (id: string): Promise<IUser | null> => {
  const response = await axios.get(API_URL + "users/" + id);

  return response.data;
};

export const getCurrentUser = async () => {
  const userId = getUserId();
  if (userId === null) return null;

  return await getUser(userId);
};

export const updateUser = async (email: string, name: string, password: string, passwordRepeat: string): Promise<IUser | null> => {
  //guard - защита, если пользователь не ввел значение мы не будем отправлять запрос на обновление
  const userId = getUserId();
  if (userId === null) return null;
  if (email === "") return null;
  if(name === "") return null;

  let updatedUser: UserUpdate = {email: email, name: name};
  if(password !== "" && passwordRepeat === password){
    updatedUser.password = password;
  }
  const response = await axios.put(API_URL + "users/" + userId, updatedUser, {
    headers: getHeaders(),
  });
  return response.data;
};

export const deleteUser = async () => {
  const userId = getUserId();
  if (userId === null) return;

  const response = await axios.delete(API_URL + "users/" + userId, {
    headers: getHeaders(),
  });

  logout();

  return response;
};

export const logout = () => {
  removeToken();
  removeUserId();
};
// #endregion

// #region books and chapters
export const addChapter = async (
  chapterName: string,
  chapterText: string,
  authorComment: string,
) => {
  const userId = getUserId();

  const response = await axios.post(
    API_URL + "chapters/",
    {
      name: chapterName,
      text: chapterText,
      comment: authorComment,
    },
    {
      headers: getHeaders(),
    },
  );

  console.log(response.data);

  return response.data;
};

export const addBook = async (
  title: string,
  ageRestriction: string,
  tags: string,
  summary: string,
  commentRestriction: string,
  agreement: boolean,
) => {
  const userId = getUserId();
  if (userId === null) {
    return;
  }

  const newBook: BookCreate = {
    userId: userId,
    title: title,
    tags: tags,
    summary: summary,
    commentRestriction: commentRestriction,
    ageRestriction: ageRestriction,
    agreement: agreement,
  };

  const response = await axios.post(API_URL + "books/", newBook, {
    headers: getHeaders(),
  });

  console.log(response.data);

  return response.data;
};

export const deleteBook = async (id: string) => {
  const response = await axios.delete(API_URL + "books/" + id, {
    headers: getHeaders(),
  });
};

export async function getBooks(): Promise<DBBook[]> {
  return (await axios.get(API_URL + "books/")).data;
}

export const getBook = async (id: string) => {
  const response = await axios.get(API_URL + "books/" + id);

  console.log(response.data);
  return response.data;
};
// #endregion

// #region comments
export async function getCommentsByBook(bookId: string): Promise<IComment[]> {
  return (await axios.get(API_URL + "comments/findByBook/" + bookId)).data;
}

export async function getCommentsByUser(): Promise<IComment[]> {
  const userId = getUserId();
  return (await axios.get(API_URL + "comments/findByUser/" + userId)).data;
}

export const addComment = async (bookId: string, content: string) => {
  const userId = getUserId()!;

  const comment: CommentCreate = {
    user_id: userId,
    book_id: bookId,
    content: content,
  };

  const response = await axios.post(API_URL + "comments/", comment, {
    headers: getHeaders(),
  });

  console.log(response.data);

  return response.data;
};
// #endregion

// #region favorites
export async function getFavorites(): Promise<DBBook[]> {
  return (await axios.get(API_URL + "books/")).data;
}
// #endregion

function getHeaders() {
  return {
    Authorization: `Bearer ${getToken()}`,
  };
}
