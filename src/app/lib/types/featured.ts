interface Product {
  category_id: number;
  category: ProductCategory;
  id: number;
  user_id: number;
  price: number;
  createdAt: string;
  updatedAt: string;
  description: string;
  image: string;
  name: string;
  slug: string;
}

interface ProductCategory {
  id: number;
  name: string;
}

interface Category {
  id: number;
  category_image: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  slug: string;
}
