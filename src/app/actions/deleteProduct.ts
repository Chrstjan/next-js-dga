"use server";

import { cookies } from "next/headers";

export async function deleteProduct(productId: number) {
  const token = cookies().get("access_token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(`http://localhost:4242/products/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to delete product");
  }

  return await res.json();
}
