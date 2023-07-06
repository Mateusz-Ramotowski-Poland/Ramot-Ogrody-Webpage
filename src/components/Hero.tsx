import hero1 from "../images/hero1.jpg";
import hero2 from "../images/hero2.jpg";
import hero3 from "../images/hero3.jpg";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Ramot ogrody</h1>
      <div className={styles.paragraph_container}>
        <p className={styles.paragraph}>Płatność za ułożone drzewo, nie za powietrze</p>
        <p className={styles.paragraph}>Profesjonalny sprzęt i bezpieczna wycinka</p>
        <p className={styles.paragraph}>Dokładność w pracach ogrodniczych</p>
      </div>
      <ul>
        <img src={hero1} alt="ogród" className={styles.photo}></img>
        <img src={hero2} alt="ogród" className={styles.photo}></img>
        <img src={hero3} alt="ogród" className={styles.photo}></img>
      </ul>
    </div>
  );
};
