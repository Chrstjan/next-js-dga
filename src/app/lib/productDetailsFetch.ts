import { ProductDetails } from "../components/ProductDetails/ProductDetails";

export const getProductDetails = async (productSlug: string) => {
  try {
    const res = await fetch(`http://localhost:4242/products/${productSlug}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Error getting product details");
    }

    const data = await res.json();
    console.log(data);

    if (data?.message == "Success") {
      return data?.data;
    }
  } catch (err) {
    console.error(err);
  }
};
