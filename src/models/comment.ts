interface IComment {
  user: IUser;
  userId: string;
  bookId: string;
  content: string;
  likes: number;
}

type CommentCreate = Omit<IComment, "user">;

interface DBComment extends IComment {
  _id: string;
}
