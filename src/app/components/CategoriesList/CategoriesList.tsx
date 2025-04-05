"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import s from "./CategoriesList.module.scss";

export const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:4242/categories");

        if (!res.ok) {
          throw new Error("Error getting categories");
        }

        const data = await res.json();

        if (data?.data?.length > 0) {
          setCategories(data?.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getCategories();
  }, []);

  const handleCategorySelect = (e: string) => {
    router.push(`/category/${e}`);
  };

  return (
    <ul className={s.listingStyling}>
      {categories?.length > 0 ? (
        categories?.map((item: Category) => {
          return (
            <li
              onClick={(e) =>
                handleCategorySelect((e?.target as HTMLElement).innerText)
              }
              key={item?.id}
            >
              {item?.slug}
            </li>
          );
        })
      ) : (
        <li>Ingen kategorier fundet</li>
      )}
    </ul>
  );
};
