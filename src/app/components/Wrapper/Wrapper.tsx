import s from "./Wrapper.module.scss";

interface WrapperInterface {
  children: React.ReactNode;
  sectionHeader?: boolean;
  headerText?: string;
  subHeaderText?: string;
  type?: string;
}

export const Wrapper = ({
  children,
  sectionHeader,
  headerText,
  subHeaderText,
  type,
}: WrapperInterface) => {
  return (
    <>
      <section className={`${s.wrapperStyling} ${type ? s[type] : ""}`}>
        {sectionHeader ? (
          <header className={s.headerStyling}>
            {headerText ? <h3>{headerText}</h3> : null}
            {subHeaderText ? <p>{subHeaderText}</p> : null}
          </header>
        ) : null}
        {children}
      </section>
    </>
  );
};
