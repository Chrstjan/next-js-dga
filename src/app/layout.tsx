import type { Metadata } from "next";
import { cookies } from "next/headers";
import { UserContextProvider } from "./context/UserContext";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Logo } from "./components/Logo/Logo";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Icon } from "./components/Icon/Icon";
import "./globals.scss";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forside",
  description: "Den grønne avis",
};

const allCookies = await cookies();
const token = allCookies.get("access_token")?.value;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <Header>
            <Logo />
            <Dropdown canNavigate defaultText="vælg kategori" />
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
