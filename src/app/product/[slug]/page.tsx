import { CategoriesList } from "@/app/components/CategoriesList/CategoriesList";
import { ProductDetails } from "@/app/components/ProductDetails/ProductDetails";
import { Wrapper } from "@/app/components/Wrapper/Wrapper";
import { getProductDetails } from "@/app/lib/productDetailsFetch";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductDetails(params?.slug);
  console.log(product);

  return (
    <>
      <Wrapper sectionHeader>
        <CategoriesList />
        <ProductDetails data={product} />
      </Wrapper>
    </>
  );
}
