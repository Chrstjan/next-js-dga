import { CategoriesList } from "@/app/components/CategoriesList/CategoriesList";
import { FeaturedCard } from "@/app/components/FeaturedCard/FeaturedCard";
import { Wrapper } from "@/app/components/Wrapper/Wrapper";
import { getCategoryProducts } from "@/app/lib/categoryProductsFetch";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params?.slug);
  const products = await getCategoryProducts(params?.slug);
  console.log(products);

  return (
    <>
      <Wrapper sectionHeader>
        <CategoriesList />
        <FeaturedCard data={products} productListing />
      </Wrapper>
    </>
  );
}
