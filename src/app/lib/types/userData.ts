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

interface UserInfo {
  address: string;
  city: string;
  email: string;
  phone?: string;
  firstname: string;
  lastname: string;
  zipcode: number;
  id: number;
  hasNewsletter: boolean;
  hasNotification: boolean;
  products: Product[];
}
