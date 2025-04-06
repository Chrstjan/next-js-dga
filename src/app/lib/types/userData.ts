interface UserData {
  access_token: string;
  created: string;
  user: User;
}

interface User {
  firstname: string;
  lastname: string;
  id: number;
}
