import s from "./Icon.module.scss";

interface IconInterface {
  src: string;
  alt: string;
  type?: string;
}

export const Icon = ({ src, alt, type }: IconInterface) => {
  return (
    <img
      className={`${s.iconStyling} ${type ? s[type] : ""}`}
      src={src}
      alt={alt}
    />
  );
};
