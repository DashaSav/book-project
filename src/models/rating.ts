interface IRating {
  bookId: string;
  userId: string;
  grade: number;
}

interface DBRating extends IRating {
  _id: string;
}

interface BookRating {
  bookId: string;
  rating: number;
}
