import s from "./Banner.module.scss";

interface BannerInterface {
  type: string;
  headerText: string;
  subText: string;
  moneyText?: string;
  footerText?: string;
}

export const Banner = ({
  type,
  headerText,
  subText,
  moneyText,
  footerText,
}: BannerInterface) => {
  return (
    <div className={`${s.bannerStyling} ${type ? s[type] : ""}`}>
      <h2>{headerText}</h2>
      <p>{subText}</p>
      {moneyText ? <p className={s.moneyStyling}>{moneyText}</p> : null}
      {footerText ? <p>{footerText}</p> : null}
    </div>
  );
};
