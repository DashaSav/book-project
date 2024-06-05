interface IBook {
  user: IUser;
  userId: string;
  title: string;
  summary: string;
  tags: string;
  commentRestriction: string;
  ageRestriction: string;
  agreement: boolean;
  isFavorite?: boolean;
  createdAt: Date;
}

type BookCreate = Omit<IBook, "user" | "createdAt">;
type BookUpdate = Omit<BookCreate, "agreement" | "createdAt">;

type DBBook = IBook & {
  _id: string;
};
