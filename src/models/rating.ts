interface IRating {
  bookId: string;
  userId: string;
  grade: number;
}

interface DBRating extends IRating {
  _id: string;
}
