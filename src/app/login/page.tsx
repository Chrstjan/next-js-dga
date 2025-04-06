"use client";

import { useState } from "react";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { SignupForm } from "../components/SignupForm/SignupForm";

export default function LoginPage() {
  const [showForm, setShowForm] = useState<string>("login");
  return (
    <>
      <Wrapper sectionHeader headerText="Velkommen tilbage">
        {showForm == "login" ? (
          <LoginForm setShowForm={setShowForm} />
        ) : (
          <SignupForm setShowForm={setShowForm} />
        )}
      </Wrapper>
    </>
  );
}
