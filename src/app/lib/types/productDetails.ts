interface ProductDetails {
  category_id: number;
  id: number;
  price: number;
  user_id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  owner: ProductUser;
  category: Category;
  comments: ProductComment[];
}

interface ProductUser {
  email: string;
  firstname: string;
  lastname: string;
  id: number;
}

interface Category {
  id: number;
  name: string;
}

interface ProductComment {
  comment: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  product_id: number;
  user_id: number;
  user: ProductUser;
}
