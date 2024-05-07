interface IChapter {
    book: IBook;
    name: string;
    text: string;
   authorComment: string;
  }
  
  type DBChapter = IChapter & {
    _id: string;
  };
  