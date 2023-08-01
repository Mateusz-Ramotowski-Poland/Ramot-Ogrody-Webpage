import styles from "./GlownaIntroduction.module.scss";
import { ButtonLink } from "../components";
import glowna1 from "../images/glowna1.webp";

export const GlownaIntroduction = () => {
  return (
    <section className={styles.container}>
      <img src={glowna1} alt="Właściciel firmy" className={styles.img}></img>
      <div className={styles.text}>
        <p className={styles.description}>
          Nasza firma zajmowała się na początku sprzedażą drzewa opałowego oraz wycinką drzew. Z czasem poszerzyliśmy nasze usługi o prace ogrodnicze
          oraz o alpinistyczną wycinkę drzew.
        </p>
        <p className={styles.description}>
          Pracujemy głównie na obszarze powiatu Giżyckiego, w północno wschodniej części Polski. Ciągle poszerzamy nasze umiejętności i bierzemy
          udział w specjalistycznych szkoleniach.
        </p>
        <ButtonLink text="Zobacz certyfikaty" href="/certyfikaty" />
      </div>
    </section>
  );
};
