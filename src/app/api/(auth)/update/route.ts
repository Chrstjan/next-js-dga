import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function PATCH(req: Request) {
  const allCookies = await cookies();
  const token = allCookies.get("access_token")?.value;
  const {
    firstname,
    lastname,
    address,
    zipcode,
    email,
    hasNewsletter,
    hasNotification,
  } = await req.json();

  const formData = {
    email: email,
    firstname: firstname,
    lastname: lastname,
    address: address,
    zipcode: zipcode,
    hasNewsletter: hasNewsletter,
    hasNotification: hasNotification,
  };

  const res = await fetch(`http://localhost:4242/users`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    return NextResponse.json(
      { message: "Error in updating user" },
      { status: 400 }
    );
  }

  const data = await res.json();

  return NextResponse.json({ message: "Signup successful", data });
}
