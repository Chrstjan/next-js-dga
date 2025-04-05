export const getCategoryProducts = async (
  categorySlug: string
): Promise<Product[]> => {
  try {
    const res = await fetch(
      `http://localhost:4242/products/category/${categorySlug}`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Error getting category products");
    }

    const data = await res.json();

    if (data?.data?.length > 0) {
      return data?.data;
    }
    return [];
  } catch (err) {
    console.error(err);
    return [];
  }
};
