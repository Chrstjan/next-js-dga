export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("http://localhost:4242/products", {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(`Error fetching categories`);
    }

    const data = await res.json();
    const products: Product[] = [];

    if (data?.data && data?.data.length > 0) {
      products.push(
        data?.data[Math.floor(Math.random() * data?.data?.length)],
        data?.data[Math.floor(Math.random() * data?.data?.length)],
        data?.data[Math.floor(Math.random() * data?.data?.length)],
        data?.data[Math.floor(Math.random() * data?.data?.length)],
        data?.data[Math.floor(Math.random() * data?.data?.length)],
        data?.data[Math.floor(Math.random() * data?.data?.length)]
      );
      return products;
    }
    return [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch("http://localhost:4242/categories", {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(`Error fetching categories`);
    }

    const data = await res.json();
    const categories: Category[] = [];

    if (data?.data && data?.data.length > 0) {
      categories.push(
        data?.data[Math.floor(Math.random() * data?.data?.length)],
        data?.data[Math.floor(Math.random() * data?.data?.length)],
        data?.data[Math.floor(Math.random() * data?.data?.length)],
        data?.data[Math.floor(Math.random() * data?.data?.length)],
        data?.data[Math.floor(Math.random() * data?.data?.length)],
        data?.data[Math.floor(Math.random() * data?.data?.length)]
      );
      return categories;
    }
    return [];
  } catch (err) {
    console.error(err);
    return [];
  }
};
