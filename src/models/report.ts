interface IReport {
  userId: string;
  reportedUserId: string;
  report: string;
}

interface DBReport extends IReport {
  _id: string;
}
