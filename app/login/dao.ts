export interface ILoginDAO {
  token: string;
  user: User;
}

export interface User {
  username: string;
  email: string;
  role: string;
  permissions: string[];
}
