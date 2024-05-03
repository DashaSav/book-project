interface IBook {
  user: IUser;
  userId: string;
  title: string;
  summary: string;
  tags: string;
  commentRestriction: string;
  ageRestriction: string;
  agreement: boolean;
}

type BookCreate = Omit<IBook, "user">;

type DBBook = IBook & {
  _id: string;
};
