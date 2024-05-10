interface IChapter {
    bookId: string;
    title: string;
    text: string;
    comment: string;
  }
  
  type DBChapter = IChapter & {
    _id: string;
  };
  