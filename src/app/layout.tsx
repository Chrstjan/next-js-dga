import type { Metadata } from "next";
import "./globals.scss";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Logo } from "./components/Logo/Logo";
import { Dropdown } from "./components/Dropdown/Dropdown";

export const metadata: Metadata = {
  title: "Den Grønne Avis",
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
        <Header>
          <Logo />
          <Dropdown canNavigate defaultText="vælg kategori" />
        </Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
