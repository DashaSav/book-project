import axios from "axios";
import {
  getToken,
  getUserId,
  removeToken,
  removeUserId,
  saveToken,
  saveUserId,
} from "./storage";

const API_URL = "http://localhost:8080/";

// region user and auth flow
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
  saveUserId(response.data.user["_id"]);

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

export const updateUser = async (
  email: string,
  name: string,
  password: string,
  passwordRepeat: string,
): Promise<IUser | null> => {
  //guard - защита, если пользователь не ввел значение мы не будем отправлять запрос на обновление
  const userId = getUserId();
  if (userId === null) return null;
  if (email === "") return null;
  if (name === "") return null;

  let updatedUser: UserUpdate = { email: email, name: name };
  if (password !== "" && passwordRepeat === password) {
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
// endregion

// region books and chapters
export const addChapter = async (
  bookId: string,
  title: string,
  text: string,
  comment: string,
) => {
  if (bookId === null) {
    return;
  }

  const response = await axios.post(
    API_URL + "chapters/",
    {
      bookId: bookId,
      title: title,
      text: text,
      comment: comment,
    },
    {
      headers: getHeaders(),
    },
  );

  return response.data;
};

export const updateChapter = async (
  id: string,
  bookId: string,
  title: string,
  text: string,
  comment: string,
): Promise<DBChapter> => {
  const response = await axios.put(
    API_URL + "chapters/" + id,
    {
      bookId: bookId,
      title: title,
      text: text,
      comment: comment,
    },
    {
      headers: getHeaders(),
    },
  );

  return response.data;
};

export const deleteChapter = async (id: string) => {
  await axios.delete(API_URL + "chapters/" + id, {
    headers: getHeaders(),
  });
};

export async function getChapters(bookId: string): Promise<DBChapter[]> {
  return (await axios.get(API_URL + "chapters/findByBook/" + bookId)).data;
}

export const getChapter = async (id: string): Promise<DBChapter> => {
  const response = await axios.get(API_URL + "chapters/" + id);

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

  if (userId === null) return;

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

  return response.data;
};

export const updateBook = async (
  id: string,
  title: string,
  ageRestriction: string,
  tags: string,
  summary: string,
  commentRestriction: string,
): Promise<DBBook | undefined> => {
  const userId = getUserId();

  if (userId === null) return;

  const updatedBook: BookUpdate = {
    userId: userId,
    title: title,
    tags: tags,
    summary: summary,
    commentRestriction: commentRestriction,
    ageRestriction: ageRestriction,
  };

  const response = await axios.put(API_URL + "books/" + id, updatedBook, {
    headers: getHeaders(),
  });

  return response.data;
};

export const deleteBook = async (id: string) => {
  await axios.delete(API_URL + "books/" + id, {
    headers: getHeaders(),
  });
};

export async function getBooks(): Promise<DBBook[]> {
  return (await axios.get(API_URL + "books/")).data;
}

export async function getCurrentUserBooks(): Promise<DBBook[]> {
  const userId = getUserId();
  if (userId === null) return [];

  return (await axios.get(API_URL + "books/findByUser/" + userId)).data;
}

export async function getUserBooks(id: string): Promise<DBBook[]> {
  return (await axios.get(API_URL + "books/findByUser/" + id)).data;
}

export const getBook = async (id: string): Promise<DBBook> => {
  const response = await axios.get(API_URL + "books/" + id);

  return response.data;
};
// endregion

// region comments
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
    userId: userId,
    bookId: bookId,
    content: content,
    likes: 0,
  };

  const response = await axios.post(API_URL + "comments/", comment, {
    headers: getHeaders(),
  });

  return response.data;
};
// endregion

// region favorites
export async function getFavorites(): Promise<DBBook[]> {
  return (await axios.get(API_URL + "books/")).data;
}
// endregion

// region reports
export async function sendUserReport(
  reportedUserId: string,
  reportText: string,
): Promise<DBUserReport> {
  const userId = getUserId()!;

  const report: IUserReport = {
    userId: userId,
    reportedUserId: reportedUserId,
    report: reportText,
  };

  return (
    await axios.post(API_URL + "reports/users", report, {
      headers: getHeaders(),
    })
  ).data;
}

export async function sendBookReport(
  reportedBookId: string,
  reportText: string,
): Promise<DBUserReport> {
  const userId = getUserId()!;

  const report: IBookReport = {
    userId: userId,
    reportedBookId: reportedBookId,
    report: reportText,
  };

  return (
    await axios.post(API_URL + "reports/books", report, {
      headers: getHeaders(),
    })
  ).data;
}
// endregion

// region rating
export async function updateRating(
  bookId: string,
  grade: number,
): Promise<DBRating> {
  const userId = getUserId()!;

  const rating: IRating = {
    userId: userId,
    bookId: bookId,
    grade: grade,
  };

  return (
    await axios.post(API_URL + "ratings/", rating, { headers: getHeaders() })
  ).data;
}

export async function getUserRating(bookId: string): Promise<DBRating> {
  const userId = getUserId()!;

  return (
    await axios.get(
      API_URL + "ratings/findByUserAndBook/" + userId + "/" + bookId,
      { headers: getHeaders() },
    )
  ).data;
}
// endregion

function getHeaders() {
  return {
    Authorization: `Bearer ${getToken()}`,
  };
}
