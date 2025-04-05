import { FeaturedCard } from "./components/FeaturedCard/FeaturedCard";
import { getCategories, getProducts } from "./lib/featuredFetch";

export default async function LandingPage() {
  const products = await getProducts();
  const categories = await getCategories();

  console.log(products);
  console.log(categories);

  return (
    <>
      <h1>Landing page</h1>
      <FeaturedCard data={products} />
    </>
  );
}
