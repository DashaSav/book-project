interface IReport {
  userId: string;
  report: string;
}

interface IUserReport extends IReport {
  reportedUserId: string;
}

interface DBUserReport extends IUserReport {
  _id: string;
}

interface IBookReport extends IReport {
  reportedBookId: string;
}

interface DBBookReport extends IBookReport {
  _id: string;
}
