import { Link } from "react-router-dom";
import styles from "./GlownaEnd.module.scss";
import { TitleH3 } from "./TitleH3";

export const GlownaEnd = () => {
  return (
    <>
      <TitleH3 text="Zapraszamy do współpracy" />
      <p className={styles.paragraph}>
        Jeśli nie znalazłeś tego czego szukałeś sprawdź
        <Link to="/faq"> najczęściej zadawane pytania.</Link>
      </p>

      <p className={styles.paragraph}>
        Szukasz dobrego specjalisty? <Link to="/kontakt"> Napisz do nas.</Link>
      </p>
    </>
  );
};
