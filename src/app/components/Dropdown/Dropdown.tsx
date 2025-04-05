"use client";
import { useEffect, useState } from "react";
import s from "./Dropdown.module.scss";
import { useRouter } from "next/navigation";

interface DropdownInterface {
  canNavigate?: boolean;
  defaultText: string;
  type?: string;
}

export const Dropdown = ({
  canNavigate,
  defaultText,
  type,
}: DropdownInterface) => {
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

  const handleCategoryNavigate = (e: string) => {
    router.push(`/category/${e}`);
  };

  const handleCreateProduct = () => {};

  return (
    <>
      <select
        onChange={(e) =>
          canNavigate
            ? handleCategoryNavigate(e?.target?.value)
            : handleCreateProduct()
        }
        className={`${s.dropdownStyling} ${type ? s[type] : ""}`}
      >
        <option
          defaultValue={
            categories?.length > 0 ? defaultText : "ingen kategorier"
          }
        >
          {categories?.length > 0 ? defaultText : "ingen kategorier"}
        </option>
        {categories?.length > 0 &&
          categories?.map((item: Category) => {
            return (
              <option value={item?.slug} key={item?.id}>
                {item?.name}
              </option>
            );
          })}
      </select>
    </>
  );
};
