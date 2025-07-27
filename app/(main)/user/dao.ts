export interface IUserDAO {
  id: string;
  username: string;
  email: string;
  role: Role;
}

interface Role {
  id: string;
  name: string;
}
