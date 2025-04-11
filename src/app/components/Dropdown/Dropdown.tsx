"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import s from "./Dropdown.module.scss";
import { useRouter } from "next/navigation";

interface DropdownInterface {
  canNavigate?: boolean;
  creatingProduct?: boolean;
  defaultText: string;
  type?: string;
  setProductCategory?: Dispatch<SetStateAction<string>>;
}

export const Dropdown = ({
  canNavigate,
  creatingProduct,
  defaultText,
  type,
  setProductCategory,
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

  const handleCreateProduct = (e: string) => {
    {
      setProductCategory ? setProductCategory(e) : null;
    }
  };

  return (
    <>
      <select
        onChange={(e) =>
          canNavigate
            ? handleCategoryNavigate(e?.target?.value)
            : handleCreateProduct(e?.target?.value)
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
              <option
                value={creatingProduct ? item?.id : item?.slug}
                key={item?.id}
              >
                {item?.name}
              </option>
            );
          })}
      </select>
    </>
  );
};
