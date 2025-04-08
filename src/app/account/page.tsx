"use client";

import { useState } from "react";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Button } from "../components/Button/Button";
import { AccountForm } from "../components/AccountForm/AccountForm";
import { UserProduct } from "../components/UserProduct/UserProduct";

export default function AccountPage() {
  const [showSelected, setShowSelected] = useState<string>("form");
  return (
    <>
      <Wrapper sectionHeader type="btnWrapper">
        <Button
          action={() => setShowSelected("form")}
          type="accountBtn"
          text="Min profil"
          active={showSelected == "form" ? "active" : ""}
        />
        <Button
          action={() => setShowSelected("products")}
          type="accountBtn"
          text="Mine Annoncer"
          active={showSelected == "products" ? "active" : ""}
        />
      </Wrapper>
      <Wrapper>
        {showSelected == "form" ? <AccountForm /> : <UserProduct />}
      </Wrapper>
    </>
  );
}
