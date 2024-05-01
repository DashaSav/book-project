interface IComment {
  user: IUser;
  content: string;
  likes: number;
}

interface CommentCreate {
  user_id: string;
  book_id: string;
  content: string;
}
