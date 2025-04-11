import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const allCookies = await cookies();
  const token = allCookies.get("access_token")?.value;

  const { name, image, description, price, category_id } = await req.json();

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const formData = {
    name: name,
    image: image,
    description: description,
    price: price,
    category_id: category_id,
  };

  const res = await fetch("http://localhost:4242/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    return NextResponse.json(
      { message: "Error in creating product" },
      { status: 500 }
    );
  }

  const data = await res.json();

  const response = NextResponse.json({
    message: "Product created",
    data,
  });
  return response;
}
