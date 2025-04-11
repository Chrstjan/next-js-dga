"use client";

import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Toastbar } from "../Toastbar/Toastbar";
import s from "./ProductForm.module.scss";
import { Dropdown } from "../Dropdown/Dropdown";
import { useContext, useState } from "react";
import { UserContext } from "@/app/context/UserContext";

export const ProductForm = () => {
  const { user } = useContext(UserContext);
  const [productCategory, setProductCategory] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const notify = (success: boolean) => {
    if (success) {
      toast("Annonce oprettet!");
    } else {
      toast("Fejl i at oprette annonce");
    }
  };

  const handleFormSubmit = async (data: FieldValues) => {
    const { title, description, image, price } = { ...data };
    let category;

    if (productCategory?.length > 0) {
      category = productCategory;
    }

    const formData = {
      name: title,
      image: image,
      description: description,
      price: price,
      category_id: category,
    };

    const res = await fetch("/api/products/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.access_token}`,
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      notify(false);
      throw new Error("Error in creating product");
    }

    const productData = await res.json();
    if (productData?.message == "Product created") {
      notify(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={s.formStyling}>
        <span className={s.inputContainer}>
          <label htmlFor="title">Title</label>
          <input
            {...register("title", {
              required: "title skal indeholde noget",
              minLength: {
                value: 4,
                message: "title skal være mindst 4 bogstaver",
              },
            })}
            type="text"
            id="title"
            name="title"
            placeholder="Title på dit produkt....."
          />
        </span>
        {errors.title ? <p>{errors.title.message as string}</p> : null}
        <span className={s.inputContainer}>
          <label>Kategori</label>
          <Dropdown
            creatingProduct
            defaultText="Hvilken kategori tilhører dit produkt...."
            setProductCategory={setProductCategory}
          />
        </span>
        <span className={s.inputContainer}>
          <label htmlFor="description">Annonce tekst</label>
          <textarea
            {...register("description", {
              required: "beskrivelse skal indeholde noget",
              minLength: {
                value: 10,
                message: "beskrivelse skal være mindst 10 bogstaver",
              },
            })}
            id="description"
            name="description"
            placeholder="Skriv en annonce tekst her der beskriver produktet......"
          />
        </span>
        {errors.description ? (
          <p>{errors.description.message as string}</p>
        ) : null}
        <span className={s.inputContainer}>
          <label htmlFor="image">URL til billede</label>
          <input
            {...register("image", {
              required: "Billede sti skal indeholde noget",
              minLength: {
                value: 8,
                message: "Billede sti Skal være mindst 8 bogstaver",
              },
            })}
            type="text"
            id="image"
            name="image"
            placeholder="Har du et billede som ligger på nettet kan du indsætte en URL her..."
          />
        </span>
        {errors.image ? <p>{errors.image.message as string}</p> : null}
        <span className={s.inputContainer}>
          <label htmlFor="price">Pris</label>
          <input
            {...register("price", {
              required: "Pris er påkrævet",
              minLength: {
                value: 1,
                message: "Pris skal være mindst et cifre",
              },
            })}
            type="number"
            id="price"
            name="price"
            placeholder="Pris....."
          />
        </span>
        {errors.price ? <p>{errors.price.message as string}</p> : null}
        <span className={s.buttonContainer}>
          <input type="submit" value="Opret" />
        </span>
      </form>
      <Toastbar />
    </>
  );
};
