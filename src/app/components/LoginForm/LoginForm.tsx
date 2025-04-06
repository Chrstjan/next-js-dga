"use client";

import { FieldValues, useForm } from "react-hook-form";
import s from "./LoginForm.module.scss";
import { Icon } from "../Icon/Icon";
import { Dispatch, SetStateAction, useContext } from "react";
import { UserContext } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";

export const LoginForm = ({
  setShowForm,
}: {
  setShowForm: Dispatch<SetStateAction<string>>;
}) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const handleFormSubmit = async (data: FieldValues) => {
    console.log(data);
    const { username, password } = { ...data };

    const formData = {
      username: username,
      password: password,
    };

    const res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Error in login");
    }

    const userData = await res.json();

    if (userData.message == "Login successful") {
      console.log("LOGIN!");
      router.push("/account");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={s.formStyling}>
      <span className={s.inputContainer}>
        <label htmlFor="username">Email</label>
        <input
          {...register("username", {
            required: "Email er påkrævet",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Ikke gyldig email",
            },
            minLength: {
              value: 8,
              message: "Email skal være mindst 8 bogstaver",
            },
          })}
          type="email"
          id="username"
          name="username"
          placeholder="Din email....."
        />
        <Icon src="/icons/At sign.svg" alt="At Icon" type="formIcon" />
      </span>
      {errors.username ? <p>{errors.username.message as string}</p> : null}
      <span className={s.inputContainer}>
        <label htmlFor="password">Password</label>
        <input
          {...register("password", {
            required: "Password er påkrævet",
            pattern: {
              value: /^[A-Za-z\d@$!%*?&]{5,}$/,
              message: "Ikke gyldigt password",
            },
            minLength: {
              value: 5,
              message: "Password skal være mindst 5 bogstaver",
            },
          })}
          type="password"
          id="password"
          name="password"
          placeholder="Dit password......"
        />
        <Icon src="/icons/Secure.svg" alt="Secure Icon" type="formIcon" />
      </span>
      {errors.password ? <p>{errors.password.message as string}</p> : null}
      <p className={s.formLinkContainer}>
        Har du ikke allerede en konto? Klik{" "}
        <span className={s.formLink} onClick={() => setShowForm("signup")}>
          her
        </span>{" "}
        for at gå til sign up
      </p>
      <span className={s.buttonContainer}>
        <input type="submit" value="Login" />
      </span>
    </form>
  );
};
