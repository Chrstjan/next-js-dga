"use client";

import { UserContext } from "@/app/context/UserContext";
import { useContext, useEffect, useState } from "react";
import s from "./UserProduct.module.scss";
import { useRouter } from "next/navigation";
import { deleteProduct } from "@/app/actions/deleteProduct";

export const UserProduct = () => {
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState<Product[]>([]);

  const router = useRouter();

  useEffect(() => {
    const getUserProducts = async () => {
      try {
        const res = await fetch("http://localhost:4242/products");

        if (!res.ok) {
          throw new Error("Error getting products");
        }

        const data = await res.json();

        if (data?.data && data?.data?.length > 0) {
          let allProducts = [...data?.data];
          let userProducts = allProducts.filter((item: Product) => {
            return item?.user_id == user?.user?.id;
          });
          setProducts(userProducts);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getUserProducts();
  }, []);

  const handleRemoveProduct = async (id: number) => {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((item: Product) => item.id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <>
      {products?.length > 0 ? (
        products?.map((item: Product) => {
          return (
            <div key={item?.id}>
              <figure className={s.cardStyling}>
                <figcaption>
                  <span className={s.barStyling}>
                    <h3>{item?.name}</h3>
                    <h3>Pris: {item?.price} kr</h3>
                  </span>
                  <p>{item?.description}</p>
                </figcaption>
                <img src={item?.image} alt={item?.name} />
              </figure>
              <span className={s.footerContainer}>
                <p onClick={() => router.push(`/product/${item?.slug}`)}>
                  Gå til annonce
                </p>
                <p
                  onClick={() => handleRemoveProduct(item?.id)}
                  className={s.removeStyling}
                >
                  Fjern annonce
                </p>
              </span>
            </div>
          );
        })
      ) : (
        <h2 className={s.errorMessage}>Ingen annoncer fundet</h2>
      )}
    </>
  );
};
