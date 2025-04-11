import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function DELETE() {
  const allCookies = await cookies();
  const token = allCookies.get("access_token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const res = await fetch("http://localhost:4242/users", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json(
      { message: "Error in deleting user" },
      { status: 500 }
    );
  }

  const data = await res.json();

  const response = NextResponse.json({ message: "Deleted successfully", data });

  response.cookies.delete("access_token");

  return response;
}
