interface IUser {
  name: string;
  email: string;
}

interface UserUpdate extends IUser {
  password?: string;
}

interface DBUser extends IUser {
  _id: string;
}
