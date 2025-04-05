import Link from "next/link";
import s from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link className={s.linkStyling} href="/">
      <div className={s.logoStyling}>
        <h1>
          Den Grønne <span>Avis</span>
        </h1>
      </div>
    </Link>
  );
};
