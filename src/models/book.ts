interface IBook {
  author: string;
  title: string;
  description: string;
}

type DBBook = IBook & {
  _id: string;
};
