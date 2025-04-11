"use client";

import { useRouter } from "next/navigation";
import { Button } from "../Button/Button";

export const CreateButton = () => {
  const router = useRouter();
  return (
    <>
      <Button
        action={() => router.push("/create")}
        text="opret annonce"
        type="createButton"
      />
    </>
  );
};
