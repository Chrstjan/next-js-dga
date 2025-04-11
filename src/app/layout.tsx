import type { Metadata } from "next";
import { cookies } from "next/headers";
import { UserContextProvider } from "./context/UserContext";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Logo } from "./components/Logo/Logo";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Icon } from "./components/Icon/Icon";
import Link from "next/link";
import { CreateButton } from "./components/CreateButton/CreateButton";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Den Grønne Avis",
  description: "Den grønne avis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const allCookies = cookies();
  const token = allCookies.get("access_token")?.value;

  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <Header>
            <Logo />
            <Dropdown canNavigate defaultText="vælg kategori" />
            <CreateButton />
            <Wrapper>
              <Icon src="/icons/mail.svg" alt="mail logo" type="navLogo" />
              <Icon src="/icons/info.svg" alt="info logo" type="navLogo" />
              {token && token?.length > 0 ? (
                <Link href="/account">
                  <Icon
                    src="/icons/Account.svg"
                    alt="account logo"
                    type="navLogo"
                  />
                </Link>
              ) : (
                <Link href="/login">
                  <Icon
                    src="/icons/Account.svg"
                    alt="account logo"
                    type="navLogo"
                  />
                </Link>
              )}
            </Wrapper>
          </Header>
          {children}
          <Footer></Footer>
        </UserContextProvider>
      </body>
    </html>
  );
}
