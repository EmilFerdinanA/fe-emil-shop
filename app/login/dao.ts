export interface ILoginDAO {
  success: boolean;
  message: string;
  data: Data;
}

interface Data {
  token: string;
  user: User;
}

interface User {
  username: string;
  email: string;
  role: string;
  permissions: string[];
}
