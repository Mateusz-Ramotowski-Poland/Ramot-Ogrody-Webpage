import { ButtonLink } from "./ButtonLink";
import styles from "./GlownaEnd.module.scss";
import { TitleH3 } from "./TitleH3";

export const GlownaEnd = () => {
  return (
    <>
      <TitleH3 text="Zapraszamy do współpracy" />
      <p className={styles.paragraph}> Jeśli nie znalazłeś tego czego szukałeś sprawdź</p>
      <ButtonLink text="Najczęściej zadawane pytania" href="/faq" />
      <p className={styles.paragraph}> Jeśli szukasz dobrego specjalisty</p>
      <ButtonLink text="Napisz do nas" href="/kontakt" />
    </>
  );
};
