interface IUser {
  name: string;
  email: string;
}

interface UserUpdate extends IUser {
  password?: string;
}

