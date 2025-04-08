import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password, firstname, lastname, address, city, zipcode } =
    await req.json();

  const formData = {
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
    address: address,
    zipcode: zipcode,
    city: city,
  };

  const res = await fetch("http://localhost:4242/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    return NextResponse.json({ message: "Error in signup" }, { status: 400 });
  }

  const data = await res.json();

  return NextResponse.json({ message: "Signup successful", data });
}
