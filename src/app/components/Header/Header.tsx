import s from "./Header.module.scss";

export default function Header({ children }: { children: React.ReactNode }) {
  return <header className={s.headerStyling}>{children}</header>;
}
