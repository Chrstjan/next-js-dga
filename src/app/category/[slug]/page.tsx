"use client";

import { CategoriesList } from "@/app/components/CategoriesList/CategoriesList";
import { FeaturedCard } from "@/app/components/FeaturedCard/FeaturedCard";
import { Pageination } from "@/app/components/Pageination/Pageination";
import { Wrapper } from "@/app/components/Wrapper/Wrapper";
import { getCategoryProducts } from "@/app/lib/categoryProductsFetch";
import React, { useEffect, useState } from "react";

type Params = {
  slug: string;
};

export default function CategoryPage({ params }: { params: Params }) {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(9);
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const [products, setProducts] = useState<Product[]>();

  const { slug } = params;

  useEffect(() => {
    if (slug && slug.length > 0) {
      const getProducts = async () => {
        const data = await getCategoryProducts(slug);
        setAllProducts(data);
      };
      getProducts();
    }
  }, [slug]);

  useEffect(() => {
    let currentProducts = allProducts?.slice(
      firstProductIndex,
      lastProductIndex
    );
    setProducts(currentProducts);
  }, [allProducts, currentPage]);

  return (
    <>
      <Wrapper sectionHeader>
        <CategoriesList />
        {products && products?.length > 0 ? (
          <FeaturedCard data={products} productListing />
        ) : null}
      </Wrapper>
      <Wrapper>
        <Pageination
          totalProducts={allProducts?.length}
          productsPerPage={productsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Wrapper>
    </>
  );
}
