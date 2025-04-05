import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footerStyling}>
      <div className={s.leftContainer}></div>
      <div className={s.middleContainer}>
        <header>
          <h3>Kontakt</h3>
        </header>
        <p>Redningen 32</p>
        <p>2210 Vinterby Øster</p>
        <p>+45 88229422</p>
        <p>dga@info.dk</p>
      </div>
      <div className={s.rightContainer}>
        <header>
          <h3>FN's Verdensmål</h3>
        </header>
        <p>
          Vi støtter på organisatorisk plan op om FN´s verdensmål og har derfor
          besluttet at en del af overskuddet går direkte til verdensmål nr. 13;
          Klimahandling
        </p>
        <a href="https://www.verdensmaalene.dk/maal" target="_blank">
          {" "}
          Læs mere om verdensmålene her
        </a>
      </div>
    </footer>
  );
};
