import s from "./Button.module.scss";

interface ButtonInterface {
  action: () => void;
  type: string;
  text: string;
  active?: string;
}

export const Button = ({ action, type, text, active }: ButtonInterface) => {
  return (
    <button
      onClick={action}
      className={`${s.buttonStyling} ${type ? s[type] : ""} ${
        active ? s[active] : ""
      }`}
    >
      {text}
    </button>
  );
};
