import type { Metadata } from "next";
import "./globals.scss";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Logo } from "./components/Logo/Logo";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Icon } from "./components/Icon/Icon";
import { UserContextProvider } from "./context/UserContext";

export const metadata: Metadata = {
  title: "Forside",
  description: "Den grønne avis",
};

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
              <Icon
                src="/icons/Account.svg"
                alt="account logo"
                type="navLogo"
              />
            </Wrapper>
          </Header>
          {children}
          <Footer></Footer>
        </UserContextProvider>
      </body>
    </html>
  );
}
