import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Make your login request here
  const res = await fetch("http://localhost:4242/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    return NextResponse.json({ message: "Error in login" }, { status: 400 });
  }

  const userData = await res.json();

  if (userData?.message == "Success") {
    const accessToken = userData?.data?.access_token;
    const response = NextResponse.json({ message: "Login successful" });

    // Set the cookie server-side
    response.cookies.set("access_token", accessToken, {
      httpOnly: true, // To make it accessible only server-side
      path: "/", // Accessible across all routes
    });

    return response;
  }
  return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
}
